---
---
(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('otc');

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
          console.log("{{item.image}}")
        appendString += ('<div id="resultscontainer" style="width:100%; height:125px; float:left;"> <div style="float:left; width:650px; margin-left: 10px; margin-top:17px;font-family: inherit; line-height: 50%; font-size: 14px; color: #000000; font-style: normal; z-index: 3; font-variant: normal; font-weight: 700;"> <a href="' + item.url + '" class="mainNav">' + item.title + ' </a>  </div> <div style="float:left; width:650px; margin-left: 10px; margin-top:5px; font-family: inherit; line-height: 140%; font-size: 13px; color: #000000; font-style: normal; z-index: 3; font-variant: normal; font-weight: 500;"> ' + item.author + ' </div> <div style="float:left; width:650px; margin-left: 10px;font-family: inherit;  line-height: 120%; font-size: 14px; color: #58595b; font-style: normal; z-index: 3; font-variant: normal; font-weight: 500;"> ' + item.content.substring(0, 150) + ' ... </div> <div style="height: 1px;float:left;margin-top: 11.5px;width:850px;background-color: darkgray;float:left;z-index:  2;> </div> </div>');
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = 'No Results found';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('category');
      this.field('content');
      this.field(); 
    });
    console.log(window.store)
    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'author': window.store[key].author,
        'category': window.store[key].category,
        'content': window.store[key].content
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();