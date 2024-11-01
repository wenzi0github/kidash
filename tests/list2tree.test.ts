import list2tree from "../src/list2tree";

describe("list2tree", () => {
  it("should get empty array when data is not array", () => {
    expect(list2tree("abc" as any)).toEqual([]);
  });
  it("should get tree", () => {
    const list = [
      { id: "a", name: "aa" },
      { id: "b", name: "bb", pid: "a" },
    ];
    expect(list2tree(list)).toEqual([{ id: "a", name: "aa", children: [{ id: "b", name: "bb", pid: "a" }] }]);
  });
  it("should get tree and we can set config", () => {
    const list = [
      { key: "a", name: "aa" },
      { key: "b", name: "bb", parentId: "a" },
    ];
    expect(list2tree(list, { id: "key", pid: "parentId" })).toEqual([
      { key: "a", name: "aa", children: [{ key: "b", name: "bb", parentId: "a" }] },
    ]);
  });
});
