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
    
    // Create white background to test visibility
    hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 0,
      y: 0,
      w: 360,
      h: 360,
      color: 0xffffff
    });
    
    // Create image widget showing first photo
    console.log('Loading image: photo_0.png');
    imageWidget = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: 360,
      h: 360,
      src: 'photo_0.png'
    });
    console.log('Image widget created');
    
    // Create text to show image number with background
    hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 0,
      y: 310,
      w: 360,
      h: 50,
      color: 0x000000
    });
    
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
  if (imageWidget) {
    imageWidget.setProperty(hmUI.prop.SRC, `photo_${currentIndex}.png`);
  }
  if (textWidget) {
    textWidget.setProperty(hmUI.prop.TEXT, `${currentIndex + 1} / ${totalImages}`);
  }
}
