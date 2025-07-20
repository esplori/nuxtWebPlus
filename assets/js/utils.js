/**
 * 删除html标签
 * @param {*} str 
 * @returns 
 */
export function delHtmlTag(str) {
  // if (process.client) {
  //   // 浏览器端通过js原生方法去除Html标签
  //   return (new DOMParser().parseFromString(str, "text/html").body.textContent || '')
  // } else {
  //   return str
  // }
  // return str.replace(/[^(\u4e00-\u9fa5)。，,.]/g, "")
  return str.replace(/<[^>]+>/g, "")
}