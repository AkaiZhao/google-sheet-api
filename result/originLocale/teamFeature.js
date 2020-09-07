const rawData = {
  team: ['Team', '团队'],
  permissionManagement: ['Set Permission', '权限管理'],

  // ------------------------------------------- 玩家管理
  playerManager: ['Player Management', '玩家管理'],

  playerListForAdmin: ['Player List', '玩家列表'],
  playerListForOwner: ['Player List', '玩家列表'],
  playerListForParent: ['Player List', '玩家列表'],

  playerOrderForAdmin: ['Order Search', '注单查询'],
  playerOrderForOwner: ['Order Search', '注单查询'],
  playerOrderForParent:['Order Search', '注单查询'],

  playerTransactionForAdmin: ['Transaction Search', '交易查询'],
  playerTransactionForOwner: ['Transaction Search', '交易查询'],
  playerTransactionForParent: ['Transaction Search', '交易查询'],

  gameDetailLink: ['Game Record Detail', '游戏纪录细单'],

  playerPayoffForAdmin: ['Payoff Search', '派彩查询'],
  playerPayoffForOwner: ['Payoff Search', '派彩查询'],
  playerPayoffForParent:['Payoff Search', '派彩查询'],

  // ------------------------------------------- 代理管理
  ssManager: ['Agent Management', '代理管理'],
  ssCreate: ['Create Agent', '新增代理'],

  ssListForAdmin: ['Agent List', '代理列表'],
  ssListForOwner: ['Agent List', '代理列表'],
  ssListForParent: ['Agent List', '代理列表'],

  // ------------------------------------------- 报表中心
  reportCenter: ['Report Center', '报表中心'],
  
  ssReportForAdmin: ['Agent Report', '代理报表'],
  ssReportForOwner: ['Agent Report', '代理报表'],
  ssReportForParent: ['Agent Report', '代理报表'],
  
  ssPlayerSummaryReportForAdmin: ['Agent Player Report', '代理玩家报表'],
  ssPlayerSummaryReportForOwner: ['Agent Player Report', '代理玩家报表'],
  ssPlayerSummaryReportForParent: ['Agent Player Report', '代理玩家报表'],

  ssPlayerReportForAdmin: ['Agent Player Game Report', '代理玩家游戏报表'],
  ssPlayerReportForOwner: ['Agent Player Game Report', '代理玩家游戏报表'],
  ssPlayerReportForParent: ['Agent Player Game Report', '代理玩家游戏报表'],

  ssFinanceReportForAdmin: ['Agent Finance Report', '代理财务报表'],
  ssFinanceReportForOwner: ['Agent Finance Report', '代理财务报表'],
  ssFinanceReportForParent: ['Agent Finance Report', '代理财务报表'],

  ssGameAnalyticReportForAdmin: ['Agent Game Analysis Report', '代理游戏分析报表'],
  ssGameAnalyticReportForOwner: ['Agent Game Analysis Report', '代理游戏分析报表'],
  ssGameAnalyticReportForParent: ['Agent Game Analysis Report', '代理游戏分析报表'],

  agentlessGameReportForAdmin: ['Agentless Game Report', '不分代理游戏报表'],
  agentlessGameReportForOwner: ['Agentless Game Report', '不分代理游戏报表'],
  agentlessGameReportForParent: ['Agentless Game Report', '不分代理游戏报表'],

  // ------------------------------------------- 体彩
  cq9Lottery: ['Sport/Lottery', '体彩'],

  lottoRealTimeOrderForAdmin: ['RealTime Order Search', '体彩即时注单'],
  lottoRealTimeOrderForOwner: ['RealTime Order Search', '体彩即时注单'],
  lottoRealTimeOrderForParent: ['RealTime Order Search', '体彩即时注单'],

  lottoAwardedOrderForAdmin: ['Awarded Order Search', '体彩开彩注单'],
  lottoAwardedOrderForOwner: ['Awarded Order Search', '体彩开彩注单'],
  lottoAwardedOrderForParent: ['Awarded Order Search', '体彩开彩注单'],

  lottoSSReportForAdmin: ['Agent Report', '体彩代理报表'],
  lottoSSReportForOwner: ['Agent Report', '体彩代理报表'],
  lottoSSReportForParent: ['Agent Report', '体彩代理报表'],

  lottoSSPlayerReportForAdmin: ['Agent Player Report', '体彩代理玩家报表'],
  lottoSSPlayerReportForOwner: ['Agent Player Report', '体彩代理玩家报表'],
  lottoSSPlayerReportForParent: ['Agent Player Report', '体彩代理玩家报表'],

  lottoSSPlayerGameReportForAdmin: ['Agent Player Game Report', '体彩代理玩家游戏报表'],
  lottoSSPlayerGameReportForOwner: ['Agent Player Game Report', '体彩代理玩家游戏报表'],
  lottoSSPlayerGameReportForParent: ['Agent Player Game Report', '体彩代理玩家游戏报表'],

  lottoSSGameAnalyticReportForAdmin: ['Agent Game Analysis Report', '体彩代理游戏分析报表'],
  lottoSSGameAnalyticReportForOwner: ['Agent Game Analysis Report', '体彩代理游戏分析报表'],
  lottoSSGameAnalyticReportForParent: ['Agent Game Analysis Report', '体彩代理游戏分析报表'],

  lottoAgentlessGameReportForAdmin: ['Lotto Agentless Game Report', '体彩不分代理游戏报表'],
  lottoAgentlessGameReportForOwner: ['Lotto Agentless Game Report', '体彩不分代理游戏报表'],
  lottoAgentlessGameReportForParent: ['Lotto Agentless Game Report', '体彩不分代理游戏报表'],

  lottoPeriodOrderForAdmin: [ 'Agent Game Analysis Report', '体彩期数单据查询' ],

  // ------------------------------------------- 客服管理
  csManager: ['Customer Service Management', '客服管理'],
  csList: ['Customer Service List', '客服列表'],
  csCreate: ['Create Customer Service', '新增客服'],

  // 聯名後台
  cobrandManager: ['Cobrand Manager', '联名后台'],
  setCobrand: ['Set Cobrand', '联名设定'],

  warrning: ['The permission adjustment will be updated next time when users reload.', '权限调整内容，将于下次用户重新载入时更新。'],

  // 遊戲管理
  gameManager: ['Agent Game Manager', '代理游戏管理'],
  addBlackList: ['Add Black List', '新增黑名单'],
  removeBlackList: ['Remove Black List', '移除黑名单'],

  // 真人视讯专区
  cq9Live: ['Live Casino', '真人视讯专区'],

  liveReportAnalyticsForAdmin: ['Agent Game Analysis Report', '代理游戏分析报表'],
  liveReportAnalyticsForOwner: ['Agent Game Analysis Report', '代理游戏分析报表'],
  liveReportAnalyticsForParent: ['Agent Game Analysis Report', '代理游戏分析报表'],
  
  livePlayerSummaryReportForAdmin: ['Agent Player Report', '代理玩家报表'],
  livePlayerSummaryReportForOwner: ['Agent Player Report', '代理玩家报表'],
  livePlayerSummaryReportForParent: ['Agent Player Report', '代理玩家报表'],
  
  livePlayerOrderForAdmin: ['Order Search', '注单查询'],
  livePlayerOrderForOwner: ['Order Search', '注单查询'],
  livePlayerOrderForParent: ['Order Search', '注单查询'],
};
  
let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
  