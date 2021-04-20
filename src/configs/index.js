const path = require('path')
const resolvedPath = paths => path.resolve(__dirname, paths)

const configs = {
  SPREAD_SHEET_ID: '1JpcePCU65kcYhMcYpGkCNTe5Wbo538VsriC4d2I3Z2A', // 試算表 id `https://docs.google.com/spreadsheets/d/${id}/edit`
  SCOPES: ['https://www.googleapis.com/auth/spreadsheets'], // token允許的api

  CREDENTIALS_PATH: resolvedPath('credentials.json'), // google api 憑證 (從GCP下載
  TOKEN_PATH: resolvedPath('token.json'), // token 存放位置 // 自動產生

  LOCALE_PATH: 'result/remoteLocale', // 路徑

  LOCALE_KEYS: ['key', 'cn', 'en'],
  KEY_INDEX: 0,

}
module.exports = configs
