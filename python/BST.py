from __future__ import annotations
from typing import Generator

from pyparsing import deque


class Node:
    def __init__(self):
        self.value: int | None = None
        self.left: Node | None = None
        self.right: Node | None = None

    def insert(self, item):
        if self.value is None:
            self.value = item
            return
        if item <= self.value:
            if self.left is None:
                self.left = Node()
            self.left.insert(item)
            return
        if item > self.value:
            if self.right is None:
                self.right = Node()
            self.right.insert(item)
            return

    ## DFS
    def is_in_tree(self, tgt):
        if self.value == tgt:
            return True
        if self.left is not None and tgt < self.value:
            was_found = self.left.is_in_tree(tgt)
            return was_found
        if self.right is not None and tgt > self.value:
            was_found = self.right.is_in_tree(tgt)
            return was_found

        # Made it to leaf and item has not been found
        return False

    ## inorder
    def collect(self):
        out = []
        if self.value is None:
            return out
        out.append(self.value)
        if self.left is not None:
            out.extend(self.left.collect())
        if self.right is not None:
            out.extend(self.right.collect())
        return out

    ## in order visitation
    def get_max_depth(self, curr_depth):
        if self.value is None:
            return curr_depth  # don't add 1 because this isn't actually a node
        if self.left is not None:
            left_depth = self.left.get_max_depth(curr_depth)
        else:
            left_depth = 0
        if self.right is not None:
            right_depth = self.right.get_max_depth(curr_depth)
        else:
            right_depth = 0
        return max(left_depth, right_depth) + 1  # +1 for current level

    def level_order(self) -> Generator[int, None, None]:
        if self.value is None:
            return
        q = deque([self])
        while q:
            print("q", q)
            n = q.popleft()
            # n.value can'r be None here given insert semantics
            yield n.value  # type: ignore[assignment]
            if n.left:
                q.append(n.left)
            if n.right:
                q.append(n.right)


def main():
    arr = [5, 7, 3, 2, 4, 48, 14]

    tree = Node()
    for i in arr:
        tree.insert(i)

    print(tree)
    print(tree.collect())
    print(tree.get_max_depth(0))
    print(list(tree.level_order()))


main()
