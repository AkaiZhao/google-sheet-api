const rawData = {
  titleTable: ['Agent Report', '代理報表'],

  playerAcc: ['Player Account', '玩家帐号'],
  agentAcc: ['Agent Account', '代理帐号'],

  startDate: ['Start Date', '开始日期'],
  endDate: ['End Date', '结束日期'],

  mtcode: ['Transaction ID', '交易单号'],
  eventtime: ['Transaction Time', '交易时间'],
  endtime: ['End Time', '结束时间'],
  currency: ['Currency', '币别'],
  action: ['Action', '行为'],
  status: ['Status', '状态'],
  amount: ['Amount', '交易金额'],
  balance: ['Balance', '余额'],

  // -------------------------------------- 行為
  all: ['All', '全部'],
  bet: ['Bet', '投注'],
  win: ['Win', '赢分'],
  rollin: ['Rollin', '转入'],
  rollout: ['Rollout', '转出'],
  takeall: ['Takeall', '全转出'],
  credit: ['Credit', '补款'],
  debit: ['Debit', '扣款'],
  payoff: ['Payoff', '派彩'],
  refund: ['Refund', '退款'],
  deposit: ['Deposit', '存款'],
  withdraw: ['Withdraw', '提款'],
  bonus: ['Bonus', '红利'],

  // 下方 table
  cashin: ['Deposit', '存款'],
  cashout: ['Withdraw', '提款'],
  refundcancel: ['Re-Bet', '重下注']
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
