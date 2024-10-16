/**
 * transform tree data to list data
 * @param {any[]} tree tree data
 * @param {{children?: string}} cfg
 * @example tree2list([{id: 1, children: [{id: 2}]}])
 * @example tree2list([{id: 1, child: [{id: 2}]}], { children: 'child' })
 */
const tree2list = (tree: any, cfg?: { children?: string }) => {
  if (!Array.isArray(tree)) {
    return [];
  }
  const children = cfg?.children || "children";

  return tree.reduce((list: any[], node: any) => {
    const childrenList = node[children];

    list.push({ ...node, [children]: undefined });
    if (childrenList) {
      list.push(...tree2list(node[children], cfg));
    }
    return list;
  }, []);
};
export default tree2list;
