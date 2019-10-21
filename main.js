import md5 from 'md5'
import { count, increment } from './incrementer.js';

console.log(count); // 0
increment();
console.log(count); // 1
console.log(md5(count)); // 1
