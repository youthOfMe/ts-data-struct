import { btPrint } from 'hy-algokit'
import Node from "../types/INode"

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null

  parent: TreeNode<T> | null = null

  // 判断当前节点是父节点的左子节点
  get isLeft(): boolean {
    return !!(this.parent && this.parent.left === this)
  }

  // 判断当前节点是父节点的右子节点
  get isRight(): boolean {
    return !!(this.parent && this.parent.right === this)
  }
}

class BSTree<T> {
  private root: TreeNode<T> | null = null

  get getRoot() {
    return this.root
  }

  print() {
    btPrint(this.root)
  }

  /** 向node插入子节点的操作 */
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) { // 去左边继续查找空白位置
      if (node.left === null) { // 左树为空
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {  // 去右边继续查找空白位置
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  /** 根据值插入数据的操作 */
  insert(value: T) {
    // 1. 根据传入value创建Node(TreeNode)节点
    const newNode = new TreeNode<T>(value)

    // 2. 判断是否已经有了根节点
    if (!this.root) { // 当前树为空
      this.root = newNode
    } else { // 树中已经有其他值
      this.insertNode(this.root, newNode)
    }
  }

  /** 根据值进行搜索节点 */
  private searchNode(value: T): TreeNode<T> | null {
    let current = this.root
    let parent: TreeNode<T> | null = null

    while (current) {
      // 1. 如果找到current直接返回即可
      if (current.value === value) return current

      // 继续向下走
      parent = current
      if (current.value < value) {
        current = current.right
      } else {
        current = current.left
      }

      // 如果current有值, 那么current保存自己的父节点
      if (current) current.parent = parent
    }

    return null
  }

  /** 搜索特定的值: 20 => boolean */
  search(value: T): boolean {
    return !!this.searchNode(value)
  }

  /** 遍历的操作 */
  /** 先序遍历 */
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root)
  }
  private preOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      console.log(node.value)
      this.preOrderTraverseNode(node.left)
      this.preOrderTraverseNode(node.right)
    }
  }

  /** 中序遍历 */
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }
  private inOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.inOrderTraverseNode(node.left)
      console.log(node.value)
      this.inOrderTraverseNode(node.right)
    }
  }

  /** 后序遍历 */
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root)
  }
  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.postOrderTraverseNode(node.left)
      this.postOrderTraverseNode(node.right)
      console.log(node.value)
    }
  }

  /** 层序遍历 */
  levelOrderTraverse() {
    // 1. 如果没有根节点, 就不需要进行遍历
    if (!this.root) return

    // 2. 创建队列结构
    const queue: TreeNode<T>[] = []
    // 第一个节点是根节点
    queue.push(this.root)

    // 3. 遍历队列中的所有节点(依次出队)
    while (queue.length) {
      // 3.1 访问节点的过程
      const current = queue.shift()
      console.log(current?.value)

      // 3.2 将左子节点加入到队列中
      if (current?.left) {
        queue.push(current.left)
      }

      // 3.3 将右子节点加入到队列中
      if (current?.right) {
        queue.push(current.right)
      }
    }
  }

  /** 获取最值的操作: 最大值/最小值 */
  getMaxValue(): T | null {
    let current = this.root
    while (current && current.right) {
      current = current.right
    }
    return current?.value ?? null
  }
  getMinValue(): T | null {
    let current = this.root
    while (current && current.left) {
      current = current.left
    }
    return current?.value ?? null
  }
}

const bst = new BSTree<number>()

bst.insert(20)
bst.insert(30)
bst.insert(18)
bst.insert(21)
bst.insert(32)
bst.insert(12)
bst.insert(15)
bst.insert(23)
bst.insert(19)

bst.print()

console.log(bst.search(19))
console.log(bst.search(88))

// bst.levelOrderTraverse()

bst.preOrderTraverse()

export { }