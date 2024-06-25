class ListNode {
  value: number
  next: ListNode | null
  constructor(value?: number, next?: ListNode | null) {
    this.value = value === undefined ? 0 : value
    this.next = next === undefined ? null : next
  }
} 

function deleteNode(node: ListNode | null): void {
  node!.value = node!.next!.value
  node!.next = node!.next!.next
}

export {}