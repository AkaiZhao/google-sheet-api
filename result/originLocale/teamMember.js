const rawData = {
  team: ['Team', '团队'],
  member: ['Member', '成员']
  };
  
let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
  