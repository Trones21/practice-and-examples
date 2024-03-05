// To Do:
// Check headers and urls against the actual calls in Solscan


/*** No auth necessary*/
async function getStakedAmt(address){
    let res = await fetch(`https://api.solscan.io/v2/user/account/stake?address=${address}&cluster=`, options)
    let data = await res.json()
    let amt = 0
    for (let[k,v] of Object.entries(data.data)) {
        amt += Number(v.amount) * 0.000000001 
    }
    return amt;
}

/** Auth in Body 
 * auth.username: email,
 * auth.token: JWT (NOT API Key)
*/
async function getNonStakedAmt(auth, address){
    let bodyObj = {
        address: address,
        username: auth.username,
        token: auth.token 
    }
    options.body = JSON.stringify(bodyObj)
    let res = await fetch(`https://api.solscan.io/v2/user/account?cluster=`, options)
    let data = await res.json()
    
    
}

/** Auth in url */
async function getAddresses(email, token){
let res = await fetch(`https://api.solscan.io/v2/user/watchlist/info?username=${email}&token=${token}`, options)
let data = await res.json()
return data.data.watchlist
}


async function main(){

//Add your auth info here. Find it by looking at a request in chrome dev tools
let auth = {
    email: '',
    token: ''
}

let options =  {"headers": {
    "accept": "application/json",
    "accept-language": "en-US,en;q=0.9,fr-FR;q=0.8,fr;q=0.7,de-DE;q=0.6,de;q=0.5",
    "au-be": "iRfUb563J8ynDlFleNu77J24QaTziL4sPmNnwo43T8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://solscan.io/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
}

// Either create an array of addresses in the same shape that the API returns, 
// or get from the API with the getAddresses func 

let items = [
    {
        "wallet": "<address>",
        "name": "<walletname>",
        "descript": "",
        "tracking": "all"
    }
]

//let items = await getAddresses(auth.username, auth.token)

let total = 0
for(let idx = 0; idx < items.length; idx += 1){
    items[idx].stakedAmt = await getStakedAmt(items[idx].wallet)
    total += items[idx].stakedAmt
}

console.log(total)
console.log(items)
}

main()