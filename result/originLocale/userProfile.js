const rawData = {
  pwdChangeSuccess: ['Change password success .', '密码修改成功'],
  twoPwdDifferent: [
    'Type the same password in both input .',
    '两次输入密码不相同'
  ],
  walletSetSuccess: ['Wallet setting success .', '钱包修改成功'],
  detail: ['Detail', '详细资料'],
  changePwd: ['Change Password', '更改密码'],
  token: ['Token', '密钥'],
  walletInfo: ['Wallet Info', '钱包信息'],
  walletLink: ['Wallet link', '钱包网址'],
  walletToken: ['Wallet token', '钱包密钥'],
  neverLogin: ['Never Login', '未曾登入'],
  betThreshold: ['Bet Threshold', '投注阀值'],
  maximum: ['Maximum', '最大值'],
  minimum: ['Minimum', '最小值'],
  default: ['Default', '预设值'],

  account: ['Account', '帐号'],
  parentAccount: ['Parent Account', '上级代理帐号'],
  signUpAt: ['Sign Up At', '注册时间'],
  loginAt: ['Last Sign In At', '最近登入时间'],
  totalPlayers: ['Total Players', '玩家总人数'],
  commission: ['Commission(%)', '抽佣(%)'],
  currencySign: ['Display Currency Sign in Game ?', '游戏中是否显示币别符号'],
  show: ['Display', '显示'],
  notShow: ['Hidden', '不显示'],
  status: ['Status', '状态'],
  enable: ['Enable', '启用'],
  disable: ['Disable', '停用'],
  ssToken: ['Token', '密钥'],
  basicInfo: ['Basic Info', '基本资料'],
  testAgent: ['Test Agent', '测试帐号'],
  modifySuccess: ['Modify success', '修改成功']
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
