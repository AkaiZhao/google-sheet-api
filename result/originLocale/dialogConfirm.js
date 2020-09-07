const rawData = {
  title: ['Turn off', '关闭'],
  cancel: ['Cancel', '取消'],
  confirm: ['Confirm', '确定'],
  content: ['Please reconfirm your change.', '确定要执行此操作吗？']
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
