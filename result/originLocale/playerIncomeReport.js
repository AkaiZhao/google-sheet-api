const rawData = {
  titleTable: ['Player Income Report', '玩家获利报表'],
  noMatch: ['Sorry, no matching records found', '没有找到匹配的资料'],
  datetime: ['Date', '日期'],
  parentAcc: ['Agent Account', '代理帐号'],
  playerAcc: ['Player Account', '玩家帐号'],
  bets: ['Bet', '总投注额'],
  wins: ['Win', '总赢分'],
  playerIncome: ['Agent Profit', '玩家损益金额'],

  tableBets: ['Total Bet', '总押注'],
  tableWins: ['Total Win', '总输赢'],
  rakes: ['Total Rake', '总抽水'],

  gameType: ['Game Type', '游戏类型'],
  slot: ['Probability Game', '机率游戏'],
  table: ['Table Battle', '牌桌对战'],
  sort: ['Sort', '排序'],
  asc: ['ASC', '递增'],
  desc: ['DESC', '递减'],
  groupby: ['Settlement Interval', '结算周期'],
  hour: ['Hour', '时'],
  day: ['Day', '日'],
  month: ['Month', '月'],
  year: ['Year', '年'],
  startDate: ['Start Date', '开始日期'],
  endDate: ['End Date', '结束日期']
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
