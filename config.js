function save() {
	var albumID = document.getElementById("imguralbum").value;
//	chrome.storage.sync.set({
//		imgurAlbumID: albumID
//	}, function() {
//		console.log('Imgur album with ID ' + albumID + ' has been saved.');
//		message("Settings saved");
//	});
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.imgur.com/3/album/" + albumID, true);
	xhr.setRequestHeader("Authorization", "Client-ID c16c61562ba10db");
	xhr.send();

	var response = xhr.responseText;

}


document.getElementById("saveButton").addEventListener("click", save);