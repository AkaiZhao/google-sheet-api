const fs = require('fs/promises')
const path = require('path');
const { google } = require('googleapis')

const { getAuth } = require('./auth')

const { SPREAD_SHEET_ID, LOCALE_PATH } = require('./configs/index.js');
const langList = ['cn', 'en']
const key = 'cn'
// 初始化API的TOKEN
const initSheetApi = async () => {
  const auth = await getAuth()
  const sheets = google.sheets({ version: 'v4', auth })
  return sheets
}

const getAllSheetsTitle = async () => {
  const sheets = await initSheetApi()
  return (await sheets
    .spreadsheets
    .get({ spreadsheetId: SPREAD_SHEET_ID }))
    .data
    .sheets
    .map(node => node.properties.title);
}

const batchGetSpreadSheets = async () => {
  const sheets = await initSheetApi()
  const sheetTitle = await getAllSheetsTitle()
  const data = (await sheets
    .spreadsheets
    .values
    .batchGet({
      spreadsheetId: SPREAD_SHEET_ID,
      ranges: sheetTitle,
    }))
    .data.valueRanges
  return data.map(({ range, values }) => {
    return {
      range: range.replace('!A1:Z1000', ''),
      value: values.reduce((acc, val, i) => {
        if (i === 0) {
          val.forEach(lang => acc[lang] = {})
          return acc
        }

        for (let i = 0; i < val.length; i++) {
          acc[langList[i]] = val[i]
        }

        return acc
      }, {})
    }
  })
}



const batchUpdateSheet = async (data = {}) => {
  const sheets = await initSheetApi()
  sheets
    .spreadsheets
    .values
    .batchUpdate({
      spreadsheetId: SPREAD_SHEET_ID,
      valueInputOption: 'RAW',
      requestBody: { data },
    })
}


const uploadSheet = (data) => {

}

const downloadSheet = async () => {
  const data = await batchGetSpreadSheets()
  // if (async)
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    fs.writeFile(`src/locale/${data[i].range}.json`)

  }
  console.log(data);
}


// const setSheet = async (data = []) => {
//   const auth = await getAuth()
//   const sheets = google.sheets({ version: 'v4', auth });
//   sheets.spreadsheets.batchUpdate({
//     spreadsheetId: '1y3nVFm_ev-hTdvIu_EW9MjgcCzoVwvi1Ahq7i4IFVHg',
//     // valueInputOption: 'RAW',
//     requestBody: {
//       requests: data
//     },
//     auth
//   },

//     (err, res) => {
//       console.log(err);
//     })
// }

module.exports = { batchGetSpreadSheets, batchUpdateSheet, getAllSheetsTitle, downloadSheet }

