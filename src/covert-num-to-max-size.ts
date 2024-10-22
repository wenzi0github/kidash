/**
 * 将数字提升到最高的量级
 * @param num 要转换的数字
 * @param config 配置
 * @returns 返回转换后的数字
 */
const covertNumToMaxSize = (
  num: number,
  config?: {
    decimal?: number; // 要保留几位小数，默认保留1位
    strict?: boolean; // 是否严格保留小数位数，默认会舍弃小数点后面的0
    unit?: boolean; // 是否需要单位，有的场景可能只是比大小，不需要单位，默认有单位
    thousandth?: boolean; // 是否要千分位，只在万级以下的数字才会生效，默认true
    sizes?: [number, string][]; // 要转换的基数和单位
  }
) => {
  if (typeof num !== "number") {
    // 万一接口在数据为0时返回null或undefined等类型
    return 0;
  }

  const decimal = config?.decimal ?? 1;
  const strict = config?.strict ?? false;
  const unit = config?.unit ?? true;
  const thousandth = config?.thousandth ?? true;
  const sizes = config?.sizes || [
    [0, ""],
    [1e4, "万"],
    [1e8, "亿"],
    [1e12, "兆"],
  ];

  let i = 0;

  // 判断数字处于哪个量级
  for (; i < sizes.length - 1; i++) {
    if (num < (sizes as any)[i + 1][0]) {
      break;
    }
  }
  if ((sizes as any)[i][0]) {
    num /= (sizes as any)[i][0];
  }

  let result: number | string = num.toFixed(decimal);
  if (!strict) {
    // 非严格要求小数位数，则舍弃小数最后的0
    result = Number(result);
  }
  if (thousandth) {
    const [first, last] = String(result).split(".");

    if ((first?.length || 0) > 3 || (last?.length || 0) > 3) {
      // 将字符串添加千分位
      result = String(result).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,");
    }
  }
  if (unit && (sizes as any)[i][1]) {
    result += (sizes as any)[i][1];
  }
  return result;
};
export default covertNumToMaxSize;
