const foregroundColor = '#FAFAFA';
const backgroundColor = '#000000';
const red = '#F44336';
const green = '#00E676';
const yellow = '#FFFF00';
const blue = '#42A5F5';
const magenta = '#F50057';
const cyan = '#00BCD4';

exports.decorateConfig = config =>
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: green,
    cursorColor: green,
    colors: {
      black: backgroundColor,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white: foregroundColor,
      lightBlack: '#424242',
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: foregroundColor
    },
    css: config.css
  });
