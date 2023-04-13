/**
 * 删除html标签
 * @param {*} str 
 * @returns 
 */
export function delHtmlTag(str) {
  // return str.replace(/<\/?.+?>/g, "").replace(/&nbsp;/g, "").replace(/&lt;/g, "").replace(/&gt;/g, "");
  // return str.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, "").replace(/&lt;/g, "").replace(/&gt;/g, "");
  return str.replace(/[^(\u4e00-\u9fa5)。，,.]/g, "")
}