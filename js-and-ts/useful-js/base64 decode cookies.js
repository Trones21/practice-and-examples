let cookies = document.cookie.split(';')
let decoded = cookies.map(c => {
    return {
        k: c.split('=')[0],
        v: c.split('=')[1],
        decoded: tryDecode(c)
    }
}
)
console.log(decoded);

function tryDecode(i) {
    try {
        return atob(i.split('=')[1])
    } catch {
        return "cannot decode"
    }
}