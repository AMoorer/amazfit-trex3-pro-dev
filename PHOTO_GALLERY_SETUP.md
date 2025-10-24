# Photo Gallery App - Complete Setup Guide

## Overview

This guide will help you set up and use the Photo Gallery app on your Amazfit Trex 3 Pro smartwatch.

## What You'll Need

1. **Python 3.7 or later** - For image processing
2. **Pillow library** - Python image manipulation library
3. **Node.js & npm** - For building the app
4. **Zepp OS CLI** - For deploying to your watch
5. **Up to 20 photos** - Your favorite images for the gallery

---

## Step-by-Step Setup

### 1. Install Python Dependencies

Open a terminal/command prompt and run:

```bash
cd tools
pip install -r requirements.txt
```

This installs the Pillow library needed for image processing.

### 2. Prepare Your Photos

#### Option A: Using the Python Script (Recommended)

1. **Gather your photos** in a single folder on your computer
   - Supported formats: JPG, PNG, BMP, GIF, WebP
   - Maximum: 20 images
   - Any size/resolution (will be resized automatically)

2. **Run the preparation script:**

   **Windows:**
   ```bash
   tools\prepare-images.bat "C:\Users\YourName\Pictures\MyWatchPhotos"
   ```

   **Mac/Linux:**
   ```bash
   python tools/prepare-images.py "/Users/YourName/Pictures/MyWatchPhotos"
   ```

3. The script will:
   - Resize all images to 360x360 pixels
   - Convert them to PNG format
   - Save them as `photo_0.png`, `photo_1.png`, etc.
   - Place them in `photo-gallery/assets/images/`

#### Option B: Manual Preparation

If you prefer to resize images manually:

1. Use any image editor (Photoshop, GIMP, Paint.NET, etc.)
2. Resize each image to **360x360 pixels**
3. Save as PNG format
4. Name them: `photo_0.png`, `photo_1.png`, `photo_2.png`, etc.
5. Place in `photo-gallery/assets/images/` folder

### 3. Build the App

```bash
npm run build:gallery
```

This compiles the app for your watch.

### 4. Deploy to Your Watch

#### Via Zepp App (Sideloading)

1. The build creates a `.zpk` file in the output directory
2. Transfer this file to your phone
3. Use the Zepp app's developer mode to install
4. Follow Zepp app instructions for sideloading

#### Via USB (if supported)

1. Connect your watch to your computer
2. Use the Zepp OS deployment tools
3. Follow the official Zepp OS deployment guide

---

## Using the App on Your Watch

### Navigation

- **Swipe Left** → Next image
- **Swipe Right** → Previous image  
- **Back Button** → Exit app

### Features

- **Image Counter**: Shows current position (e.g., "3 / 20")
- **Haptic Feedback**: Gentle vibration when changing images
- **Auto-Wrap**: Swipe left on the last image returns to the first
- **Black Letterboxing**: Non-square images are centered with black bars

---

## Tips for Best Results

### Image Selection

✅ **DO:**
- Use high-contrast images
- Choose images with clear subjects
- Square images work best (360x360)
- Use bright, vibrant colors

❌ **AVOID:**
- Extremely detailed images (details may be lost)
- Very dark images (hard to see on watch)
- Text-heavy images (text may be unreadable)

### Photography Tips

- **Portraits**: Work great, faces are clearly visible
- **Landscapes**: Best with distinct features
- **Pets**: Close-up shots work well
- **Abstract**: High-contrast patterns look stunning

---

## Troubleshooting

### Problem: Images Don't Appear

**Solution:**
1. Check that images are in `photo-gallery/assets/images/`
2. Verify naming: `photo_0.png`, `photo_1.png`, etc.
3. Confirm images are exactly 360x360 pixels
4. Rebuild the app: `npm run build:gallery`

### Problem: App Crashes on Launch

**Solution:**
1. Check Zepp OS logs for error messages
2. Verify `app.json` is valid JSON
3. Ensure at least `placeholder.png` exists
4. Try with fewer images first (start with 5)

### Problem: Gestures Not Responding

**Solution:**
1. Make sure to swipe clearly across the screen
2. Update watch firmware if available
3. Try pressing and swiping more deliberately

### Problem: Image Preparation Script Fails

**Solution:**
1. Verify Python is installed: `python --version`
2. Check Pillow is installed: `pip list | grep Pillow`
3. Ensure input folder path is correct
4. Check that folder contains valid image files

---

## Advanced Customization

### Change Number of Images

Edit `photo-gallery/page/index.js`:

```javascript
state: {
  currentIndex: 0,
  totalImages: 10, // Change from 20 to your desired number
  ...
}
```

### Disable Auto-Wrap

In `photo-gallery/page/index.js`, modify `nextImage()` and `previousImage()`:

```javascript
nextImage() {
  if (this.state.currentIndex < this.getImageCount() - 1) {
    this.state.currentIndex++
    this.updateImage()
    vibrator.start(30)
  }
  // Remove the else block for wrap-around
}
```

### Adjust Vibration Intensity

```javascript
vibrator.start(50) // Increase number for stronger vibration (default: 30)
```

### Change Background Color

```javascript
// In build() method, change the FILL_RECT color
createWidget(widget.FILL_RECT, {
  ...
  color: 0x1a1a1a // Change this hex color value
})
```

---

## File Structure Reference

```
AmazfitTrexPro/
├── photo-gallery/           # Main app folder
│   ├── app.json            # App configuration
│   ├── page/
│   │   └── index.js       # Gallery logic
│   ├── assets/
│   │   └── images/        # Your photos go here
│   │       ├── placeholder.png
│   │       ├── photo_0.png
│   │       ├── photo_1.png
│   │       └── ...
│   └── README.md
├── tools/                  # Image preparation tools
│   ├── prepare-images.py
│   ├── prepare-images.bat
│   └── requirements.txt
└── PHOTO_GALLERY_SETUP.md # This file
```

---

## Updating Your Photos

To change the photos on your watch:

1. Run the preparation script again with new images
2. Rebuild the app: `npm run build:gallery`
3. Redeploy to your watch

---

## Performance Notes

- **Storage**: Each 360x360 PNG image is approximately 100-200 KB
- **20 images** = approximately 2-4 MB total
- **RAM usage**: Minimal, only one image loaded at a time
- **Battery impact**: Low, only uses power when app is active

---

## Future Enhancements (Planned)

- [ ] Companion phone app for easier syncing
- [ ] Image zoom with pinch gesture
- [ ] Slideshow mode with auto-advance
- [ ] Multiple galleries/folders
- [ ] Image captions/metadata display
- [ ] Shuffle mode

---

## Support & Feedback

If you encounter issues or have suggestions:
1. Check this guide's troubleshooting section
2. Review the Zepp OS documentation
3. Check GitHub issues for similar problems

---

## Credits

**Developer**: AMoorer  
**Platform**: Zepp OS  
**Device**: Amazfit Trex 3 Pro  
**License**: MIT

Enjoy your personalized photo gallery! 📸✨
