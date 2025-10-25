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
    
    // Create black background
    hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 0,
      y: 0,
      w: 360,
      h: 360,
      color: 0x000000
    });
    
    // Create image widget showing first photo - full screen
    console.log('Loading image: photo_0.png');
    imageWidget = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: 360,
      h: 360,
      src: 'photo_0.png'
    });
    console.log('Image widget created');
    
    // Left side button - previous photo
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: 180,
      h: 360,
      src: ''
    }).addEventListener(hmUI.event.CLICK_UP, (info) => {
      console.log('Previous photo');
      previousImage();
    });
    
    // Right side button - next photo
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 180,
      y: 0,
      w: 180,
      h: 360,
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
