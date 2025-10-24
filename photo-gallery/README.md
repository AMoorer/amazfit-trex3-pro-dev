# Photo Gallery App - Amazfit Trex 3 Pro

A swipeable photo gallery app for the Amazfit Trex 3 Pro smartwatch that displays up to 20 images.

## Features

- 📸 Display up to 20 custom images
- 👆 Swipe left/right to navigate through images
- 🔢 Image counter display
- 📳 Haptic feedback when changing images
- ⬅️ Hardware back button to exit
- 🔄 Auto-wrap (cycles from last to first image)

## Prerequisites

1. Python 3.7+ (for image preparation)
2. Pillow library (Python image processing)
3. Zepp OS CLI (zeus-cli)
4. Node.js and npm

## Quick Start

### Step 1: Install Python Dependencies

```bash
cd tools
pip install -r requirements.txt
```

### Step 2: Prepare Your Images

1. Create a folder with your favorite photos (up to 20 images)
2. Run the image preparation script:

```bash
python tools/prepare-images.py "C:/path/to/your/photos"
```

This will:
- Resize all images to 360x360 pixels
- Convert them to PNG format
- Save them as `photo_0.png`, `photo_1.png`, etc.
- Create a placeholder image for empty slots

### Step 3: Copy Images to App

The script automatically saves images to `photo-gallery/assets/images/`

### Step 4: Build the App

```bash
npm run build:gallery
```

### Step 5: Deploy to Watch

1. Connect your Amazfit Trex 3 Pro to your computer
2. Use the Zepp app or sideload the built app package

## Usage on Watch

- **Swipe Left**: Next image
- **Swipe Right**: Previous image
- **Back Button**: Exit app
- The app will wrap around when you reach the first/last image

## Image Guidelines

### Recommended Image Specifications:
- **Resolution**: 360x360 pixels (or higher, will be resized)
- **Format**: JPG, PNG, BMP, GIF, or WebP
- **Orientation**: Square works best
- **Quantity**: Up to 20 images

### Tips for Best Results:
- Use high-contrast images for better visibility
- Avoid very detailed images (small details may not be visible)
- Portrait or landscape images will be centered with black bars

## Directory Structure

```
photo-gallery/
├── app.json              # App configuration
├── page/
│   └── index.js         # Main gallery page
├── assets/
│   └── images/          # Your processed images go here
│       ├── photo_0.png
│       ├── photo_1.png
│       └── ...
└── README.md            # This file
```

## Customization

### Change Maximum Number of Images

Edit `page/index.js`:
```javascript
state: {
  totalImages: 20, // Change this number (1-20)
  ...
}
```

### Disable Image Wrapping

In `page/index.js`, modify the `nextImage()` and `previousImage()` methods to remove the wrap-around logic.

### Change Vibration Feedback

Edit the vibration duration in `page/index.js`:
```javascript
vibrator.start(30) // Change duration in milliseconds
```

## Troubleshooting

### Images Not Showing
- Verify images are in `photo-gallery/assets/images/` folder
- Check that images are named `photo_0.png`, `photo_1.png`, etc.
- Ensure images are exactly 360x360 pixels

### App Crashes
- Check the Zepp OS logs
- Verify app.json configuration is valid
- Make sure all dependencies are installed

### Gestures Not Working
- Ensure you're using firmware that supports gesture detection
- Try swiping with a clear, deliberate motion

## Development

### Run in Simulator
```bash
npm run dev:gallery
```

### Build for Production
```bash
npm run build:gallery
```

## Future Enhancements

- [ ] Add zoom functionality
- [ ] Slideshow mode with auto-advance
- [ ] Image metadata display
- [ ] Multiple galleries/folders
- [ ] Companion phone app for easier image sync

## License

MIT License - Feel free to modify and distribute

## Credits

Created by AMoorer
