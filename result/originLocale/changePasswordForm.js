const rawData = {
  account: ['Account', '帐号'],
  password: ['Password', '密码'],
  warning: ['Password must be a combination of 8 to 16 numbers and letters ( - or _ is allow ).', '密码需为 8〜16 码英文，数字组合 ( 可含 - or _ )'],
  confirmPassword: ['Confirm Password.', '确认新密码'],
  changePwd: ['Change Password.', '更改密码'],
  // 密碼欄位驗證
  leastEight: ['Password must be at least 8 characters.', '密码最少 8 码'],
  mostSixteen: ['Password must be at most 16 characters.', '密码最多 16 码'],
  required: ['Password is a required field.', '此为必填栏位'],
  mustEqual: [`Those passwords didn't match, Try again`, '这些密码不相符，请再试一次']
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
