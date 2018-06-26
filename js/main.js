var apiUrl = "https://data.nasa.gov/resource/gvk9-iz74.json"
$.ajax({
url:apiUrl,
success: function(res){
  console.log(res)
  res.forEach(function(object) {
      if(object.center +','+object.city+','+object.country !== $("body > ul > li:last-child").text()){
          $("ul").append('<li>' + object.center + ','+object.city+','+object.country+ '</li>')
      }
  });
},
error:function(err){
  console.log(err)
}
})
