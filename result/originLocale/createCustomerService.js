const rawData = {
  account: ['Account', '帐号'],
  password: ['Password', '密码'],
  nickname: ['Nickname', '暱称'],
  createCustomerService: ['Create Customer Service', '新增客服'],
  create: ['Create', '新增'],
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
