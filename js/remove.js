$(function() {
    $("button").click(function () {
        var $name = $("#pet_name_remove").val();
        var arr = JSON.parse(localStorage.getItem('arrObject'));
        for(var i = 0; i < arr.length; i++) {
              if(arr[i].name == $name) {
                arr.splice(i, 1);
                $(".container").append("<div class='row'><div class='col-sm-2'>" +
                    "</div><div class='col-sm-6'><div class='alert alert-success'>Питомец успешно удален</div>" +
                    "</div></div>")
              }
        }
        if($(".container").find(".alert.alert-success").length== 0) {
            $(".container").append("<div class='row'><div class='col-sm-2'>" +
            "</div><div class='col-sm-6'><div class='alert alert-danger'>Питомца с таким именем нет в базе данных" +
            "</div></div></div>")
        }
        localStorage.setItem('arrObject', JSON.stringify(arr));
    })
})/**
 * Created by luba on 17.01.2017.
 */
