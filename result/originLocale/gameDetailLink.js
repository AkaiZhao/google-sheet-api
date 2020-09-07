const rawData = {
  slotTitle: ['Game History Detail', '游戏纪录细单'],
  lottoTitle: ['Sport/Lotto Game History Detail', '体彩游戏纪录细单'],
  roundid: ['Round ID', '单号'],
  gamehall: ['Game Hall', '游戏厂商'],
  gameType: ['Game Category', '游戏类型'],

  all: ['All', '全部'],
  cq9: ['CQ9', 'CQ9'],
  uv: ['UV', 'UV'],
  
  sportAndLotto: ['Sport/Lotto', '体育彩票'],
  slotAndTable: ['Slot/Table', '机率牌桌'],

  lineInformation: ['Line Information', '线路选择'],
  chinaLine: ['China line', '中国线路'],
  internationalLine: ['International line', '国际线路']
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
