class ListNode {
  value: number
  next: ListNode | null
  constructor(value?: number, next?: ListNode | null) {
    this.value = value === undefined ? 0 : value
    this.next = next === undefined ? null : next
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  // 1. 判断节点为null, 或者只有一个节点, 那么直接返回即可 -> 处理边界条件
  if (head === null || head.next === null) return head

  // 2. 反转链表结构
  let newHead: ListNode | null = null

  while (head) {
    const current: ListNode | null = head.next
    head.next = newHead
    newHead = head
    head = current
  }

  return newHead
}