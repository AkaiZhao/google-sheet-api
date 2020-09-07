const rawData = {
    // login
    loginErrorMessage: [
        'Login failed, please confirm your input data and type.',
        '登入失败，请确认您的输入资料和类型。'
    ],

    // common
    // -- success
    success: [ 'Success', '成功' ],
    modifySuccess: [ 'Modify success', '修改成功' ],
    copiedSuccess: [ 'Copy ok', '复制成功' ],
    pwdChangeSuccess: ['Change password success .', '密码修改成功'],
    // -- search result
    noMatchData: [ 'No matching records found', '没有符合的资料'],
    // -- error
    fail: ['Failed', '失敗'],
    somethingWrong: ['Something wrong', '有东西坏了'],
    inputError: ['Input Error', '栏位输入错误'],

    // service
    // -- bo
    serviceFailed: [
      'Some problems have occurred, please contact the administrator.',
      '发生了一些问题，请联系管理员。'
    ],
    tooManyRequests: [ 'Too Many Requests.', '请求太频繁，请稍后再试。' ],

    // timeout
    timeout: [
      'Result is too large to display. Please adjust search parameters.',
      '当前条件资料量过大，请修改查询条件'
    ],
  };
  
  let language = { en: {}, cn: {} };
  Object.keys(rawData).forEach(key => {
    language.en[key] = rawData[key][0];
    language.cn[key] = rawData[key][1];
  });
  
  module.exports = language
  