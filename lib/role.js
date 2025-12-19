const roles = require('../data/roles.json');

function getUserRole(number) {
  if (roles.owner.includes(number)) return 'owner';
  if (roles.premium.includes(number)) return 'premium';
  return 'free';
}

module.exports = { getUserRole };
