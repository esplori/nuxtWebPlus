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

/**
 * 格式化日期为YYYY-MM-DD格式
 * @param {*} dateString - 日期字符串
 * @returns 格式化后的日期字符串
 */
export function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}