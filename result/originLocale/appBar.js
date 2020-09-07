// IANA timezone 北京 = 上海 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
// 括號放語系是依據中文排版指北 https://github.com/sparanoid/chinese-copywriting-guidelines
const rawData = {
    asiaShanhai: ['(CST)', '（北京）'], 
    americaNewYork: ['(GMT)', '（伦敦）'],
    europeLondon: ['(EST)', '（美东）'],
  };
  
  let language = { en: {}, cn: {} };
  Object.keys(rawData).forEach(key => {
    language.en[key] = rawData[key][0];
    language.cn[key] = rawData[key][1];
  });
  
  module.exports = language
  