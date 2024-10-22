import tree2list from "../src/tree2list";

describe("tree2list", () => {
  it("should return empty array when tree is not array", () => {
    expect(tree2list(null)).toEqual([]);
    expect(tree2list(undefined)).toEqual([]);
    expect(tree2list(1)).toEqual([]);
    expect(tree2list("")).toEqual([]);
    expect(tree2list({})).toEqual([]);
  });
  it("should return list data", () => {
    expect(tree2list([{ id: 1, children: [{ id: 2 }] }])).toEqual([{ id: 1 }, { id: 2 }]);
  });
  it("should return list data with custom children", () => {
    expect(tree2list([{ id: 1, child: [{ id: 2 }] }], { children: "child" })).toEqual([{ id: 1 }, { id: 2 }]);
  });
});
