const fs = require('fs')
const path = require('path')
const Facturapi = require('facturapi');

const cerFileStream = fs.createReadStream(path.join(__dirname, 'CSD.cer'));
const keyFileStream = fs.createReadStream(path.join(__dirname, 'CSD.key'));

// upload certificates
const facturapi = new Facturapi('USER_SECRET_KEY');

(async () => {
  const organization = await facturapi.organizations.uploadCertificate(
    'MY_ORGANIZATION_ID',
    cerFileStream,
    keyFileStream,
    'MY_CERT_PASSWORD'
  );
  console.log({ organization });
})().catch(console.error);