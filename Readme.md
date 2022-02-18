# Welcome

## How to run code

The example input is written inside the code so you can easily run the code.

```
  node index.js
```

---

You can use `scrub` function to import from `index.js` with the below codes.

```
import scrub from 'index.js`

const userData = {
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
};
const encryptedUserData = scrub(userData);
```
