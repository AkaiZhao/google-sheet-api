const rawData = {
  titleTable: ['Order Query', '注單查詢'],
  gameDetail: ['Game History Detail', '游戏纪录细单'],
  more: ['More', '更多'],
  roundid: ['Round Id', '单号'],
  bettime: ['Bet Time', '下注时间'],
  finaltime: ['End Round Time', '结算时间'],
  gamehall: ['Game Hall', '游戏厂商'],
  gametype: ['Game Type', '游戏类型'],
  gamename: ['Game Name', '游戏名称'],
  gamecode: ['Game Name', '游戏名称'],
  genre: ['Genre', '游戏项目'],
  currency: ['Currency', '币别'],
  bet: ['Bet', '投注额'],
  validbets: ['Total Valid bets', '总有效投注额'],
  win: ['Win', '赢分'],
  jackpot: ['Jackpot', '彩池'],
  validbet: ['Valid bet', '有效投注额'],
  roomfee: ['Room fee', '开房费'],
  extrabuy: ['Purchase Items', '额外购买'],
  bonus: ['Extra Bonus', '额外奖金'],
  rake: ['Rake', '抽水'],
  adjust: ['Adjustment', '调整'],
  singlerowbet: ['Respin', '再旋转'],
  gamerole: ['Banker', '庄'],

  // column hit
  winHint: ['Win amount includes jackpot amount', '赢分金额已包含彩池金额'],
  extrabuyHint: ['For Fishing Games Only', '渔机游戏独有'],
  bonusHint: ['For Fishing Games Only', '渔机游戏独有'],
  PvPHint: ['Player vs Player, the win/loss amount on this round does NOT relate to agent.', '玩家对玩家，此局之玩家输赢与代理无关'],

  lotto: ['Lotto Game', '彩票游戏'],
  sport: ['Sport Game', '体育游戏'],

  sort: ['Sort', '排序'],
  asc: ['ASC', '递增'],
  desc: ['DESC', '递减'],

  playerAcc: ['Player Account', '玩家帐号'],
  agentAcc: ['Agent Account', '代理帐号'],

  all: ['All', '全部'],
  cq9: ['CQ9', 'CQ9'],
  uv: ['UV', 'UV'],

  hour: ['Hour', '时'],
  day: ['Day', '日'],
  month: ['Month', '月'],
  year: ['Year', '年'],
  startDate: ['Start Date', '开始日期'],
  endDate: ['End Date', '结束日期'],

  // lotto period game
  ownerAcc: ['Owner account', '總代理帐号'],
  parentAcc: ['Parent account', '代理帐号'],

  period: [ 'Period', '期数' ],
  betAmount: [ 'Bet amount', '下注金额' ],
  preWin: [ 'Original win', '原本赢分' ],
  curWin: [ 'Last repayoff win', '最后重派赢分' ],
  lastAmendTime: [ 'Last repayoff time', '最后重派时间' ],

  // 真人視訊
  tableType: ['Game Name', '真人游戏名称'],
  tableId: ['Table No', '桌号'],
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
