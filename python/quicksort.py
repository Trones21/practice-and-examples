def main():
    arr = [4, 7, 3, 5]
    sorted_arr = sort(arr)
    print(sorted_arr)


def sort(arr):
    # base case
    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]

    # 3-way partition to handle duplicates
    smaller = [x for x in arr if x < pivot]
    equal = [x for x in arr if x == pivot]
    larger = [x for x in arr if x > pivot]

    return sort(smaller) + equal + sort(larger)


main()
