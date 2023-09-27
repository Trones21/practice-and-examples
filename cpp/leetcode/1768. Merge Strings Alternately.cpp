#include <string>
#include <iostream>

using namespace std;

//Approach:
//Compare lengths 
//Loop over shorter length string and append from each string then after loop append rest of longer string

//Approach:
//Pop from start of each until both are empty, if one is empty before the other simply continue (b/c all chars have been popped), this removes the need to compare the lengths.
namespace answers{
    string mergeAlternately(string word1, string word2){
        string merged = "";
        while(word1.length() > 0 || word2.length() > 0){
            if(word1.length() > 0){
                merged += word1.at(0);
                word1.erase(0 , 1);
            }
            if(word2.length() > 0){
                merged += word2.at(0);
                word2.erase(0 , 1);
            }
        }
        return merged;
        
    }
}

int main(){

    string caseInputs[3][2] = {
        {"abc", "pqr"},
        {"ab", "pqrs"},
        {"abcd", "pq"}
    };

    for(auto input : caseInputs){
        auto merged = answers::mergeAlternately(input[0], input[1]);
        cout << merged.c_str() << endl;
    }

}