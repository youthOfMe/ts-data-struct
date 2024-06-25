import ArrayQueue from "./01_测试队列结构Queue"

function hotPotato(names: string[], num: number): number {
  if (names.length === 0) return -1

  // 1. 创建队列结构
  const queue = new ArrayQueue<string>()

  // 2. 将所有的name加入队列
  for (const name of names) {
    queue.enqueue(name)
  }

  // 3. 淘汰的规则
  while (queue.size() > 1) {
    // 1/2不淘汰
    for (let i = 1; i < num; i++) {
      const name = queue.dequeue()
      if (name) queue.enqueue(name)
    }

    // 3. 淘汰
    queue.dequeue()
  }

  const lefeName = queue.dequeue()!
  const index = names.indexOf(lefeName)
  return index
}

const leftName = hotPotato(["why", "james", "kobe"], 3)
console.log(leftName)
