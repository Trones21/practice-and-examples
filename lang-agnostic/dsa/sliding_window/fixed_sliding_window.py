
arr = [2, 1, 5, 1, 3, 2]
k = 3

def explore_sliding_window_chatgpt(arr , windowSize):
    left = 0
    for right in range(len(arr)):
        if right - left + 1 == windowSize:
            window = arr[left:right+ 1] 
            print(f"Window [{left}:{right}] =>", window)

            # Slide the window
            left += 1


def explore_sliding_window_mine(arr , windowSize):
    left = 0
    for right in range(len(arr)):
        print(right)
    for right in range(len(arr) + 1):
        # right - k >= 0 - IsValidWindow (bounds handling)
        # right - k == left - is correct window length
        print("Right:", right)
        if right - k >= 0 and right - k == left:
            window = arr[left:right]
            print(f"Window", window)
            left += 1
            print(left, right)



############################################
# Define left as being out of bounds and then simply use a continue until left is in bounds
#############################################
def explore_sliding_window_cleaning_up_thinking(arr , windowSize):
    left = 0 - windowSize # This is easy to reason about
    for right in range(len(arr)):
        left += 1
        if left < 0: 
            continue #left would be OOB
        if left >= 0:
            print("window", arr[left:right + 1]) # the +1 here is due to the [inclusive:exclusive] nature of slices
        


############################################
# or just start with a valid position for right
# “You don't need to arrive at a valid state — you can start there.”
#############################################
def explore_sliding_window_cleaning_up_2(arr , windowSize):
    left = 0 
    for right in range(windowSize - 1, len(arr)):
        print("window", arr[left: right + 1]) # end bound is exclusive
        left += 1




def explore_sliding_window_cleaning_up_thinking_alt(arr , windowSize):
    for right in range(len(arr) + 1):
        if right - windowSize < -1:
            continue #left would be OOB
        
        #left += 1

# explore_sliding_window(arr, k)

explore_sliding_window_cleaning_up_2(arr, k)


# Some key ideas 
# We are iterating a non-loop variable only inside a conditional
# AND that variable is a PART OF THE CONDITION
# So the broader pattern here is actually the feeback loop
    # That like scope mismatch 

# Another broad pattern is our loop bounds are immediately protected by the first if check, 
# so thats pretty much something that will always be there            


# And a python quirk... slices are [inclusive: exclusive]
#lets fix it with
def inclusive_slice(arr, start, end):
    return arr[start:end+1]





# “Am I thinking in terms of distance from the current index excluding it or including it?”

# Once you define that clearly, all the indexing math just clicks into place.


# "Progressive Guarded Window"
# Start with a window in the red (invalid), let it grow until it stabilizes, then proceed.

# or just do right = 2 