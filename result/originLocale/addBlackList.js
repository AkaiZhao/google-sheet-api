const rawData = {
  title: ['Add Black List', '新增游戏至黑名单'],
  // form
  parentid: ['Parent ID', '代理帐号'],
  gamecode: ['Game Code', '游戏代号'],
  // dialog
  dialogTitle: ['Add game to black list', '新增游戏至黑名单'],
  dialogDescription: ['All sub accounts under the account will be affected!', '所有代理的子代皆会被影响！'],
  dialogDisagree: ['Cancel', '取消'],
  dialogAgree: ['Confirm', '执行']
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
