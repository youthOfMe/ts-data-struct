import ArrayQueue from "./01_测试队列结构Queue"

// n: 一共多少个人 m: 喊到第几个的时候淘汰
function lastRemainName(n: number, m: number): number {

  // 1. 初始化队列
  const queue = new ArrayQueue<number>()

  // 2. 将所有数字加入到队列中
  for (let i = 1; i <= n; i++) {
    queue.enqueue(i)
  }

  while (queue.size() > 1) {
    for (let i = 1; i < m; i++) {
      queue.enqueue(queue.dequeue()!)
    }
    queue.dequeue()
  }

  return queue.dequeue()!
}

console.log(lastRemainName(3, 3))