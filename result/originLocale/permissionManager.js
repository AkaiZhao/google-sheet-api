const rawData = {
  titleTable: ['Team List', '团队列表'],
  teamname: ['Team Name', '团队名称'],
  setting: ['Setting', '设定'],
  memberManagement: ['Member Management', '成员管理'],
  permissionManagement: ['Permission Management', '权限管理'],
  changeTeamName: ['Change Team Name', '更改团队名称'],
  delete: ['Delete', '删除'],
  createTeam: ['Create Team', '建立团队']
};

let language = { en: {}, cn: {} };
Object.keys(rawData).forEach(key => {
  language.en[key] = rawData[key][0];
  language.cn[key] = rawData[key][1];
});

module.exports = language
