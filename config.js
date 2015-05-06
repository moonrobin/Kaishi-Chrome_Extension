function save() {
	var albumID = document.getElementById("album").value;
	chrome.storage.sync.set({
		imgurAlbumID: albumID
	});
	console.log('Imgur album with ID ' + albumID + ' has been saved.');
}

document.getElementById("saveButton").addEventListener("click", save);