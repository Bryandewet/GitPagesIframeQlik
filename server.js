const jwt = require('jsonwebtoken');

// Replace with your actual private RSA key from Qlik Cloud
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAnuIoZWrDP/PjwisP9BpcnLGK2+ZepYOep4oY7/ynWp+qyApV
4XMPZCDIyX0ePPd11etu3R8WUm4mRMzlenRIeW9JKpZFTlNrcK+zOcVHLkp8DE/O
PeHIKBCf25DRPhztRv0Xsd5b3Bz+kEIFHBpKqCa6T8IMrPi9wKV1D6HOQxl8YHSe
WUpmoAcNcQNwsFKvAqCB5d3hyH1Ds9IJfxywcQz/vCn7YIIwNfoonxq8spFX6ECf
NS7353QqQXTs5lW5MdiDz/Dv2cr9NbPchX3YMHzMHxVnTyx6EEzsUeapVqvRhlUn
nUPzEjdxoBBzCScYQLKZ1SR6G6AC3rTxQpLXDwIDAQABAoIBAAwKybnS4bTGYD9A
BeS5qsZ/Ky5UXSmsuo9Dbduio2/Ai+OL62TVbhebGumXZhdQ2i/tUpwuPJut/yoi
+ks4GdYgxsOt9NeYhjTzdcetjO7HqA2qCGoZ45KSnMsgRGIYAMceOUS6vO06wib4
GgY+dLIew7hDCOe2fD6BskgN1EhMvSZ8PO5zRcj/j8SFEIVIgUhoUCvw/Z5Ujt1p
sCVL7EgJZgioHfxW1wXzE/k6YayhIvhCKsIBQfXMiqMXn7NS71W79n1j9bi7aFUG
JTiP1Cl/7UH8G7GA9Tq2aoN2tycqYAlEybYh9unGLAr+hdWrnqjQieXlj7QzlqFh
8B7dLYECgYEA2R0+iwj6FuMR+Qb4AhdakAZ3yxlL6z5MjmFxBemarr0do/F3WsMO
5ULMtTzjlPdm7hUJP9tPmkGs+bwnA0kH64xh8JBEt3O6ePq8O5re+tbW7R1z/3QQ
KrW+Xg+8UNX70XstB0CAu2epdOLAK7rt28b/C7kRIpTyA0Cyf8JtdJECgYEAu1cD
RLFmpXE64nrdcpl+W+BpQEojtv9Wae7xnITY4WFYow5Jj0ZUPOQPtPcu9zZscate
zFsGs5RKhv/44AVQ9vdM9kwKEL2UcL9QKIyFDuxXZB+d+sJr0448pme0Sq0OIRZp
Urga0cyYp571nHpOc/MAZIGc4wAZQgfcL7zk4Z8CgYBUxpyDQZAVm7iK2nPArUnJ
bx0bitcgFgVimx28x0iE7odCWqjWIdARKRIxuoLKygfA8ynXa1Ub0IUwRo2dNMkI
6pnbixmp4GBxmMYjKAflPjpR/+wpVTJy2uBobhCEJ+naFBSy/jbF9mYuo9ORv73c
0UkJVMwiCrKtHngUduCyYQKBgHVR7pgMSO3+1ROUQi5Mdddv2DoMtAUcLq+0ldah
U3kBj5K9lc+GCacAY92+lsj2aj9dRMbRkobPrUSR9PfGHIgtIyNzRzJopxdcmARs
y78mvyvSqQqqyv/3qX/EniHN8nVCJb9J0HHmoQsH/2R5K7xtR6epi+iU3Tx+06OJ
tgSdAoGAMOyf4JFim6VqJwcCwI00BCoU/AS2SX1+fsEj8VWyVASlGm/AWFPjZNVM
cKXQzrofA2CrFqX9guN0hMwMldm3H6Ktb1QN8RZV7QtY3Z589A+a+gWOIlNcZeWG
WT/SzMLRu89J1IYH5M33PAjHuvYnNlsiHp+ypou+QHL8y5ySGGo=
-----END RSA PRIVATE KEY-----`;

const clientId = 'juvz6q3bwpm2eac.eu.qlikcloud.com'; // Same as the 'iss' value
const userEmail = 'bryan.dewet@cimt.nl';

const payload = {
  sub: userEmail,
  email: userEmail,
  name: "Static User",
  email_verified: true,
  iss: clientId,
  aud: "qlik.api/login/jwt-session"
};

const token = jwt.sign(payload, privateKey, {
  algorithm: 'RS256',
  expiresIn: '5m'
});

console.log("Generated JWT:\n");
console.log(token);