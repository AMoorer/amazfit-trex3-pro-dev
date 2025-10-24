module.exports = {
  platform: 'amazfit',
  device: 'trex3-pro',
  display: {
    width: 360,
    height: 360,
    alwaysOnDisplay: true,
    round: true
  },
  permissions: [
    'access_internet',
    'access_location',
    'access_heart_rate',
    'access_activity',
    'access_sleep',
    'vibrate',
    'wake_up',
    'display'
  ],
  app: {
    name: 'Trex3App',
    version: '1.0.0',
    icon: 'icon.png',
    vendor: 'YourName',
    description: 'Amazfit Trex 3 Pro App'
  }
};
