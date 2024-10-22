# kidash

a famous and popular util tools.

## isNil

check value is `null` or `undefined`.

判断变量是否为 `null` 或 `undefined`。

```javascript
isNil(null); // true
isNil(undefined); // true
isNil(false); // false
```

## getScript

get script by async.

异步加载 script。

```javascript
getScript("https://static.example.org/aa.js").then(() => console.log("load aa complete"));

getScript("https://static.example.org/bb.js", {
  id: "script-bb-id",
  charset: "UTF-8",
}).then(() => console.log("load bb complete"));
```

## isParamEmpty

check value is empty.

判断变量是否为空。这里与 lodash 的 isEmpty 不同，这里的 number, boolean 等类型的数据，认为是非空。

```javascript
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

## openUrl

在新页面打开链接。

```javascript
openUrl("https://www.xiabingbao.com");
```
