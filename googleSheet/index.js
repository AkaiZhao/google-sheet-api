const { getLocaleFile, setLocaleToSheet } = require('./transLocale')
const { downloadSheet } = require('./sheet')


const main = async () => {
  downloadSheet()
  // setSheet()
  // setLocaleToSheet()
  // const data = await getLocaleFile(true)
  // console.log(data);
  // setSheetData(data)
}

main()

