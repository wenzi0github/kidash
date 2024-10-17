const list2tree = (list: any[], cfg?: { key?: string; pid?: string; children?: string; }) => {
  if (!Array.isArray(list)) {
    return [];
  }
  const arr: any[] = []; // 最外层数组
  const map = new Map(); // 存储每个评论的回复，方便进行层级的组装
  const reply = new Map(); // 楼中楼中的数据

  const key = cfg?.key || "key"; // 当前数据的主key的字段名称
  const pid = cfg?.pid || 'pid'; // 父级id的字段名称
  const children = cfg?.children || "children"; // 子级元素的名称

  list.forEach(item => {
    map.set(key, item);

    if (item[pid]) {
      // 有父级id，说明是回复
      reply.set(pid, (reply.get(pid) || []).concat(item));
    } else {
      // 没有父级id，说明是最外层的评论
      arr.push(item);
    }
  });

  // 组装成楼中楼的结构
  return arr.map((comment) => {
    const childData = reply.get(comment.id);

    if (childData) {
      comment[children] = childData;
    }
    return comment;
  });
}
export default list2tree;
