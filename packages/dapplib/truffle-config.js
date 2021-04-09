require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remind hospital idea enroll fox twin'; 
let testAccounts = [
"0x7697500d201b58022a1cbd4be8a1f9de0fd5aab46b7686ec066fd948231dd8b7",
"0xb92e928e9f7135d0b69df9f31290180d93cb1d96ec51f6650562c01b7d096f7f",
"0x40df1d38b5f88551c97ce44f585b0e14a35664e4921aefcc84283ea2cf328ee0",
"0x1a9a91a24230aa3bcd3800f26d693ae496d099e48183245d71f98ba62e224bf7",
"0xeba9c5bb64073c0b93eb70d3d05b11ba907687ab41b2a680c3369b39c0817b26",
"0x73d7779a3e97695b6be11630c82df9ac3a3fdb51d667515acd76911484027126",
"0x2ed7105bd7621ec6439b07661b07119e1fe65d9cdae652bbed7db74902a9b4ba",
"0x22017d539c67d082335cb345b6f90fd941839a549d845ef72656984c04c4eb53",
"0xe687791e9dcabf085a4791432f3d0b1c364f201f5d2af693275f51c1327a2f71",
"0x78452e4f9625123d38e179b3cefa68b585243cbfbc6ff673352e6aa429c5250a"
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
