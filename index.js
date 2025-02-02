const { LedMatrix, GpioMapping } = require('rpi-led-matrix');

const matrix = new LedMatrix(
  {
    rows: 32,
    cols: 64,
    chainLength: 1,
    hardwareMapping: GpioMapping.AdafruitHat, // Change if needed
  },
  {
    brightness: 100,
    pwmLsbNanoseconds: 130,
  }
);

matrix.clear().drawText(5, 10, "Hello, AstridOS!");

setTimeout(() => matrix.clear(), 5000); // Clear after 5 seconds
