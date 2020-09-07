const rawData = {
  title: ['Management System', '后台管理系统'],

  success: ['Success', '成功'],
  fail: ['Fail', '失败'],
  failed: ['Failed', '失败'],
  pending: ['Pending', '等候'],
  refund: ['Refund', '退款'],
  refundCancel: ['Cancel', '取消退款'],

  add: ['Add', '新增'],
  remove: ['Remove', '移除'],
  search: ['Search', '搜索'],
  edit: ['Edit', '编辑'],
  save: ['Save', '储存'],
  cancel: ['Cancel', '取消'],
  please_enter: ['Please Enter ...', '请输入 ...'],
  playerOrder: ['Order Search', '注单查询'],
  playerTransaction: ['Transaction Search', '交易查询'],

  admin: ['Admin', '管理员'],
  owner: ['General Agent', '总代理'],
  parent: ['Agent', '代理'],
  cs: ['Customer Service', '客服'],
  adminCs: ['Admin Customer Service', '系统客服'],

  accountManager: ['Account', '帳戶管理'],
  logout: ['Sign out', '登出'],

  // Data Table
  noMatch: ['Sorry, no matching records found.', '没有找到匹配的资料'],
  rowsPerPage: ['Rows per page:', '每页行数：'],

  true: ['Yes', '是'],
  false: ['No', '否'],

  // 幣值
  notConverted: ['Not Converted', '不转换'],
  notScreened: ['Not Screened', '不筛选'],

  // 設定
  set: ['Set', '设定']
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
