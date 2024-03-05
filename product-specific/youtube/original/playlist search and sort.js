///This adds the sort dropdown and search bar to the UI
function modUI(){
    let popup = Array.from(document.querySelectorAll('.ytd-popup-container')).filter( i => i.localName == 'ytd-add-to-playlist-renderer')[0]
    let parentDiv = popup.querySelector('#header')
    
    const close = parentDiv.querySelector('#close-button')
    let searchBar = document.createElement('div')
    searchBar.innerText = 'This will be a searchbar'
    parentDiv.insertBefore(searchBar, close)
    
    let dropdownSort = document.createElement('div')
    dropdownSort.className = 'yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response'
    dropdownSort.innerText = 'Sort'
    parentDiv.insertBefore(dropdownSort, close)
}

function selectPlaylists(){
let playlists = Array.from(document.getElementsByTagName('ytd-playlist-add-to-option-renderer')) 
playlists = playlists.slice(2 ,5)
for(let playlist of playlists){
   playlist.name = playlist.querySelector('.checkbox-height').innerText
}
return playlists
}

function renderResults(){
    let parent = Array.from(document.querySelectorAll('.ytd-popup-container')).filter( i => i.localName == 'ytd-add-to-playlist-renderer')[0]
let replacement = document.getElementById('playlists').cloneNode()

for(let playlist of resultPlaylists){
    replacement.appendChild(playlist)
}
parent.appendChild(replacement)

document.querySelectorAll('#playlists')[0].remove()
}

//This is basically the template, 
//all functions invoked by the event listener on the dropdown or search bar will follow this pattern
function sort(direction){
    let playlists = selectPlaylists()
    let resultPlaylists = playlists.sort((a, b) => (a.name > b.name ? 1 : -1))
    renderResults(resultPlaylists)
}

//ModUI is basically the main func that should run when the menu appears
modUI()

//Sorting Options to Be Added
// Alphabetical (asc, desc)
// Video Count (asc, desc)  (Maybe???)

