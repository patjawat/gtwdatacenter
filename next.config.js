const DeviceDetector = require('node-device-detector');
const userAgent = 'Mozilla/5.0 (Linux; Android 5.0; NX505J Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36';
const detector = new DeviceDetector;
const resultOs = detector.parseOs(userAgent);
const resultClient = detector.parseClient(userAgent);
const resultDeviceType = detector.parseDeviceType(userAgent, resultOs, resultClient, {});
const result = Object.assign({os:resultOs}, {client:resultClient}, {device: resultDeviceType});
// console.log('Result parse lite', result);
// console.log('Result parse lite', result);

module.exports = {
  distDir: 'build',
  // basePath: '/datacenterv2',
  // basePath: '',
    env: {
      customKey: 'my-value',
      // api:'http://192.168.1.165:8001/api/',
      // api:'http://127.0.0.1:8001/api/',
      // api:'http://43.229.149.13:81/gtwdatacenter-api/api/',
      api:'http://27.254.191.157:81/gtwdatacenter-api/api/',
      device:result,
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
      ],
    },
  }
  