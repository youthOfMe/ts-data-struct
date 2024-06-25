import ILinkedList from "./ILinkedList"

// 1. 创建Node节点类
class Node<T> {
  value: T
  next: Node<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}

// 2. 创建LinkedList的累
class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T> | null = null
  private size: number = 0

  get length() {
    return this.size
  }

  get getHead() {
    return this.head
  }

  // 封装私有方法
  // 根据position获取当前的节点(不是节点的value, 而是获取节点)
  private getNode(position: number): Node<T> |  null {
    let index = 0
    let current = this.head
    while (index++ < position && current) {
      current = current.next
    }
    return current
  }

  // 追加节点
  append(value: T) {
    // 1. 根据value创建一个新的节点
    const newNode = new Node(value)

    // 2. 判断this.head是否为空
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }

      // current肯定是指向最后一个节点的
      current.next = newNode
    }

    // 3. size++
    this.size++
  }

  // 遍历链表方法
  traverse(): void {
    const values: T[] = []

    let current = this.head
    while (current) {
      values.push(current.value)
      current = current.next
    }

    console.log(values.join("->"))
  }

  // 插入方法
  insert(value: T, position: number): boolean {
    // 1. 越界的判断
    if (position < 0 || position > this.size) {
      return false
    }

    // 2. 根据value创建新的节点
    const newNode = new Node(value)

    // 3. 判断是否需要插入头部
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      const previous = this.getNode(position - 1)

      newNode.next = previous?.next ?? null
      previous!.next = newNode
    }

    this.size++

    return true
  }

  // 删除方法
  removeAt(position: number): T | null {
    // 1. 越界的判断
    if (position < 0 || position > this.size) {
      return null
    }

    // 2. 判断是否是删除第一个节点
    let current = this.head
    if (position === 0) {
      this.head = current?.next ?? null
    } else {
      // 重构为如下代码
      const previous = this.getNode(position - 1)

      // 需要给current重新赋值
      current = previous!.next

      // 找到需要的节点
      previous!.next = previous?.next?.next ?? null
    }

    this.size--

    return current?.value ?? null
  }

  // 判断单链表是否为空的方法
  isEmpty(): boolean {
    return this.size === 0
  }

  // 根据值, 找到对应索引的位置
  indexOf(value: T): number {
    // 从第一个节点开始向后遍历
    let current = this.head
    let index = 0
    while (current) {
      if (current.value === value) {
        return index
      }
      current = current.next
      index++
    }
    
    return -1
  }

  // 根据value删除节点
  remove(value: T): T | null {
    const index = this.indexOf(value)
    return this.removeAt(index)
  }

  // 获取方法
  get(position: number): T | null {
    // 越界问题
    if (position < 0 || position > this.size) {
      return null
    }

    // 2. 查找元素, 并且返回元素
    return this.getNode(position)?.value ?? null
  }

  // 更新方法
  update(value: T, position: number): boolean {
    if (position < 0 || position > this.size) return false
    // 获取对应位置的节点, 直接更新即可
    const currentNode = this.getNode(position)
    currentNode!.value = value
    return true
  }
}

const linkedList = new LinkedList<string>()
linkedList.append("aaa")
linkedList.append("bbb")
linkedList.append("ccc")
linkedList.append("ddd")

console.log(linkedList.insert("abc", 0))
linkedList.traverse()
console.log(linkedList.insert("cba", 2))
linkedList.traverse()

// 测试删除节点
console.log("--------- 测试remove ---------")
linkedList.removeAt(5)
linkedList.traverse()
linkedList.removeAt(0)
linkedList.traverse()
linkedList.removeAt(2)
linkedList.traverse()

// 测试获取节点
console.log("--------- 测试get ---------")
console.log(linkedList.get(0))
console.log(linkedList.get(1))
console.log(linkedList.get(2))

console.log("--------- 测试update ---------")
linkedList.update("why", 1)
linkedList.update("kobe", 2)
linkedList.traverse()

console.log("--------- 测试indexOf ---------")
console.log(linkedList.indexOf("cba"))
linkedList.append("cna")
linkedList.append("nba")
console.log(linkedList.indexOf("nba"))

console.log("--------- 测试remove ---------")
linkedList.remove("why")
linkedList.traverse()
console.log(linkedList.isEmpty())

export {}
