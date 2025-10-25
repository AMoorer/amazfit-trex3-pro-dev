// Simple Photo Gallery for Zepp OS - API 1.0
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
    
    // Images are sized correctly per device in assets folders:
    // T-Rex 3 Pro: 480x480
    // Bip 6: 390x450
    // Create full-screen image widget
    console.log('Loading image: photo_0.png');
    imageWidget = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      src: 'photo_0.png'
    });
    console.log('Image widget created');
    
    // Left side button - previous photo (covers left half of screen)
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: 240,
      h: 480,
      src: ''
    }).addEventListener(hmUI.event.CLICK_UP, (info) => {
      console.log('Previous photo');
      previousImage();
    });
    
    // Right side button - next photo (covers right half of screen)
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 240,
      y: 0,
      w: 240,
      h: 480,
      src: ''
    }).addEventListener(hmUI.event.CLICK_UP, (info) => {
      console.log('Next photo');
      nextImage();
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
  console.log(`Updating to photo ${currentIndex}`);
  if (imageWidget) {
    imageWidget.setProperty(hmUI.prop.SRC, `photo_${currentIndex}.png`);
  }
}
