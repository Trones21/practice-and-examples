let options = {"headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9,de;q=0.8,fr;q=0.7,nl;q=0.6,hu;q=0.5",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
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


//It looks like currently I only handle/care about the staked amount 

async function getStakedAmt(address){
    let res = await fetch(`https://api.solscan.io/account/stake?address=${address}&cluster=`, options)
    let data = await res.json()
    let amt = 0
    for (let[k,v] of Object.entries(data.data)) {
        amt += Number(v.amount) * 0.000000001 
    }
    return amt;
}

async function getAddresses(email, token){
let res = await fetch(`https://api.solscan.io/user/info?username=${email}&token=${token}`, options)
let data = await res.json()
return data.data.watchlist
}


//If you have an account, email your email address and JWT here -- this will get all your tracked wallets
//Otherwise you could simply use an array of wallet addresses
let items = await getAddresses('', '')
//let items = [ 'address', 'another address'] 
let total = 0
for(let idx = 0; idx < items.length; idx += 1){
    items[idx].stakedAmt = await getStakedAmt(items[idx].wallet)
    total += items[idx].stakedAmt
}

console.log(total)
console.log(items)