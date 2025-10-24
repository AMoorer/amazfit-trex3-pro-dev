# Photo Gallery App - Installation Guide

## 📱 Your App is Ready!

**Built file location:**
```
C:\Users\andym\CascadeProjects\AmazfitTrexPro\photo-gallery\dist\1025525-Photo_Gallery-1.0.0-20251024175855.zab
```

**Contains:** 11 of your personal photos ready to view on your watch!

---

## 🔧 Installation Methods

### **Method 1: QR Code via Zepp App (Recommended)**

1. **Enable Developer Mode in Zepp App:**
   - Open Zepp app → Profile
   - Tap your watch name at the top 7 times rapidly
   - Look for "Developer Mode" to appear in settings
   - Enable it

2. **Generate QR Code:**
   ```powershell
   cd C:\Users\andym\CascadeProjects\AmazfitTrexPro\photo-gallery
   zeus preview
   ```

3. **Scan the QR code** that appears in your terminal with the Zepp app
   - Look for QR scanner icon in the Zepp app (usually top-right)
   - Point your phone camera at the computer screen
   - App installs automatically!

---

### **Method 2: Manual File Transfer**

If QR code doesn't work:

1. **Transfer the .zab file to your phone:**
   - Email it to yourself
   - Use Google Drive/Dropbox
   - USB transfer to phone

2. **Open the .zab file on your phone**
   - The Zepp app should recognize it
   - Tap to install

---

### **Method 3: Developer Bridge (Advanced)**

If you can enable Developer Options on the watch:

1. **On Watch:** Settings → System → About → Tap build number 7 times
2. **Enable:** Developer Options → ADB Debugging → Wireless Debugging
3. **Note the IP address** shown on watch
4. **On Computer:**
   ```powershell
   cd C:\Users\andym\CascadeProjects\AmazfitTrexPro\photo-gallery
   zeus bridge
   ```
5. **In bridge terminal:**
   ```
   connect <watch-ip>:5555
   install
   ```

---

## 🎮 Using the App on Your Watch

Once installed, open "Photo Gallery" on your watch:

- **Tap screen** → Next photo
- **Up button** → Previous photo
- **Down button** → Next photo
- **Back button** → Exit app
- **Counter** at bottom shows current position (e.g., "5 / 11")

---

## 🔄 Updating Photos

To change your photos:

1. **Add new photos** to a folder on your computer

2. **Run the preparation script:**
   ```powershell
   python tools\prepare-images.py "C:\path\to\your\new\photos"
   ```

3. **Update the count** in `photo-gallery/page/index.js`:
   ```javascript
   const totalImages = 11; // Change this to match your photo count
   ```

4. **Rebuild:**
   ```powershell
   cd photo-gallery
   zeus build
   ```

5. **Reinstall** using any of the methods above

---

## ⚙️ Installed Tools

Your development environment includes:

- ✅ **Node.js v22.21.0** - JavaScript runtime
- ✅ **npm v10.9.4** - Package manager  
- ✅ **Zeus CLI v1.7.6** - Zepp OS build tool
- ✅ **Python 3** - For image processing
- ✅ **Pillow library** - Image manipulation

---

## 📂 Project Files

```
AmazfitTrexPro/
├── photo-gallery/
│   ├── app.js                    # App entry point
│   ├── app.json                  # App configuration
│   ├── icon.png                  # App icon
│   ├── page/
│   │   └── index.js             # Main gallery page
│   ├── assets/
│   │   └── trex-3-pro/          # Your 11 photos + icon
│   │       ├── photo_0.png through photo_10.png
│   │       └── icon.png
│   └── dist/
│       └── *.zab                # Built app package
├── tools/
│   ├── prepare-images.py        # Image processing script
│   └── requirements.txt         # Python dependencies
└── README.md
```

---

## 🐛 Troubleshooting

### "Download failed error code null"
- App may be incompatible with current Zepp OS version
- Try manual file transfer method instead

### Developer Mode won't appear
- Try tapping watch name 10-15 times
- Check Zepp app is latest version
- Some features may be region-locked

### Bridge won't connect
- Ensure watch and PC on same WiFi
- Check firewall isn't blocking connection
- Verify Developer Options enabled on watch

### QR code expires
- QR codes expire after 7 days
- Run `zeus preview` again to generate a new one

---

## 📞 Next Steps

If none of the installation methods work:

1. **Check Zepp OS version** on your watch (Settings → About)
2. **Update Zepp app** to latest version on your phone
3. **Try a simple test app** first to verify installation method works
4. **Contact Amazfit support** for enabling developer features

---

## 🎉 Summary

You've successfully created a custom photo gallery app for your Amazfit T-Rex 3 Pro with:

- ✅ 11 personal photos prepared and optimized (360x360px)
- ✅ App code written using Zepp OS API
- ✅ Project built and ready to install (.zab file created)
- ✅ All code saved to GitHub repository
- ✅ Tools installed for future app development

**Your app package is ready!** Try the QR code method first, and if that doesn't work, use manual file transfer.

Good luck! 🚀
