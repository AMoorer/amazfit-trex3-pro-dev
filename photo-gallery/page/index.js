import { createWidget, widget, prop, align, text_style } from '@zos/ui'
import { Vibrator } from '@zos/sensor'
import { showToast } from '@zos/interaction'
import { push } from '@zos/router'
import { onGesture, GESTURE_LEFT, GESTURE_RIGHT } from '@zos/interaction'
import { exit } from '@zos/router'

const vibrator = new Vibrator()

// Photo Gallery App
Page({
  state: {
    currentIndex: 0,
    totalImages: 20, // Maximum 20 images
    imageWidgets: [],
    imageFiles: []
  },

  build() {
    // Screen dimensions for Trex 3 Pro
    const screenWidth = 360
    const screenHeight = 360

    // Initialize image file paths
    this.initializeImages()

    // Create background
    createWidget(widget.FILL_RECT, {
      x: 0,
      y: 0,
      w: screenWidth,
      h: screenHeight,
      color: 0x000000
    })

    // Create image display widget
    this.imageWidget = createWidget(widget.IMG, {
      x: 0,
      y: 0,
      w: screenWidth,
      h: screenHeight,
      src: this.state.imageFiles[0] || 'images/placeholder.png',
      pos_x: 0,
      pos_y: 0
    })

    // Create image counter text
    this.counterText = createWidget(widget.TEXT, {
      x: 0,
      y: screenHeight - 50,
      w: screenWidth,
      h: 50,
      text: `${this.state.currentIndex + 1} / ${this.getImageCount()}`,
      text_size: 24,
      color: 0xffffff,
      align_h: align.CENTER_H,
      align_v: align.CENTER_V
    })

    // Set up gesture controls
    this.setupGestures()
    
    // Set up hardware button handlers
    this.setupButtons()
  },

  initializeImages() {
    // Build array of image paths
    for (let i = 0; i < this.state.totalImages; i++) {
      this.state.imageFiles.push(`images/photo_${i}.png`)
    }
  },

  getImageCount() {
    // In a real implementation, you'd check which images actually exist
    // For now, we'll assume all 20 slots are potentially filled
    return this.state.totalImages
  },

  setupGestures() {
    // Swipe left - next image
    onGesture({
      type: GESTURE_LEFT,
      callback: () => {
        this.nextImage()
      }
    })

    // Swipe right - previous image
    onGesture({
      type: GESTURE_RIGHT,
      callback: () => {
        this.previousImage()
      }
    })
  },

  setupButtons() {
    // Back button exits the app
    // This is handled automatically by Zepp OS
  },

  nextImage() {
    if (this.state.currentIndex < this.getImageCount() - 1) {
      this.state.currentIndex++
      this.updateImage()
      vibrator.stop()
      vibrator.start(30) // Short vibration feedback
    } else {
      // At last image, optionally wrap around
      this.state.currentIndex = 0
      this.updateImage()
      vibrator.stop()
      vibrator.start(50) // Longer vibration to indicate wrap
    }
  },

  previousImage() {
    if (this.state.currentIndex > 0) {
      this.state.currentIndex--
      this.updateImage()
      vibrator.stop()
      vibrator.start(30) // Short vibration feedback
    } else {
      // At first image, optionally wrap around
      this.state.currentIndex = this.getImageCount() - 1
      this.updateImage()
      vibrator.stop()
      vibrator.start(50) // Longer vibration to indicate wrap
    }
  },

  updateImage() {
    // Update the image widget
    const imagePath = this.state.imageFiles[this.state.currentIndex]
    this.imageWidget.setProperty(prop.MORE, {
      src: imagePath
    })

    // Update counter text
    this.counterText.setProperty(prop.MORE, {
      text: `${this.state.currentIndex + 1} / ${this.getImageCount()}`
    })
  },

  onDestroy() {
    // Cleanup when app is closed
    vibrator && vibrator.stop()
  }
})
