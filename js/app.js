/*
  Please add all Javascript code to this file.
*/
 
(function(){
	var httpRequest = new XMLHttpRequest();

	document.getElementById('getReddit').onclick = request;

	function request (){
		httpRequest.onreadystatechange = responseMethod;

		httpRequest.open('GET', 'https://www.reddit.com/top.json');

		httpRequest.send();	
	}

	function responseMethod(){
	  if(httpRequest.readyState === XMLHttpRequest.DONE)
		if(httpRequest.status === 200){
			console.log(httpRequest.responseText);
		} else{
			console.log("There was an error.")
		}
	}

})();