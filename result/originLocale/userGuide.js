const rawData = {
  guide1: [
    'All the exchange rate shown on back-office system is for reference only.',
    '后台所有页面的金额汇率仅供参考。'
  ],
  guide2: [
    'When you are done using the back-office system, please remember to click logout. It does not only mean to close browser, also to prevent others to access to your computer and manipulate your account.',
    '结束管理后一定要点击「登出」，而不能仅仅是关闭浏览器，以免他人利用您的电脑任意进入后台窜改。'
  ],
  guide3: [
    'If the back-office system is idle for certain time, it will be automatically logged out, please login again.',
    '在后台闲置一段时间后，会自动退出，请重新登入。'
  ],
  guide4: ['For detail instructions, please refer to ', '详细操作请查看'],
  document: ['Cypress Back-Office System Instruction Guide', '「后台操作指南」']
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
