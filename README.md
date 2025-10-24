# Amazfit Trex 3 Pro Development Environment

This is a development environment for creating apps for the Amazfit Trex 3 Pro smartwatch using Zepp OS.

## Prerequisites

1. **Node.js** (v14 or later) - ✅ Installed (v22.21.0)
2. **Zepp OS Development Tools** - Download from official Zepp OS resources
3. **Zepp App** on your phone - For app installation

## Important Note

Zepp OS apps are developed using the official Zepp OS development kit and tools. The app code in this repository is structured for Zepp OS compatibility, but you'll need to:

1. Register as a Zepp OS developer
2. Download the official Zepp OS SDK and tools
3. Use the Zepp watchface maker or official IDE

## Alternative: Quick Deploy

For the **Photo Gallery app** specifically, you can:

1. Your images are already prepared in `photo-gallery/assets/images/`
2. Package the app using Zepp OS tools or the Zepp companion app
3. Sideload to your watch via the Zepp mobile app

## Project Structure

- `app.js` - Main application file
- `zeppos.config.js` - Configuration for the Zepp OS app
- `package.json` - Project dependencies and scripts
- `README.md` - This file

## Development Workflow

1. Make changes to your code
2. Run `npm run build` to build the app
3. Use `npm run simulator` to test in the simulator
4. Deploy to your Amazfit Trex 3 Pro device when ready

## Useful Commands

- `zeus create <app-name>` - Create a new Zepp OS app
- `zeus build` - Build the application
- `zeus simulator` - Launch the simulator
- `zeus debug` - Debug the application

## Documentation

- [Zepp OS Developer Documentation](https://docs.zepp.com/)
- [Amazfit Developer Portal](https://developers.amazfit.com/)
- [Zepp OS API Reference](https://docs.zepp.com/zeppos/)
