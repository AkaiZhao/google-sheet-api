const rawData = {
  login: ['Login', '登入'],
  systemOffice: ['System Office', '系统商'],
  username: ['Account', '帐号'],
  password: ['Password', '密码'],
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
