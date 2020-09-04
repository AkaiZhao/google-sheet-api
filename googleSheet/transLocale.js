const fs = require('fs/promises')
const path = require('path');

const { setSheet } = require('./sheet')

function resolvePath(target) {
  return path.resolve(__dirname, target)
}

const ORIGIN_LOCALE_PATH = resolvePath('locale')
const REWRITE_PATH = resolvePath('newLocale')

// 將遠本的檔案取
async function getLocaleFile(isCreateJson = false) {

  let result = {}

  const fileNames = await fs.readdir(ORIGIN_LOCALE_PATH, 'utf-8')
    .catch(err => {
      console.log('取得資料夾\'locale\'錯誤');
      process.exit(1)
    })

  if (isCreateJson) {
    await createDir(REWRITE_PATH)
  }

  for (let i = 0; i < fileNames.length; i++) {
    const data = require(resolvePath('locale/' + fileNames[i]))
    result[fileNames[i].replace('.js', '')] = data
    if (isCreateJson) {
      fs.writeFile(`${REWRITE_PATH}/${fileNames[i]}on`, JSON.stringify(data, null, 2))
        .catch(err => {
          console.log('寫入檔案錯誤,路徑:', `${REWRITE_PATH}/${fileNames[i]}on`);
        })
    }
  }

  return result
}

function checkDir(dirPath) {
  return fs.readdir(dirPath)
    .then(() => true)
    .catch(() => false)
}

async function createDir(dirPath) {
  const isTargetDirExist = await checkDir(dirPath)
  if (!isTargetDirExist) return fs.mkdir(dirPath)

}

const setLocaleToSheet = async () => {
  const fileNames = await fs.readdir(ORIGIN_LOCALE_PATH, 'utf-8')
    .catch(err => {
      console.log(`取得資料夾'${ORIGIN_LOCALE_PATH}'錯誤`);
      process.exit(1)
    })
  const data = []
  for (let i = 0; i < fileNames.length; i++) {
    const fileData = require(resolvePath('locale/' + fileNames[i]))
    const values = Object.keys(fileData).reduce((acc, lang, index) => {
      const langs = { cn: 0, en: 1 }
      acc[0] = acc[0] || []
      acc[0][langs[lang]] = lang

      const val = Object.values(fileData[lang])
      for (let j = 0; j < val.length; j++) {
        acc[j + 1] = acc[j + 1] || []
        acc[j + 1][langs[lang]] = val[j]
      }
      return acc
    }, [])

    data.push({
      // addSheet: {
      //   properties: {
      //     sheetId: i + 2,
      //     title: fileNames[i].replace('.js', ''),
      //     index: i
      //   }
      // }
      range: fileNames[i].replace('.js', ''),
      values
    })
    // console.log(values);
  }
  // console.log(JSON.stringify(data, null, 2));
  setSheet(data)

}


module.exports = { getLocaleFile, setLocaleToSheet }