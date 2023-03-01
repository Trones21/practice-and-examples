const objectArray = [{ ...}, { ...}, { ...}, ...]

console.log(findFromList(objectArray, 'ruckus'));

function findFromList(list, keyword) {
    return list.filter((el) => search(el, keyword));
}

function search(el, keyword) {
    const type = Array.isArray(el) ? 'array' : typeof el;
    const searchFunc = getFuncByType(type);

    return searchFunc(el, keyword);
}

function getFuncByType(type) {
    const match = {
        'string': searchInText,
        'number': searchInText,
        'boolean': searchInText,
        'array': searchInArray,
        'object': searchInObject,
    };

    if (typeof match[type] !== 'undefined') {
        return match[type];
    } else {
        throw new Error(`Unknown element type "${type}"`);
    }
}

function searchInText(text, keyword) {
    return (text.toString().indexOf(keyword) !== -1);
}

function searchInObject(obj, keyword) {
    return searchInArray(Object.values(obj), keyword);
}

function searchInArray(arr, keyword) {
    return arr.find((el) => search(el, keyword)) !== undefined;
}