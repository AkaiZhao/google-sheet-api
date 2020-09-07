const getSheetApi = require('./initSheetApi')
const hashCode = require('./hashCode')
const { SPREAD_SHEET_ID } = require('../configs/index.js')
const {
  filteRepeatedDataBySheetId,
} = require('./format')

/**
 *  取得所有 sheet 的屬性
 *  @see {@link https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/get  Api}
 *  @see {@link https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets#Spreadsheet   Api request}
 *  */
const getSheets = async () => {
  const apiSpreadsheet = await getSheetApi()
  try {
    const result = await apiSpreadsheet
      .get({ spreadsheetId: SPREAD_SHEET_ID })

    console.log('已取得試算表的表格資訊\n---')
    return result.data.sheets
  } catch (err) {
    console.log(err.message)
    console.error('取得 spreadSheet 的 sheets 失敗')
    process.exit(1)
  }
}

/**
 * 取得所有表單資料
 * @see {@link https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchGet  Api}
 */
const batchGetSpreadSheets = async () => {
  const sheets = await getSheets()
  const ranges = sheets.map(({ properties: { title } }) => title)
  // console.log('以下為目前試算表所有表格:')
  // console.log(ranges.join('\n'), '\n---')

  const apiSpreadsheet = await getSheetApi()
  const result = await apiSpreadsheet.values.batchGet({
    spreadsheetId: SPREAD_SHEET_ID,
    ranges,
  })

  console.log('已取得所有表格資料！\n---')
  return result.data.valueRanges
}

/**
 * 批次更新整個試算表資料 data
 * @see {@link https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate Api}
 * @param {array} data ValueRange
 */
const batchUpdateSpeadSheet = async (data = []) => {
  const apiSpreadsheet = await getSheetApi()
  return apiSpreadsheet.values.batchUpdate({
    spreadsheetId: SPREAD_SHEET_ID,
    valueInputOption: 'RAW',
    requestBody: {
      data,
    },
  })
    .then(() => {
      console.log('已上傳所有表單資料\n---')
    })
    .catch(err => {
      console.error(err)
    })
}

/**
 * 建立目前試算表不存在的sheets
 * @param {array} data
 * @see {@link apiSpreadsheet Api}
 */
const batchAddSheets = async (data = []) => {
  const apiSpreadsheet = await getSheetApi()
  const sheets = await getSheets()
  const filteredData = filteRepeatedDataBySheetId(data, sheets)
  if (!filteredData.length) return console.log('所有sheet已存在，無需新增sheet')
  apiSpreadsheet.batchUpdate({
    spreadsheetId: SPREAD_SHEET_ID,
    requestBody: {
      requests: filteredData.map(({ range }, index) => ({
        addSheet: {
          properties: {
            sheetId: hashCode(range),
            title: range,
            index,
          },
        },
      })),
    },
  }).then(() => {
    console.log(`有 ${filteredData.length} 個表單新增，新增的表格標題如下:`)
    console.log(filteredData.map(({ range }) => range).join('\n'))
    console.log('---')
  }).catch((err) => {
    if (err) return console.error(err)
  })
}

module.exports = { batchGetSpreadSheets, batchAddSheets, batchUpdateSpeadSheet }
