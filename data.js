function handleKeyPress(event) 
{
    if (event.key === 'Enter') 
    {
        var inputValue = document.getElementById("searchInput").value;

	    if (inputValue.trim() !== "") 
	    {

	        var googleSearchURL = "https://www.google.com/search?q=" + encodeURIComponent(inputValue);
	        window.open(googleSearchURL, "_blank");
	    } 
	    else 
	    {
	        alert("Please enter a search query.");
	    }
    }
}
