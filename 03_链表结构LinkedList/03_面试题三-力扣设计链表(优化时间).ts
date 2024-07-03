class Node {
  val: number
  next: Node | null = null
  pre: Node | null = null

  constructor(val: number) {
    this.val = val
  }
}

class MyLinkedList {

  private head: Node | null = null
  private size: number = 0

  constructor() {

  }

  get(index: number): number {
    // 处理边界条件
    if (index < 0 || index >= this.size) {
      return -1
    }

    let result = this.head
    for (let i = 0; i < index; i++) {
      result = result!.next
    }
    return result!.val
  }

  addAtHead(val: number): void {
    if (!this.head) {
      this.head = new Node(val)
    } else {
      const newNode = new Node(val)
      newNode.next = this.head
      newNode.pre = null
      this.head.pre = newNode
      this.head = newNode
    }

    this.size++
  }

  addAtTail(val: number): void {
    if (!this.head) {
      this.head = new Node(val)
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      const newNode = new Node(val)
      current.next = newNode
      newNode.pre = current
    }

    this.size++
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) {
      return
    }

    // 处理边界条件
    if (index === 0) {
      this.addAtHead(val)
      return
    }
    if (index === this.size) {
      this.addAtTail(val)
      return
    }

    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current!.next
    }
    const newNode = new Node(val)
    current!.pre!.next = newNode
    newNode.pre = current!.pre
    current!.pre = newNode
    newNode.next = current

    this.size++
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) {
      return
    }

    // 处理边界条件
    if (index === 0) {
      this.head = this.head!.next
      this.size--
      return
    }

    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current!.next
    }
    if (current!.next) {
      current!.next.pre = current!.pre
    }
    current!.pre!.next = current!.next

    this.size--
  }
}

export { }