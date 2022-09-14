const JWT = require('jsonwebtoken');

const payload = { message: 'Hi Friends' };

const secret = "my-secret";

const signed = JWT.sign(payload, secret, {

  algorithm: 'HS512',
  expiresIn: '10s'
});

console.log(signed);

const original_payload = JWT.verify(signed, secret, {
  //singature stripping attacks.
  algorithms: 'HS512'
});

console.log('\n', original_payload, '\n');