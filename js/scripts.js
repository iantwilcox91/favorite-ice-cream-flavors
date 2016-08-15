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

    $("button.submitIt").hide();

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
});
