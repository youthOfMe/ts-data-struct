interface IList<T> {
  // peek查看顶部元素
  peek(): T | undefined
  // 判断是否为空
  isEmpty(): boolean
  // 元素的个数
  size(): number
}

export default IList