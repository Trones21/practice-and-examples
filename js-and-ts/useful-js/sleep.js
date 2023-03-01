(async () => {

    console.log("A")
    await sleep(1000)
    console.log("B")
})();

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}