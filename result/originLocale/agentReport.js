const rawData = {
  titleTable: ['Agent Report', '代理報表'],
  currency: ['Currency', '币别'],

  ownerAcc: ['General Agent Account', '总代理帐号'],
  parentAcc: ['Agent Account', '代理帐号'],
  agentAcc: ['Agent Account', '代理帐号'],
  groupby: ['Settlement Interval', '结算周期'],
  hour: ['Hour', '时'],
  day: ['Day', '日'],
  month: ['Month', '月'],
  year: ['Year', '年'],
  startDate: ['Start Date', '开始日期'],
  endDate: ['End Date', '结束日期'],

  gameType: ['Game Type', '游戏类型'],
  allGame: ['Probability Game', '机率游戏'],
  table: ['Table Battle', '牌桌对战'],
  slot: ['Slot', '老虎机'],
  fish: ['Fish', '渔机'],
  arcade: ['Arcade', '街机'],

  datetime: ['Date', '日期'],
  totalsignup: ['New Players', '新进玩家'],
  bets: ['Bet', '总投注额'],
  validbets: ['Total Valid bets', '总有效投注额'],
  wins: ['Win', '总赢分'],
  jackpots: ['Jackpot', '总彩池'],
  validbet: ['Valid bet', '有效投注额'],
  roomfee: ['Room fee', '开房费'],
  parentincome: ['Agent Profit', '代理损益金额'],
  rtp: ['RTP', '返还率'],
  totalplayers: ['Total Players', '真实玩家数'],
  totalgamelogin: ['Games Opened', '游戏开启次数'],
  totalround: ['Total Game Round', '总游戏场次'],
  betavg: ['Average Bets', '平均投注额'],

  tableBets: ['Total Bet', '总押注'],
  tableWins: ['Total Win', '总输赢'],
  rakes: ['Total Rake', '总抽水']
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
