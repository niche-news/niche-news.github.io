//i'm sorry for this code
console.log($('#getmonth').innerHTML)

var str = file_get_contents('/_data/contributors.json');
var json = json_decode(str, true); // decode the JSON into an associative array


console.log(json)

$.get("/_data/contributors.json", function(data){
    console.log(data)  
})