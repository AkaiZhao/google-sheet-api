const rawData = {
  title: ['Change team name', '更改团队名称'],
  contentLabel: ['Team name', '团队名称'],
  cancel: ['Cancel', '取消'],
  confirm: ['Confirm', '更改'],
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language





//////////////////// 簡體