// Simple Photo Gallery for Zepp OS
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
    
    // Create image widget showing first photo
    imageWidget = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      src: 'photo_0.png'
    });
    
    // Create text to show image number
    textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 310,
      w: 360,
      h: 50,
      text: '1 / 11',
      text_size: 24,
      color: 0xffffff,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V
    });
    
    // Handle swipe gestures
    hmUI.createWidget(hmUI.widget.STROKE_RECT, {
      x: 0,
      y: 0,
      w: 360,
      h: 360,
      color: 0x000000
    }).addEventListener(hmUI.event.CLICK_DOWN, (info) => {
      // Next image on tap
      nextImage();
    });
    
    // Register key event for navigation
    hmUI.setKeyHandler((key, action) => {
      if (action === hmUI.key.action.RELEASE) {
        if (key === hmUI.key.UP) {
          previousImage();
          return true;
        } else if (key === hmUI.key.DOWN) {
          nextImage();
          return true;
        }
      }
      return false;
    });
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
  if (imageWidget) {
    imageWidget.setProperty(hmUI.prop.MORE, {
      src: `photo_${currentIndex}.png`
    });
  }
  if (textWidget) {
    textWidget.setProperty(hmUI.prop.MORE, {
      text: `${currentIndex + 1} / ${totalImages}`
    });
  }
  
  // Vibrate for feedback
  hmApp.alarmNew({
    type: 'vibrate'
  });
}
