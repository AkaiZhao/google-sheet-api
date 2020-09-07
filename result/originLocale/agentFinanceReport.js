const rawData = {
  titleTable: ['Agent Finance Report', '代理財務報表'],
  datetime: ['Date', '日期'],
  parentid: ['Agent Account', '代理帐号'],
  currency: ['Currency', '币别'],
  parentincome: ['Agent Profit', '代理损益金额'],
  noMatch: ['Sorry, no matching records found', '没有找到匹配的资料'],

  ownerAcc: ['General Agent Account', '总代理帐号'],
  parentAcc: ['Agent Account', '代理帐号'],
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
