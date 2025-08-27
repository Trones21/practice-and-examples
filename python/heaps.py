import heapq


def main():
    myarr = [7, 5, 11, 3, 24]
    heapq.heapify(myarr)
    minheap = myarr  # just for readability... so its clear we now have a heap
    heapq.heappush(myarr, 2)
    heapq.heappushpop


main()
