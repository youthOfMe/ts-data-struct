import { btPrint } from 'hy-algokit'
import Node from "../types/INode"

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
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
}

const bst = new BSTree<number>()

bst.insert(20)
bst.insert(30)
bst.insert(18)

bst.print()

export { }