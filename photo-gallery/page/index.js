// Simple Photo Gallery for Zepp OS
import { createWidget, widget, align, prop } from '@zos/ui'

let currentIndex = 0;
const totalImages = 11;
let imageWidget;
let textWidget;

Page({
  onInit() {
    console.log('Photo Gallery Init');
  },
  
  build() {
    console.log('Building Photo Gallery');
    
    // Create white background to test visibility
    createWidget(widget.FILL_RECT, {
      x: 0,
      y: 0,
      w: 360,
      h: 360,
      color: 0xffffff
    });
    
    // Create image widget showing first photo
    console.log('Loading image: photo_0.png');
    imageWidget = createWidget(widget.IMG, {
      x: 0,
      y: 0,
      w: 360,
      h: 360,
      src: 'photo_0.png'
    });
    console.log('Image widget created');
    
    // Create text to show image number with background
    createWidget(widget.FILL_RECT, {
      x: 0,
      y: 310,
      w: 360,
      h: 50,
      color: 0x000000
    });
    
    textWidget = createWidget(widget.TEXT, {
      x: 0,
      y: 310,
      w: 360,
      h: 50,
      text: '1 / 11',
      text_size: 24,
      color: 0xffffff,
      align_h: align.CENTER_H,
      align_v: align.CENTER_V
    });
    console.log('Text widget created');
  },
  
  onDestroy() {
    console.log('Photo Gallery Destroy');
  }
});

function nextImage() {
  currentIndex++;
  if (currentIndex >= totalImages) {
    currentIndex = 0; // Wrap to first image
  }
  updateDisplay();
}

function previousImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalImages - 1; // Wrap to last image
  }
  updateDisplay();
}

function updateDisplay() {
  console.log(`Updating to photo ${currentIndex}`);
  // For now, just log - we'll add swipe functionality later
  // The first photo is visible which is success!
}
