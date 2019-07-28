// 4.js
import bar from './3.js'                   // 写法一
bar()
// 输出：foo

import { default as bar } from './3.js'    // 写法二
bar()
// 输出：foo
