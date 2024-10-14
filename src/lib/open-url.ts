/**
 * open url by the new tab
 */
const openUrl = (url: string, attrs?: any) => {
  //创建A标签
  const a = document.createElement("a");
  //给创建好的a标签赋值
  a.setAttribute("href", url);
  //设置css 隐藏属性
  a.setAttribute("style", "display:none");
  //设置 a标签为新窗口打开
  a.setAttribute("target", "_blank");

  if (attrs) {
    for (const key in attrs) {
      a.setAttribute(key, attrs[key]);
    }
  }

  //将设置好的a标签，添加到 body 内
  document.body.appendChild(a);
  //模拟点击
  a.click();
  //移除a标签
  a.parentNode?.removeChild(a);
};
export default openUrl
