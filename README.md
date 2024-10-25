# kidash

a famous and popular util tools.

## covertNumToMaxSize

将数字转为最高的单位，如：1024 转为 1KB。并可以相关的配置。非数字将被转为 0。

详细使用可以参考： [数字转换为更高量级单位的工具方法](https://www.xiabingbao.com/post/fe/covert-num-sel4mj.html)

```javascript
import { covertNumToMaxSize } from "kidash";

covertNumToMaxSize(null); // 0
covertNumToMaxSize("123"); // 0
covertNumToMaxSize(1234567); // '123.5万'
covertNumToMaxSize(1367892445); // '13.7亿'
covertNumToMaxSize(1234567, { decimal: 2 }); // 保留2位小数，'123.46万'

// 预计保留2位小数，但最后1位是0，进行舍弃
covertNumToMaxSize(1234017, { decimal: 2 }); // "123.4万"

// 严格保留2位小数，不论最后一位是什么数字
covertNumToMaxSize(1234017, { decimal: 2, strict: true }); // "123.40万"

// 默认会设置千分位
covertNumToMaxSize(1234); // '1,234'

// 不设置千分位
covertNumToMaxSize(1234, { thousandth: false }); // 1234

// 转为最高单位对应的数字，但不返回最后的单位
covertNumToMaxSize(1234017, { unit: false }); // 123.4

// 设置转换基数和对应的单位
covertNumToMaxSize(1234017, {
  sizes: [
    [0, ""],
    [1024, "KB"],
    [1024 * 1024, "MB"],
  ],
}); // '1.2MB'
```

## getScript

get script by async.

异步加载 script。

```javascript
import { getScript } from "kidash";

getScript("https://static.example.org/aa.js").then(() => console.log("load aa complete"));

getScript("https://static.example.org/bb.js", {
  id: "script-bb-id",
  charset: "UTF-8",
}).then(() => console.log("load bb complete"));
```

## isNil

check value is `null` or `undefined`.

判断变量是否为 `null` 或 `undefined`。

```javascript
import { isNil } from "kidash";

isNil(null); // true
isNil(undefined); // true
isNil(false); // false
```

## isParamEmpty

check value is empty.

判断变量是否为空。这里与 lodash 的 isEmpty 不同，这里的 number, boolean 等类型的数据，认为是非空。

```javascript
import { isParamEmpty } from "kidash";

isParamEmpty(null); // true
isParamEmpty(undefined); // true

isParamEmpty(123); // false
isParamEmpty(0); // false
isParamEmpty(false); // false
isParamEmpty(Number.NaN); // true

isParamEmpty("   "); // true
isParamEmpty(" abc  "); // false

isParamEmpty([]); // true
isParamEmpty([1, 2]); // false

isParamEmpty({}); // true
isParamEmpty({ a: 21 }); // false

isParamEmpty(new Map()); // true
isParamEmpty(new Set()); // true

const map = new Map();
map.set("a", 1);
isParamEmpty(map); // false

const set = new Set();
set.add("abc");
isParamEmpty(set); // false
```

## list2tree

将数组转为树形结构。

代码中会有 3 个默认值，但可以通过第 2 个参数修改配置：

- id: 数据的主 id 字段名称；
- pid: 父级 id 对应的字段名称，若字段名称不是 pid，可以设置为其他字段；
- children: 子集元素对应的字段名称，若字段名称不是 children，可以设置为其他字段；

```javascript
import { list2tree } from "kidash";

const list = [
  { id: "a", name: "aa" },
  { id: "b", name: "bb", pid: "a" },
];

list2tree(list);
/**
 * [
 *    {
 *      id: "a",
 *      name: "aa",
 *      children: [
 *        { id: "b", name: "bb", pid: "a" }
 *      ]
 *    }
 * ]
 */
```

字段对应不上，可以修改配置：

```javascript
const list = [
  { key: "a", name: "aa" },
  { key: "b", name: "bb", parentId: "a" },
];

list2tree(list, {
  id: "key", // 主键字段名称
  pid: "parentId", // 父级 id 对应的字段名称
});
```

## openUrl

在新页面打开链接。

```javascript
import { openUrl } from "kidash";

openUrl("https://www.xiabingbao.com");
```

## randomString

获取随机字符串。

- length: 获取字符串的长度，可选，默认长度是 32；
- base: 从哪些字符中随机获取，可选，默认是 16 进制；

> 请注意，不要使用该方法用于生成唯一 id 使用。这里不保证全局的唯一性。

```javascript
import { randomString } from "kidash";

randomString(); // 生成32位长度的随机字符串
randomString(12); // 生成12位长度的随机字符串
randomString(12, "abcdefghijklmnopqrstuvwxyz"); // 基于第2个参数的字符串，生成随机字符串
```

## random

随机生成介于 min 和 max 之间`[min, max]`的数字，若只传一个参数，则认为是从 `[0, max]`。

```javascript
random(10, 20); // 生成介于10和20之间的随机数，包含上下限
random(10); // 生成介于0和10之间的随机数，包含上下限
```

## size

获取对象、数组、字符串的长度。

```javascript
size(null); // 0
size(123); // 数字没有长度，为0
size([10, 20, 30]); // 3
size({ a: 1, b: 2 }); // 2

const map = new Map();
map.set("a", 1);
map.set("b", 3);
size(map); // 2
```

## sleep

基于 Promise 的延时器。

```javascript
const fn = async () => {
  console.log("before sleep", Date.now());
  await sleep(1200);
  console.log("after sleep", Date.now());
};
```

## trimData

去除数据结构中，值的前后的空格。若该数据结构是 Object 或者 Array，将会递归。

```javascript
trimData(" a "); // 'a'
trimData([" a ", " b ", " c "]); // ['a', 'b', 'c']
trimData({ a: " a ", b: " b ", c: " c " }); // { a: 'a', b: 'b', c: 'c' }
```
