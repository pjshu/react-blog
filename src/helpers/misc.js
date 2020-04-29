export function filterStr(str) {
  const pattern = /[`~!@#$^&*()=|{}':;',\\[\].<>/?~！@#￥……&*（）——|{}【】'；：""'。，、？]/g;
  return str.replace(pattern, "");
}
