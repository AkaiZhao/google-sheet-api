const rawData = {
  account: ['Account', '帐号'],
  password: ['Password', '密码'],
  nickname: ['Nickname', '暱称'],
  commission: ['Commission(％)', '抽佣(％)'],
  currency: ['Currency', '币别'],
  currencySign: ['Display Currency Sign in Game ?', '游戏中是否显示币别符号'],
  show: ['Display', '显示'],
  notShow: ['Hidden', '不显示'],
  walletType: [
    'Wallet Type (Can Not Change After Created)',
    '钱包类型 (新增后不能修改钱包类型)'
  ],
  w: ['Transfer Wallet', '转帐钱包'],
  sw: ['Seamless Wallet', '单一(无缝)钱包'],
  wurl: ['Wallet Url (Domain Name)', '钱包网址 (Domain Name)'],
  wtoken: ['Token (Optional)', '金钥 (选填)'],

  createAgent: ['Create Agent', '新增代理'],
  create: ['Create', '新增'],

  testAgent: ['Test Agent', '测试帐号'],
  // 密碼欄位驗證
  warning: ['Password must be a combination of 8 to 16 numbers and letters ( - or _ is allow ).', '密码需为 8〜16 码英文，数字组合 ( 可含 - or _ )'],
  leastEight: ['Password must be at least 8 characters.', '密码最少 8 码'],
  mostSixteen: ['Password must be at most 16 characters.', '密码最多 16 码'],
  required: ['Password is a required field.', '此为必填栏位']
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
