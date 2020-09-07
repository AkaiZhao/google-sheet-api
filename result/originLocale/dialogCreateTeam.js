const rawData = {
  title: ['Create team', '建立团队'],
  contentLabel: ['Team name', '团队名称'],
  cancel: ['Cancel', '取消'],
  confirm: ['Confirm', '确定'],
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
