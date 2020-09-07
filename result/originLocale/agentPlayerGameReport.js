const rawData = {
  titleTable: ['Agent Player Game Report', '代理玩家遊戲報表'],
  noMatch: ['Sorry, no matching records found', '没有找到匹配的资料'],

  datetime: ['Date', '日期'],
  parentAcc: ['Agent Account', '代理帐号'],
  playerAcc: ['Player Account', '玩家帐号'],
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
  playerincome: ['Player Profit', '玩家损益金额'],
  rtp: ['RTP', '返还率'],
  totalround: ['Total Game Round', '总游戏场次'],
  betavg: ['Average Bets', '平均投注额'],

  tableBets: ['Total Bet', '总押注'],
  validbets: ['Total Valid bets', '总有效投注额'],
  tableWins: ['Total Win', '总输赢'],
  rakes: ['Total Rake', '总抽水'],

  agentAcc: ['Agent Account', '代理帐号'],
  playerAccSearchMethod: ['Player Account Search Mode', '玩家帐号筛选方式'],
  fuzzySearch: ['Fuzzy Search', '模糊搜寻'],
  exactSearch: ['Exact Search', '精确搜寻'],
  all: ['All', '全部'],
  cq9: ['CQ9', 'CQ9'],
  uv: ['UV', 'UV'],

  criterion: ['Numerical Filtering', '数值筛选'],
  noFilter: ['Do not filter', '不筛选'],
  bet: ['Bet', '投注额'],
  win: ['Win', '赢分'],
  amount: ['Amount', '数字'],
  less: ['less than', '小于等于'],
  more: ['more than', '大于等于'],
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
  sport: ['Sport Game', '体育游戏'],
  lotto: ['Lotto Game', '彩票游戏']
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
