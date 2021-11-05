let message = 'This is a test message';
let keyword = 'mary had a little lamb';

let encryptedString = '';
let decryptedString = '';

let encrypt = (message, keyword) => {
    let messageArr = message.toLowerCase().split('');
    let alph = ('abcdefghijklmnopqrstuvwxyz ').split('')
    let encrypted = [];
    let uniqKey = [...new Set(keyword)];
    let newAlph = alph.filter(ele => !uniqKey.includes(ele))
    let cypher = uniqKey;
    newAlph.forEach(ele => cypher.push(ele));
    messageArr.forEach(ele => encrypted.push(cypher[alph.indexOf(ele)]))
    encryptedString = encrypted.join('');
}

let decrypt = (message, keyword) => {
    let messageArr = message.toLowerCase().split('');
    let alph = ('abcdefghijklmnopqrstuvwxyz ').split('')
    let decrypted = [];
    let uniqKey = [...new Set(keyword)];
    let newAlph = alph.filter(ele => !uniqKey.includes(ele))
    let decypher = uniqKey;
    newAlph.forEach(ele => decypher.push(ele));
    messageArr.forEach(ele => decrypted.push(alph[decypher.indexOf(ele)]))
    decryptedString = decrypted.join('');
    
}

encrypt(message, keyword);
decrypt(encryptedString, keyword);
console.log(`You provided message: "${message}" and keyword: "${keyword}"`)
console.log(`The encrypted message is "${encryptedString}"`);
console.log(`The decrypted message is "${decryptedString}"`);