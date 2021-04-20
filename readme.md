# googlesheet-to-json

## 備註

> 試算表 id https://docs.google.com/spreadsheets/d/{{id}}/edit 
> 信用憑證由GCP設定 使用app的模式生成Oauth
> token 由 google api 產生 

## 範例檔案 

位置在result/remoteLocale，稍微調整src/configs/index.js 即可使用

```=javascript
const configs = {
  SPREAD_SHEET_ID: '', // 需依照試算表修改
  SCOPES: ['https://www.googleapis.com/auth/spreadsheets'], // token允許的api

  CREDENTIALS_PATH: resolvedPath('credentials.json'), // google oauth 憑證
  TOKEN_PATH: resolvedPath('token.json'), // token 存放位置 自動產生

  LOCALE_PATH: 'result/remoteLocale', // 路徑

  LOCALE_KEYS: ['key', 'cn', 'en'], // 轉換成GOOGLE SHEET 的排序方式
  KEY_INDEX: 0, //　從第幾行開始

}
```