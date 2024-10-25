/**
 * 将数组转为树形结构
 * @param list 数组
 * @param cfg 配置
 * @returns tree
 */
const list2tree = (
  list: any[],
  cfg?: {
    /**
     * 数据的主id字段名称
     */
    id?: string;
    /**
     * 父级id的字段名称
     */
    pid?: string;
    /**
     * 子级元素的字段名称
     */
    children?: string;
  }
) => {
  if (!Array.isArray(list)) {
    return [];
  }
  const arr: any[] = []; // 最外层数组
  const reply = new Map(); // 楼中楼中的数据

  const id = cfg?.id || "id"; // 当前数据的主id的字段名称
  const pid = cfg?.pid || "pid"; // 父级id的字段名称
  const children = cfg?.children || "children"; // 子级元素的名称

  list.forEach((item) => {
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
    const childData = reply.get(item[id]);

    if (childData) {
      item[children] = childData;
    }
    return item;
  });
};
export default list2tree;
