const { LOCALE_KEYS, KEY_INDEX } = require('../configs/index')
const hashCode = require('./hashCode')

/**
 * 將試算表已存在的sheet給過濾掉
 * @param {array} data
 * @param {array} sheets
 */
const filteRepeatedDataBySheetId = (data = [], sheets = []) => {
  return data.filter(({ range }) => {
    return !sheets.some(({ properties: { sheetId } }) => {
      return sheetId === hashCode(range)
    })
  })
}

/**
 * 將json取得的資料format成google表單的二維陣列
 * @param {array} data
 */
const formatJsonToGoogleSheet = (data = []) => {
  const result = []
  for (const [title, langData] of Object.entries(data)) {
    const values = []
    for (const [lang, valueData] of Object.entries(langData)) {
      const keys = Object.keys(valueData)
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (!values[i]) values[i] = [key]
        const keyIndex = LOCALE_KEYS.findIndex(l => l === lang)
        values[i][keyIndex] = valueData[key]
      }
    }

    values.unshift(LOCALE_KEYS) // 第一欄為標題

    result.push({
      range: title,
      values,
    })
  }
  return result
}

const formatGoogleSheetToJson = (data = []) => {
  return data.map(({ range, values = [] }) => ({
    fileName: range.replace(/!.*$/, ''), // 移除api裡的!A1:Z10000字串
    data: values.reduce((res, val, index) => {
      if (index === 0) return res
      for (let i = 1; i < val.length; i++) {
        if (!res[LOCALE_KEYS[i]]) res[LOCALE_KEYS[i]] = {}
        res[LOCALE_KEYS[i]][val[KEY_INDEX]] = val[i]
      }
      return res
    }, {}),
  }))
}

module.exports = {
  filteRepeatedDataBySheetId,
  formatJsonToGoogleSheet,
  formatGoogleSheetToJson,
}
