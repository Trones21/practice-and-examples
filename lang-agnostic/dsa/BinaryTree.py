# implementation - lets satisfy the minheap? property
# basically every node.left < self.data < node.right
# lets start with the assumption that we have a unique set, otherwise would need to define how to order ties
from __future__ import annotations
from collections import deque


class Node:
    data = None
    left: Node | None = None
    right: Node | None = None

    def insert(self, i):
        if self.data is None:
            self.data = i
            return
        if i < self.data:
            if self.left is None:
                self.left = Node()
            self.left.insert(i)
            return
        if i > self.data:
            if self.right is None:
                self.right = Node()
            self.right.insert(i)
            return


def bfs_by_level(root):
    if not root:
        return

    queue = deque([root])
    while queue:
        level_size = len(queue)  # Number of nodes at current level
        print("level size ", level_size)
        for _ in range(level_size):  # Process all nodes at this level
            node = queue.popleft()
            print(node.data)  # or do whatever "check" operation

            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)


def main():
    arr = [4, 9, 2, 7, 23, 15]

    tree = Node()

    for i in arr:
        tree.insert(i)

    bfs_by_level(tree)


main()
