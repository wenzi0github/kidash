const list2tree = (list: any[], cfg?: { key?: string; pid?: string; children?: string; }) => {
  if (!Array.isArray(list)) {
    return [];
  }
  const arr: any[] = []; // 最外层数组
  const reply = new Map(); // 楼中楼中的数据

  const key = cfg?.key || "key"; // 当前数据的主key的字段名称
  const pid = cfg?.pid || 'pid'; // 父级id的字段名称
  const children = cfg?.children || "children"; // 子级元素的名称

  list.forEach(item => {
    if (item[pid]) {
      // 有父级id，说明是回复
      reply.set(item[pid], (reply.get(item[pid]) || []).concat(item));
    } else {
      // 没有父级id，说明是最外层的评论
      arr.push(item);
    }
  });

  // 组装成楼中楼的结构
  return arr.map((item) => {
    const childData = reply.get(item[key]);

    if (childData) {
      item[children] = childData;
    }
    return item;
  });
}
export default list2tree;
