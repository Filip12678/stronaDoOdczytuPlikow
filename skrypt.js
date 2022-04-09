function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    window.contents = e.target.result;
	zawartoscPliku = contents;
    displayContents(contents);
  };
  reader.readAsText(file);
}

function displayContents(contents) {
  var element = document.getElementById('file-content');
  element.textContent = contents;
}



function myFunction() {
	
	var zawartosc = contents;
	navigator.clipboard.writeText(zawartosc);
	
}



document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);
  
  
