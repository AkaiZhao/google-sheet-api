const figlet = require('figlet')
const { batchAddSheets, batchUpdateSpeadSheet, batchGetSpreadSheets } = require('./utils/spreadSheetApis')
const { getSheetDataByLocale, writeLocaleFile } = require('./utils/locale')

// 上傳試算表
const uploadSheet = async () => {
  const data = await getSheetDataByLocale()
  await batchAddSheets(data)
  await batchUpdateSpeadSheet(data)
  console.log('上傳成功!')
  console.log('==========================================================')
}

// 下載試算表
const downloadSheet = async () => {
  const valueRanges = await batchGetSpreadSheets()
  await writeLocaleFile(valueRanges)
  console.log('下載成功!')
  console.log('==========================================================')
}

figlet('RUN I18N TOOL START', (err, data) => {
  if (err) console.log(err)
  console.log(data)

  if (process.argv[2] === '--download') {
    console.log('==========================================================')
    console.log('開始取得試算表資料...\n---')
    downloadSheet()
  }
  if (process.argv[2] === '--upload') {
    console.log('==========================================================')
    console.log('開始上傳本地資料...\n---')
    uploadSheet()
  }
})
