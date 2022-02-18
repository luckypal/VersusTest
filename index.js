const STRING_ENC = '******';

function encEmail(email) {
  const emailRegex = /[a-zA-Z0-9._-]+@/gi;
  return email.replace(emailRegex, `${STRING_ENC}@`);
}

function scrub(userData) {
  const personalKeys = ['name', 'username', 'password'];

  for (let key in userData) {
    const data = userData[key];
    const type = typeof data;
    if (type === 'object') {
      scrub(data);
      continue;
    }
    if (personalKeys.includes(key)) userData[key] = STRING_ENC;
    else if (key === 'email') userData[key] = encEmail(data);
  }
  return userData;
}

console.log(
  scrub({
    "id": 123,
    "name": "Elsa",
    "username": "xXfrozen_princessXx",
    "email": "elsa@arendelle.com",
    "age": 21,
    "power": "ice ray",
    "friends": [{
      "id": 234,
      "username": "MagicSnowman32"
    }, {
      "id": 456,
      "username": "call_me_anna"
    }]
  })
);

export default scrub;