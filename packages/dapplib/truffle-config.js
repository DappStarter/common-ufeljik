require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue rival office pulse heavy ensure slot giggle'; 
let testAccounts = [
"0x1d840233399fc40b14ab3ca7473bc2b3780ff95a619274202a17d58413fdbff3",
"0x9ca7cd776b29f1d856795a7708e6ca32a8fe29d0d65075ec7701427fd31415ec",
"0xd89ee20396a00e1292fe31fdb85f721ccaca75ae4759aca6b851fe8de2bf0d66",
"0x878913a449bf8434320a5797b6904b099a5bbb38cff4249da85a6883d65f52a2",
"0x9406a4a95e83d5e7b81292881d3a08af2c10ad133e930f7a15af00f508497a28",
"0x74d7fbdfd74a4e359e6a2ca29200dc858f47651ccb840d14a30583a41d01a5c7",
"0x4339db3e8e122030345350450d5787358bb2cceeb70fbe11a860f40a62de91c2",
"0xf5914f371fdb5975b9bebffed18bc5370eaa57f0418373c371e18b101c77858d",
"0x92328608adccb60967c6e8ebf7021f060a41cbd6c59e00303a9bfa76f24f8b7e",
"0x6339dc67f31581ae234bd7f5552b73f042f22fcfb1f9be2ad35a2195d40baf66"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
