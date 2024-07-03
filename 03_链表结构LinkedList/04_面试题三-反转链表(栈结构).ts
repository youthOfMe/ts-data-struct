class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  // 1. 什么情况下链表不需要处理
  if (head === null) return null
  // 2. 只有一个节点
  if (head.next === null) return head

  // 数组模拟栈结构
  const stack: ListNode[] = []
  while (head) {
    stack.push(head)
    head = head.next
  }

  // 依次从栈结构中取出元素, 放到一个新的链表中
  const newHead: ListNode = stack.pop()!
  let newHeadCurrent = newHead
  while (stack.length) {
    const node = stack.pop()!
    newHeadCurrent.next = node
    newHeadCurrent = newHeadCurrent.next
  }

  // 最后的一个节点next执行null
  newHeadCurrent.next = null

  return newHead
}

// 模拟数据进行测试
const node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)

const node2 = reverseList(node1)
console.log(node2?.next?.next?.val)

export { }
