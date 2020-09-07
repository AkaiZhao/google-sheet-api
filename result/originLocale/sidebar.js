const rawData = {
  // 權限管理
  permissionManagement: ['Set Permission', '权限管理'],

  // 玩家管理
  playerManagement: ['Player Management', '玩家管理'],
  playerList: ['Player List', '玩家列表'],
  orderSearch: ['Order Search', '注单查询'],
  transactionSearch: ['Transaction Search', '交易查询'],
  gameRecordDetail: ['Game Record Detail', '游戏纪录细单'],
  payoffSearch: ['Payoff Search', '派彩查询'],

  // 代理管理
  agentManagement: ['Agent Management', '代理管理'],
  agentList: ['Agent List', '代理列表'],
  createAgent: ['Create Agent', '新增代理'],

  // 報表中心
  reportCenter: ['Report Center', '报表中心'],
  agentReport: ['Agent Report', '代理报表'],
  agentPlayerReport: ['Agent Player Report', '代理玩家报表'],
  agentPlayerGameReport: ['Agent Player Game Report', '代理玩家游戏报表'],
  agentFinanceReport: ['Agent Finance Report', '代理财务报表'],
  agentGameAnalysisReport: ['Agent Game Analysis Report', '代理游戏分析报表'],
  playerProfitReport: ['Player Profit Report', '玩家获利报表'],
  playerGameProfitReport: ['Player Game Profit Report', '玩家游戏获利报表'],
  agentlessGameReport: ['Agentless Game Report', '不分代理游戏报表'],
  playersPayoff: ['Players Payoff', '派彩清单'],

  // 體彩
  cq9Lottery: ['Sport/Lottery', '体彩'],
  lottoRealTimeOrder: ['RealTime Order Search', '体彩即时注单'],
  lottoAwardedOrder: ['Awarded Order Search', '体彩开彩注单'],
  lottoAgentReport: ['Agent Report', '体彩代理报表'],
  lottoAgentPlayerReport: ['Agent Player Report', '体彩代理玩家报表'],
  lottoAgentPlayerGameReport: [
    'Agent Player Game Report',
    '体彩代理玩家游戏报表'
  ],
  lottoAgentGameAnalysisReport: [
    'Agent Game Analysis Report',
    '体彩代理游戏分析报表'
  ],
  lottoPeriodOrder: [
    'Agent Game Analysis Report',
    '体彩期数单据查询'
  ],
  lottoAgentlessGameReport: [
    'Lotto Agentless Game Report',
    '体彩不分代理游戏报表'
  ],

  // 客服管理
  customerServiceManagement: ['Customer Service Management', '客服管理'],
  customerServiceList: ['Customer Service List', '客服列表'],
  createCustomerService: ['Create Customer Service', '新增客服'],

  // 聯名後台
  cobrandManager: ['Cobrand Manager', '联名后台'],
  setCobrand: ['Set Cobrand', '联名设定'],

  // 遊戲管理
  gameManager: ['Agent Game Manager', '代理游戏管理'],
  addBlackList: ['Add Black List', '新增黑名单'],
  removeBlackList: ['Remove Black List', '移除黑名单'],

  // 真人視訊專區
  cq9Live: ['Live Casino', '真人视讯专区'],
  liveAgentGameAnalysisReport: ['Agent Game Analysis Report', '代理游戏分析报表'],
  liveAgentPlayerReport: ['Agent Player Report', '代理玩家报表'],
  livePlayerOrder: ['Order Search', '注单查询'],
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
