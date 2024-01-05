
// function performGoogleSearch() {

//     var inputValue = document.getElementById("searchInput").value;

//     if (inputValue.trim() !== "") 
//     {
//         var googleSearchURL = "https://www.google.com/search?q=" + encodeURIComponent(inputValue);
//         window.open(googleSearchURL, "_blank");
//     } 
//     else 
//     {
//         alert("Please enter a search query.");
//     }
// }

// script.js


function performGoogleSearch() {
    // Retrieve the input value
    var inputValue = document.getElementById("searchInput").value;

    // Check if the input value is not empty
    if (inputValue.trim() !== "") {
        // Construct the Google search URL
        var googleSearchURL = "https://www.google.com/search?q=" + encodeURIComponent(inputValue);

        // Open the Google search in a new tab/window
        window.open(googleSearchURL, "_blank");
    } else {
        // Handle empty search input (optional)
        alert("Please enter a search query.");
    }
}


function handleKeyPress(event) {
    // Check if the key pressed is 'Enter'
    if (event.key === 'Enter') {
        // Call the performGoogleSearch function when Enter is pressed
        performGoogleSearch();
    }
}
