$(function(){
    var arr = JSON.parse(localStorage.getItem('arrObject'));
    for(var i =0; i < arr.length; i++) {
        var pet = arr[i]
        $("#tab").append("<tr><th>" + pet.name + "</th><td>" + pet.type +
            "</td><td>" + pet.age + "</td><td>" + pet.comment +
            "</td><td align='right' ><button class='btn btn-danger' type='button' id='remove_in_tab'>"+
            "<i class='glyphicon glyphicon-remove-circle'></i></button></td></tr>")
    }
});
