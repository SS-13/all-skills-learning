
/**
 * 一个方法：生成错误的提示信息 tsdocs
 *
 * @param {string} message
 * @param {(number | string)} code
 * @param {("demo1" | "demo2")} [type]
 * @returns {string}
 *
 * [还不懂？点击这里吧](https://www.google.com/)
 *
 * ```js
 * // demo
 * getErrorMessage('demo', 10086)
 * ```
 */
function getErrorMessage(
  message: string,
  code: number | string,
  type?: "demo1" | "demo2"
): string {
  return message || "网络繁忙，请稍后～" + code;
}

// getErrorMessage()
