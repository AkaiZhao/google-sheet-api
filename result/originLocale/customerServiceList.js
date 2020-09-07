const rawData = {
  titleTable: ['Customer Service List', '客服列表'],
  noMatch: ['Sorry, no matching records found', '没有找到匹配的资料'],
  csAcc: ['Customer Account', '客服帐号'],
  status: ['Status', '状态'],
  Enable: ['Enable', '启用'],
  Disable: ['Disable', '停用'],
  signUpAt: ['Sign Up At', '注册时间'],
  loginAt: ['Last Sign In At', '最近登入时间'],
  neverLogin: ['Never Login', '未曾登入'],
  more: ['More', '更多'],
  detail: ['Detail Information', '详细资料'],
  changePwd: ['Change Password', '更改密码'],
}

const language = { en: {}, cn: {} }
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0]
  language.cn[key] = rawData[key][1]
})

module.exports = language
