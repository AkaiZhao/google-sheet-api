
const fs = require('fs/promises')
const readline = require('readline')
const { google } = require('googleapis')
var opn = require('opn')

const { SCOPES, TOKEN_PATH, CREDENTIALS_PATH } = require('./configs/index.js');

const getAuth = async () => {

  const credentials = await fs.readFile(CREDENTIALS_PATH)
    .catch(err => {
      console.log('無法取的憑證檔案 路徑:', CREDENTIALS_PATH)
    })

  const auth = await authorize(JSON.parse(credentials))
  return auth
}

const authorize = async credentials => {
  const { client_secret, client_id, redirect_uris } = credentials.installed
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0])

  let token = {}
  try {
    token = JSON.parse(await fs.readFile(TOKEN_PATH))
    if (token.expiry_date - Date.now() <= 0) throw Error('TOKEN過期，請重新取得TOKEN')
  } catch (err) {
    token = await createNewTokenFile(oAuth2Client)
  } finally {
    oAuth2Client.setCredentials(token)
    return oAuth2Client
  }
}



const createNewTokenFile = oAuth2Client => {
  return new Promise((resolve, reject) => {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES
    })

    opn(authUrl)

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    rl.question('請輸入授權碼: ', async code => {
      rl.close();
      const { tokens } = await oAuth2Client.getToken(code)
        .catch(err => {
          console.error('授權碼有誤，請再次嘗試')
          return process.exit(1)
        })

      await fs.writeFile(TOKEN_PATH, JSON.stringify(tokens, null, 2))
        .catch(err => {
          console.error('儲存成JSON檔失敗')
          return process.exit(1)
        })

      console.log('token已存入以下位置: ', TOKEN_PATH)
      return resolve(tokens)
    })
  })
}

module.exports = { getAuth }