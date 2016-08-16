$(function() {
  var flavors = ["vanilla","chocolate", "cookies n' cream", "coffee"];
  flavors.forEach(function(flavor) {
    $("ul#flavors").append("<li>"+flavor+"</li>");
  });
});

            //  for groceries

$(function(){

  //writes inputs
  grocIds = ["item1","item2","item3","item4","item5","item6","item7","item8"];
  grocIds.forEach(function(grocId){
    $("#groceryForm").append('<input id="'+grocId+'" type="text"><br>');
  });

  $("button.submitIt").click(function(event){
    $("form#groceryForm").hide();
    $("ul#groceryList").empty();
// EMPTY is how you clear all the child elements
    var arrayitems = ["item1","item2","item3","item4","item5","item6","item7","item8"];
    var tempItemArray =[];
    arrayitems.forEach(function(item){
        tempItemArray.push($("#"+item).val());
    });
    tempItemArrayCap = tempItemArray.map(function(item){
      return item.toUpperCase();
    });
    tempItemArrayCap.sort();
    event.preventDefault();

    tempItemArrayCap.forEach(function(item){
      $("ul#groceryList").append("<li>"+item+"</li>");

    });
  });

  //For sentence.html
  $("#buttonSubmit").click(function(event){
    var sentenceString = $("#userSentence").val();
    var sentenceArray = sentenceString.split(" ");
    var longWords = [];
    sentenceArray.forEach(function(word){
      if (word.length > 2) {
        longWords.push(word);
      }
    });
    longWords.reverse();
    alert(longWords);

    event.preventDefault();
    // var newSentence = $("#userSetence").split(" ");
  });
});
