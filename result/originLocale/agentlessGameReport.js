const rawData = {
  titleTable: ['Agent Game Analysis Report', '代理遊戲分析報表'],
  noMatch: ['Sorry, no matching records found', '没有找到匹配的资料'],
  datetime: ['Date', '日期'],
  parentid: ['Agent Account', '代理帐号'],
  parentAcc: ['Agent Account', '代理帐号'],
  agentAcc: ['Agent Account', '代理帐号'],
  ownerAcc: ['General Agent Account', '总代理帐号'],
  gamehall: ['Game Hall', '游戏厂商'],
  gametype: ['Game Type', '游戏类型'],
  gamename: ['Game Name', '游戏名称'],
  gamecode: ['Game Name', '游戏名称'],
  genre: ['Genre', '游戏项目'],
  currency: ['Currency', '币别'],
  bets: ['Bet', '总投注额'],
  wins: ['Win', '总赢分'],
  jackpots: ['Jackpot', '总彩池'],
  validbet: ['Valid bet', '有效投注额'],
  roomfee: ['Room fee', '开房费'],
  parentincome: ['Agent Profit', '代理损益金额'],
  rtp: ['RTP', '返还率'],
  playertraffics: ['Player Flow', '会员流量'],
  totalround: ['Total Game Round', '总游戏场次'],
  betavg: ['Average Bets', '平均投注额'],
  tableBets: ['Total Bet', '总押注'],
  validbets: ['Total Valid bets', '总有效投注额'],
  tableWins: ['Total Win', '总输赢'],
  rakes: ['Total Rake', '总抽水'],
  groupby: ['Settlement Interval', '结算周期'],
  startDate: ['Start Date', '开始日期'],
  endDate: ['End Date', '结束日期'],
  hour: ['Hour', '时'],
  day: ['Day', '日'],
  month: ['Month', '月'],
  year: ['Year', '年'],
  all: ['All', '全部'],
  cq9: ['CQ9', 'CQ9'],
  uv: ['UV', 'UV'],
  gameType: ['Game Type', '游戏类型'],
  allGame: ['Probability Game', '机率游戏'],
  table: ['Table Battle', '牌桌对战'],
  slot: ['Slot', '老虎机'],
  fish: ['Fish', '渔机'],
  arcade: ['Arcade', '街机'],
  sport: ['Sport Game', '体育游戏'],
  lotto: ['Lotto Game', '彩票游戏']
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
