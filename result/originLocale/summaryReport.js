const rawData = {
  TOTAL: ['Summary', '小计'],
  SLOT: ['Probability Game Summary', '机率游戏小计'],
  TABLE: ['Table Battle Summary', '牌桌对战小计'],
  LIVE: ['Live Casino Summary', '真人视讯小计'],

  // 交易查詢
  bet: ['Bets', '投注'],
  win: ['Wins', '赢分'],
  rollin: ['Rollin', '转入'],
  rollout: ['Rollout', '转出'],
  takeall: ['Takeall', '全转出'],
  credit: ['Credit', '补款'],
  debit: ['Debit', '扣款'],
  payoff: ['Payoff', '派彩'],
  refund: ['Refund', '退款'],
  cashin: ['Deposit', '存款'],
  cashout: ['Withdraw', '提款'],

  // 代理報表
  totalgamelogin: ['Games Opened', '游戏开启次数'],

  // 總返還率 ------------------------------------------------
  totalrtp: ['Total RTP', '总返还率'],
  // 不分代理遊戲報表
  rtp: ['Total RTP', '总返还率'],

  jackpots: ['Total Jackpots', '总彩池'],
  bets: ['Total Bets', '总投注'],
  wins: ['Total Wins', '总赢分'],

  // 總抽水 ------------------------------------------------
  rakes: ['Total Rakes', '总抽水'],
  // 不分代理遊戲報表
  rake: ['Total Rakes', '总抽水'],

  tableBets: ['Total Bets', '总押注'],
  tableWins: ['Total Wins', '总输赢'],

  totalbets: ['Player Total Bets', '玩家总投注'],
  totalwins: ['Player Total Wins', '玩家总赢分'],
  totaljackpots: ['Player Total Jackpots', '玩家总彩池'],
  playerincome: ['Player Profit / Loss', '玩家损益金额'],
  parentincome: ['Agent Profit / Loss', '代理损益金额'],

  totalTableBets: ['Player Total Bets', '玩家总押注额'],
  totalTableWins: ['Player Winloss', '玩家总输赢'],
  totalRake: ['Player Total Rake', '玩家总抽水'],
  playerIncome: ['Player Profit / Loss', '玩家损益金额'],
  parentIncome: ['Agent Profit / Loss', '代理损益金额'],
  totalRound: ['Total Game Round', '总游戏场次'],
  betAvg: ['Average Bets', '平均投注额'],

  // 總有效投注 ------------------------------------------------
  // 體彩報表
  validbets: ['Total Valid bets', '总有效投注额'], 
  // 報表中心
  validBet: ['Total Valid bets', '总有效投注额'], 
  // 注單查詢
  totalValidBets: ['Total valid bets', '总有效投注额'],   

  // 總開房費 -------------------------------------------------
  // 報表中心
  roomFee: ['Total room fee', '总开房费'],
  // 注單查詢
  totalRoomFee: ['Total room fee', '总开房费'],

  // 紅利 -------------------------------------------------
  bonus: ['Bonus', '红利'],
  // 注單查詢
  roomfee: ['Total room fee', '总开房费'],
  //總派彩
  totalpayoff: ['Total Amount', '总派彩金额'],
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
