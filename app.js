import { createDevice, Device } from '@zeppos/device';
import { createDisplay } from '@zeppos/display';

// Initialize device
const device = createDevice();
const display = createDisplay();

// Main app logic
function initApp() {
  // Get device info
  const deviceInfo = device.getInfo();
  console.log('Device Info:', deviceInfo);
  
  // Set up display
  display.fillScreen(0x0000); // Black background
  display.setColor(0xFFFF);   // White text
  display.setFont('20px Arial');
  display.drawText(10, 30, 'Amazfit Trex 3 Pro');
  display.drawText(10, 60, 'Hello, World!');
  
  // Update display
  display.flush();
}

// Initialize the app when the device is ready
device.ready(() => {
  console.log('Device is ready');
  initApp();
});

// Handle app lifecycle
device.on('destroy', () => {
  console.log('App is being destroyed');
  // Clean up resources here
});
