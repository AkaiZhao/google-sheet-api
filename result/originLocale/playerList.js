const rawData = {
  titleTable: ['Player List', '玩家列表'],
  noMatch: ['Sorry, no matching records found', '没有找到匹配的资料'],
  playerAcc: ['Player Account', '玩家帐号'],
  roundid: ['Round Id', '单号'],
  signUpAt: ['Sign Up At', '注册时间'],
  loginAt: ['Last Sign In At', '最近登入时间'],
  neverLogin: ['Never Login', '未曾登入'],
  currency: ['Currency', '币别'],
  balance: ['Balance', '馀额'],
  more: ['More', '更多'],
  orderSearch: ['Order Search', '注单查询'],
  transactionSearch: ['Transaction Search', '交易查询'],
  agentAcc: ['Agent Account', '代理帐号'],

  // form
  sort: ['Sort', '排序'],
  asc: ['ASC', '递增'],
  desc: ['DESC', '递减'],
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
