class ListNode {
  value: number
  next: ListNode | null
  constructor(value?: number, next?: ListNode | null) {
    this.value = value === undefined ? 0 : value
    this.next = next === undefined ? null : next
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) return null
  if (head.next === null) return head

  const newHead = reverseList(head?.next ?? null)

  // 完成想要的操作是在这个位置
  // 第一次来到这里的时候, 一定是倒数第二个节点
}