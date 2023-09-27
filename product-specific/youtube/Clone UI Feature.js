//Overall Idea
//Copy Selector
//Clone node, clean/update node (remove listeners, text images, etc, and add your own) and append??
///////////////

//This might actually be kinda difficult b/c it takes time to understand the exact strcuture of their elements -- it's easier to just make your own, then maybe apply some of the styling?

//Get the insertion point
let popup = Array.from(document.querySelectorAll('.ytd-popup-container')).filter( i => i.localName == 'ytd-add-to-playlist-renderer')[0]
let parentDiv = popup.querySelector('#header')

//Clone Existing UI Feature
let copyEl = document.querySelector('#top-level-buttons-computed > ytd-button-renderer').cloneNode('deep')
console.log(copyEl)

//Add node
// const close = parentDiv.querySelector('#close-button')
// let dropdownSort = document.createElement('ytd-button-renderer')
// dropdownSort.id = 'myui-dd-sort'
// dropdownSort.className = 'style-scope ytd-menu-renderer'
// dropdownSort.innerText = 'Sort'
// parentDiv.insertBefore(dropdownSort, close)