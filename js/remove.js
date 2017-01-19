$(function() {
    function messageRemove() {
        $(".container").find("#mess").remove();
    }
    $("#remove").click(function () {
        var $name = $("#pet_name_remove").val();
        var arr = JSON.parse(localStorage.getItem('arrObject'));
        for(var i = 0; i < arr.length; i++) {
              if(arr[i].name == $name) {
                arr.splice(i, 1);
                var html = "<div class='row' id='mess'><div class='col-sm-2'>" +
                    "</div><div class='col-sm-6'><div class='alert alert-success'>Питомец успешно удален</div>" +
                    "</div></div>";

                $(".container").append(html);
                 setTimeout(messageRemove, 3000);
              }
        }
        if($(".container").find(".alert.alert-success").length== 0) {
            var html = "<div class='row' id='mess'><div class='col-sm-2'>" +
                "</div><div class='col-sm-6'><div class='alert alert-danger'>Питомца с таким именем нет в базе данных" +
                "</div></div></div>";

            $(".container").append(html);
            setTimeout(messageRemove, 3000);
        }
        localStorage.setItem('arrObject', JSON.stringify(arr));
    })
})


