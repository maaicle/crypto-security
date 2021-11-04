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
    // console.log(cypher, encrypted);
    encryptedString = encrypted.join('');
}

encrypt(message, keyword);
console.log(encryptedString);