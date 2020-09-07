const fs = require('fs').promises

const { resetDir } = require('./dir')
const { formatJsonToGoogleSheet, formatGoogleSheetToJson } = require('./format')
const { LOCALE_PATH } = require('../configs/index')

/**
 * 建立json檔案
 * @param {array} valueRanges
 */
const writeLocaleFile = async (valueRanges) => {
  await resetDir(LOCALE_PATH)
  const errList = []
  for (const { fileName, data } of formatGoogleSheetToJson(valueRanges)) {
    const JsonDataPath = `${LOCALE_PATH}/${fileName}.json`
    await fs.writeFile(JsonDataPath, JSON.stringify(data, null, 2))
      .catch(() => {
        errList.push(`${fileName}.json`)
        console.error('寫入檔案錯誤,路徑:', JsonDataPath)
      })
  }
  if (errList.length) {
    console.log('寫入以下檔案時出現錯誤:')
    console.log(errList.join('\n'))
    console.log('---')
  } else {
    console.log('所有資料成功寫入至各json檔案\n---')
  }
}

const getSheetDataByLocale = async () => {
  const jsonData = {}

  const localeFileName = await fs.readdir(LOCALE_PATH, 'utf-8')
    .catch(() => {
      console.error(`取得資料夾 ${LOCALE_PATH} 錯誤`)
      process.exit(1)
    })

  for (let i = 0; i < localeFileName.length; i++) {
    const localeData = await fs.readFile(`${LOCALE_PATH}/${localeFileName[i]}`)
    jsonData[localeFileName[i].replace(/\.(json|js)$/, '')] = JSON.parse(localeData)
  }

  console.log('朝恭取得本地資料\n---')

  return formatJsonToGoogleSheet(jsonData)
}

module.exports = { getSheetDataByLocale, writeLocaleFile }
