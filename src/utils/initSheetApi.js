const { google } = require('googleapis')
const getAuth = require('./auth')

let instance = null

/**
 * 初始化API的TOKEN
 * @returns sheets_v4.Sheets
 */
const initSheetApi = async () => {
  if (instance) return instance
  try {
    console.log('開始建立試算表api instance\n---')
    const auth = await getAuth()
    const sheets = google.sheets({ version: 'v4', auth })
    instance = sheets.spreadsheets
    console.log('試算表api instance成功取得\n---')

    return instance
  } catch (err) {
    console.log('取得 sheet auth 失敗')
    process.exit(1)
  }
}

module.exports = initSheetApi
