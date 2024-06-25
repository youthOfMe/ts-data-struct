import IStack from "./IStack"

// 封装一个栈
class ArrayStack<T = any> implements IStack<T> {
  // 定义一个数组/链表, 用于存储元素
  private data: T[] = []

  // 实现栈中的相关操作方法
  // push方法: 将一个元素压入栈中
  push(element: T) {
    this.data.push(element)
  }

  // pop方法: 将栈顶元素弹出栈(返回出去, 并且从栈顶移除)
  pop(): T | undefined {
    return this.data.pop()
  }
  
  // peek方法: 看一眼栈顶元素, 但是不进行任何操作
  peek(): T | undefined {
    return this.data[this.data.length - 1]
  }

  // 查看栈中数据是否为空
  isEmpty(): boolean {
    return this.data.length === 0
  }

  // 返回栈中数据的数量
  size(): number {
    return this.data.length
  }
}


// 创建stack的实例
const stack1 = new ArrayStack<string>()

stack1.push("aaa")
stack1.push("bbb")
stack1.push("ccc")

console.log(stack1.peek())
console.log(stack1.pop())
console.log(stack1.pop())
const res = stack1.pop()
if (res) {
  console.log(res.split(''))
}
console.log(stack1.isEmpty())
console.log(stack1.size())
