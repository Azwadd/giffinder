// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
function giphyURLWithSearchTerm(searchTerm) {
    return "https://api.giphy.com/v1/stickers/search?q="+searchTerm+"&api_key=dc6zaTOxFJmzC";
}

function appendImageToBody(srcURL) {
    $(".gallery").append("<img src="+srcURL+">");
    console.log('has image!');
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    console.log('getting gifs for ' + searchTerm);
    $.ajax({
      url: giphyURLWithSearchTerm(searchTerm),
      method: "GET",
      success: function(response) {
           console.log('has response');
           for (var i = 0;i !== response.data.length - 1;i = i + 1) {
                console.log(i);
//                console.log(response.data[i].images.original.url);
               appendImageToBody(response.data[i].images.original.url);
            }
        },
    });  
}    
$(document).ready(function(){
    $(".answer").click(function(e) {
		e.preventDefault();
        console.log($(".input").val());
        $(".gallery").text(" ");
        callGiphyAPIWithSearchTerm($(".input").val());
        
        
    });
});
