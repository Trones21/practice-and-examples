function search(array, keyword) {
    const regExp = new RegExp(keyword, "gi");
    const check = obj => {
        if (obj !== null && typeof obj === "object") { return Object.values(obj).some(check) }
        if (Array.isArray(obj)) { return obj.some(check) }
        return (typeof obj === "string" || typeof obj === "number") && regExp.test(obj);
    }
    return array.filter(check);
}