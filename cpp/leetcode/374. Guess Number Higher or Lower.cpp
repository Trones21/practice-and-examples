#include <iostream>
#include <array>
#include <algorithm>
using namespace std;

namespace all
{
    //This is the hidden function that we call
    //n could be anything but for now I have hardcoded it 
    int guess(int n)
    {
        int chosen = 551;
        if (n > chosen)
        {
            return -1;
        }
        if (n < chosen)
        {
            return 1;
        }
        if (n = chosen)
        {
            return 0;
        }
    }

        int guessNumber(int n)
    {
        int left = 1;
        int right = n;

        int possibleReturns[] = {1, 0, -1};
        // int middle = right + (left - right)/2;
        while (left <= right)
        {
            int middle = left + (right - left) / 2;
            int guessing = guess(middle);
            if (guessing == 0)
            {
                cout << middle;
                return middle;
            }
            if (guessing == -1)
            {
                right = middle - 1;
            }
            if(guessing == 1)
            {
                left = middle + 1;
            }
            
            if(find(begin(possibleReturns), end(possibleReturns), guessing) == end(possibleReturns)){
                throw runtime_error("guess returned a value other than 1, 0, -1");
            }
        }
        return -1;
    }
}

int main()
{
    int n = 1000;
    all::guessNumber(n);
    return 0;
}
