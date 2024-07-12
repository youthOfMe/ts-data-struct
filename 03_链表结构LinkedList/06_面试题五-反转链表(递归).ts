class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  // 1. 处理边界条件
  if (head === null || head.next === null) return head

  // 2. 反转链表结构
  const newHead = reverseList(head?.next ?? null)

  // 在这个位置完成想进行的操作
  // 第一次来到这里的时候 一定是倒数第二个节点
  head.next.next = head
  head.next = null

  return newHead
}

// 模拟数据进行测试
const node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)

const node2 = reverseList(node1)
console.log(node2?.next?.next?.val)

export { }
