const rawData = {
  titleTable: ['Agent List', '代理列表'],
  noMatch: ['Sorry, no matching records found', '没有找到匹配的资料'],
  agentAcc: ['Agent Account', '代理帐号'],
  status: ['Status', '状态'],
  Enable: ['Enable', '启用'],
  Disable: ['Disable', '停用'],
  signUpAt: ['Sign Up At', '注册时间'],
  currency: ['Currency', '币别'],
  sw: ['Seamless Wallet', '单一(无缝)钱包'],
  more: ['More', '更多'],
  detail: ['Detail Information', '详细资料'],
  changePwd: ['Change Password', '更改密码'],
  show: ['Display', '显示'],
  notShow: ['Hidden', '不显示'],

  currencySign: ['CurrencySign', '币别符号'],

  testAgent: ['Test Agent', '测试帐号']
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
