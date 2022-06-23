


const oldStr = 'aba111bcbb22aba22cecc2';
const strs = ["aba", "bcbb", "cecc"];
const bar = /(aba|bcbb|cecc)+/g;
const reg = new RegExp(`(${strs.join('|')})+`, 'g');
// ⚠️ new RegExp 的时候 不需要再加 // 
// e.g. new RegExp(`/(${strs.join('|')})+/`, 'g');
// 这样出来的是 /\/(aba|bcbb|cecc)+\//g
const foo = oldStr.split(reg);
console.log('lly-log -- foo --->', foo);