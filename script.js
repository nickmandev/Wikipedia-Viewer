function useData(data){
var title = data[1];
var text = data[2];
var links = data[3]; 
$('#container .well').each(function() {
   $(this).remove();
});
$.each(title,function(i, value){
$(".well-result").first().clone().appendTo("#container");
$("#container .title").eq(i).html(value);  
});
$.each(text,function(i, value){
$("#container .text").eq(i).html(value);
});
$.each(links,function(i,value){
$("#container .link").eq(i).attr("href" ,value).attr("target","_blank"); 
$("#container .link").addClass("btn btn-info").text("Full article");
});  
};
$("#search").click(function() {
  var search = $('.input').val();
  $.getJSON("https://crossorigin.me/" + "https://en.wikipedia.org//w/api.php?action=opensearch&format=json&search=" + search + "&redirects=return",useData);
});
