function handleKeyPress(event) 
{
    if (event.key === 'Enter') 
    {
        var inputValue = document.getElementById("searchInput").value;
        var inputField = document.getElementById("searchInput");

	    if (inputValue.trim() !== "") 
	    {
	        var googleSearchURL = "https://www.google.com/search?q=" + encodeURIComponent(inputValue);
	        inputField.value = "";
	        window.open(googleSearchURL, "_blank");
	    } 
	    else 
	    {
	        alert("Please enter a search query.");
	    }
    }
}
