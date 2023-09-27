#include <vector>
#include <iostream>
#include <unordered_map>

using namespace std;

namespace answers{

bool containsDuplicates(vector<int> nums)
{
    unordered_map<int, int> numsCounts = {};
    for (auto n : nums)
    {
        if(numsCounts.find(n) == numsCounts.end()){
            numsCounts.insert({n, 1});
        }else{
            numsCounts[n] += 1;
        }
    }

    for(const auto& item: numsCounts){
        cout << "k: " << item.first << "  - v:" << item.second << endl;
    }

    for(const auto& item: numsCounts){
            if(item.second > 1){
                return true;
            }
    }
    return false;
}
}

int main()
{
    vector<int> nums = {1, 7, 11, 3, 7, 4};
    answers::containsDuplicates(nums);
    return 0;
}



