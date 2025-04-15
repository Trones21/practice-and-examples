def binary_search(arr, target):
    startIdx, endIdx = 0, len(arr) - 1

    while startIdx <= endIdx:
        midIdx = startIdx + (endIdx - startIdx) // 2
        # Key comparison with the value at midIdx
        if arr[midIdx] == target:
            return midIdx  # Target found
        elif arr[midIdx] < target:
            startIdx = midIdx + 1  # Adjust search to right half
        else:
            endIdx = midIdx - 1  # Adjust search to left half

    return -1  # Element not found
