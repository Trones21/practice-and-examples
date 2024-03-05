#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;
//n kids 
//candies [2,4,1] extra candies = 2
//after giving out extras 
// [4, 4, 1] = true [0] >= max(candies[])
// [2, 6, 1] = true 
// [2,4, 3] = false 

namespace answers{

    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {

        auto mostCandies = *max_element(candies.begin(), candies.end());
        vector<bool> results = {};
        for(auto i : candies){
            if(i + extraCandies >= mostCandies){
                results.push_back(true);
            }else{
                results.push_back(false);
            }
        }
    return results;
       
    }

}


int main(){
    vector<int> candies = {2,4,1};
    int extraCandies = 2;
    auto results = answers::kidsWithCandies(candies, extraCandies);
    cout << "Wait";
}