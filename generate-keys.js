const fs = require('fs');
const { generateKeyPairSync } = require('crypto');

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'pkcs1',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs1',
    format: 'pem'
  }
});

fs.writeFileSync('private.key', privateKey);
fs.writeFileSync('public.pem', publicKey);

console.log('✅ RSA Key Pair Generated: private.key and public.pem');