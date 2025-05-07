const fs = require('fs');
const forge = require('node-forge');

const pki = forge.pki;

// Generate key pair
const keypair = pki.rsa.generateKeyPair(2048);

// Create a self-signed certificate
const cert = pki.createCertificate();
cert.publicKey = keypair.publicKey;
cert.serialNumber = '01';
cert.validity.notBefore = new Date();
cert.validity.notAfter = new Date();
cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 1);

// Set certificate attributes
const attrs = [
  { name: 'commonName', value: 'webapp_viewer' },
  { name: 'organizationName', value: 'My Company' },
  { shortName: 'OU', value: 'Qlik Integration' }
];
cert.setSubject(attrs);
cert.setIssuer(attrs);

// Self-sign the certificate
cert.sign(keypair.privateKey, forge.md.sha256.create());

// Convert to PEM
const privateKeyPem = pki.privateKeyToPem(keypair.privateKey);
const certPem = pki.certificateToPem(cert);

// Save to files
fs.writeFileSync('private.key', privateKeyPem);
fs.writeFileSync('certificate.pem', certPem);

console.log('✅ Keys and certificate generated:');
console.log('- private.key');
console.log('- certificate.pem');
