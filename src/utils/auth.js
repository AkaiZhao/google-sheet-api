
const fs = require('fs').promises
const readline = require('readline')
const { google } = require('googleapis')
var opn = require('opn')

const { SCOPES, TOKEN_PATH, CREDENTIALS_PATH } = require('../configs/index.js')

let oAuth2ClientInstance = null // oAhut2Client Instance

/**
 * googleApi Oauth instance
 */
const getAuth = async () => {
  if (oAuth2ClientInstance) return oAuth2ClientInstance // 當次執行 若已經取得過憑證就不再次取得
  const credentials = await fs.readFile(CREDENTIALS_PATH)
    .catch(() => {
      console.error('無法取的憑證檔案 路徑:', CREDENTIALS_PATH)
      process.exit(1)
    })
  console.log('已取得憑證資訊!\n---')

  oAuth2ClientInstance = await authorize(JSON.parse(credentials))
  console.log('已成功建立oAuth憑證!\n---')

  return oAuth2ClientInstance
}

/**
 * 取得Oauth
 * @param {object}} credentials
 */
const authorize = async credentials => {
  const {
    client_secret: clientSecret,
    client_id: clientId,
    redirect_uris: redirectUris,
  } = credentials.installed
  const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUris[0])

  let token = {}
  try {
    token = JSON.parse(await fs.readFile(TOKEN_PATH))
    if (token.expiry_date - Date.now() <= 0) throw Error('TOKEN過期，請重新取得TOKEN')

    console.log('已取得token!')
    console.log(`提醒: 目前token將在 ${Math.floor((token.expiry_date - Date.now()) / 60000)}分鐘 後失效\n---`)
  } catch (err) {
    console.error(typeof (err) === 'string' ? err : '找不到token重新建立token...')
    token = await getNewToken(oAuth2Client) // 如果token失效或找不到就建立新的token
  }
  oAuth2Client.setCredentials(token)
  return oAuth2Client
}

const getNewToken = oAuth2Client => {
  return new Promise(resolve => {
    const authUrl = oAuth2Client.generateAuthUrl({ access_type: 'offline', scope: SCOPES })
    opn(authUrl) // 開啟取得授權碼網址

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    rl.question('請輸入授權碼: ', async code => {
      rl.close()
      const { tokens } = await oAuth2Client.getToken(code)
        .catch(() => {
          console.error('授權碼有誤，請再次嘗試')
          return process.exit(1)
        })
      saveToken(tokens)
      return resolve(tokens)
    })
  })
}

const saveToken = (token) => {
  fs.writeFile(TOKEN_PATH, JSON.stringify(token, null, 2))
    .then(() => {
      console.log('token已存入以下位置: ', TOKEN_PATH)
    })
    .catch(() => {
      console.error('儲存成JSON檔失敗')
    })
}

module.exports = getAuth
