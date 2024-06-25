import IQueue from "./IQueue"

class ArrayQueue<T> implements IQueue<T> {
  // 内部数据通过数据(链表保存)
  private data: T[] = []

  enqueue(element: T): void {
    this.data.push(element)
  }

  dequeue(): T | undefined {
    return this.data.shift()
  }

  peek(): T | undefined {
    return this.data[0]
  }

  isEmpty(): boolean {
    return !this.data.length
  }

  size(): number {
    return this.data.length
  }
}

export default ArrayQueue