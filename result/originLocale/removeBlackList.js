const rawData = {
  title: ['Remove Black List', '从黑名单中移除游戏'],
  // form
  info: ['* If you remove the sub-agent from the blacklist, the general-agent in the blacklist must be removed as well.', '＊若要移除子代黑名单，总代黑名单也必需一并移除'],
  parentid: ['Parent ID', '代理帐号'],
  gamecode: ['Game Code', '游戏代号'],
  // dialog
  dialogTitle: ['Remove game from the black list', '从黑名单中移除游戏'],
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
