module.exports = function createDreamTeam(members) {
  let name="";
  let team=[];
  if (Array.isArray(members)===true) {
  for(let i=0;i<members.length;i++){
    if (typeof(members[i])=="string"){
      members[i]=members[i].trim();
      members[i]=members[i].toUpperCase();
      team[i] = members[i][0];
    }
  }
  return team.sort().join('');
  }
  return false;
};
