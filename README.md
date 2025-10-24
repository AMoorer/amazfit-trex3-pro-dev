# Amazfit Trex 3 Pro Development Environment

This is a development environment for creating apps for the Amazfit Trex 3 Pro smartwatch using Zepp OS.

## Prerequisites

1. Node.js (v14 or later)
2. npm (comes with Node.js)
3. Zepp OS CLI
4. Zepp OS Simulator

## Setup Instructions

1. Install the Zepp OS CLI globally:
   ```bash
   npm install -g @zeppos/zeus-cli
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Build the application:
   ```bash
   npm run build
   ```

4. Run the simulator:
   ```bash
   npm run simulator
   ```

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
