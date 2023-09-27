#include <string>
#include <iostream>

using namespace std;

namespace answers{
        string gcdOfStrings(string str1, string str2) {
            string key = "";
            string check = "";
            if(str1.length() < str2.length()){
                key = str1;
                check = str2;
            }else{
                key = str2;
                check = str1;
            }
            //Shortcut
            if(check.length() % key.length() != 0){
                return "";
            }

            for(auto i = 0; i < check.length(); i=i+key.length()){
                string chunk = 
                if(key !=  chunk){
                    return "";
                }
            }
        
    }
}

// The first sentence is misleading:
// "For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times)."

// this leads me to believe that the we are checking if one of the strings (str1 or str2) can be concatenated with itself over and over to create the other string.

// but the next sentence clarifies it a bit:
// "Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2."

// x is not necessarily str1 or str2,
// x can be any substring of both str1 and str2,

// I also think there cannot be extra characters:
// so if str1 = ABCAB
// and str2 = AB,
// we still return false / "" because the C cannot fit in -- even though both strings do contain AB one or multiple times

int main(){

    string caseInputs[3][2] = {
        {"ABCABC", "ABC"},
        {"ABABAB", "ABAB"},
        {"LEET", "CODE"}
    };

    for(auto input : caseInputs){
        auto merged = answers::gcdOfStrings(input[0], input[1]);
        cout << merged.c_str() << endl;
    }
}