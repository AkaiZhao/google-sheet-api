const rawData = {
  gamecode: ['Game code', '游戏代号'],
  style: ['Style', '类型'],
  width: ['Wdith', '宽度'],
  height: ['Height', '高度'],

  // style radio
  spin: ['Spin', '按钮'],
  watermark: ['Watermark', '浮水印']
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
