import ArrayStack from "./01_实现栈结构Stack"

function decimalToBinary(decimal: number): string {
  let binary = ''
  // 1. 创建一个栈, 用于存储余数
  const stack = new ArrayStack()

  // 2. 使用循环: 
  // while: 不确定次数, 只知道循环条件
  // for: 指导循环的次数
  while (decimal > 0) {
    const result = decimal % 2
    stack.push(result)

    decimal = Math.floor(decimal / 2)
  }

  // 3. 所有余数都已经在栈中了, 依次出栈即可
  while (!stack.isEmpty()) {
    binary += stack.pop()
  }

  return binary
}

console.log("------------------")
console.log(decimalToBinary(11))
console.log("------------------")
console.log(decimalToBinary(100))

export {}
