const rawData = {
    titleTable: ['Payoff Search', '派彩查询'],
  
    agentAcc: ['Agent Account', '代理帐号'],
    playerAcc: ['Player Account', '玩家帐号'],
    startDate: ['Start Date', '开始日期'],
    endDate: ['End Date', '结束日期'],
    period:['Period','期數'],
    promoname: ['Promo Name', '活动名称'],
    account: ['Account', '玩家帐号'],
    parentAcc: ['Agent Account', '代理帐号'],
    amount: ['Amount', '派彩金额'],
    mtcode: ['Transaction ID', '交易代码'],
    sendtime: ['Payoff time', '派发时间'],
    promoList: ['Promo List','活动清单'],
    ranking: ['Ranking','排行'],
    totalRanking: ['Total Ranking','总榜单'],
    All: ['All','全部'],
  };
  
  let language = { en: {}, cn: {} };
  Object.keys(rawData).forEach(key => {
    language.en[key] = rawData[key][0];
    language.cn[key] = rawData[key][1];
  });
  
  module.exports = language
  