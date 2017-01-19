$(function() {
    $("button").click(function () {
        var $name =  $("#pet_name").val();
        var $age = $("#pet_age").val();
        var $comment = $("#pet_comment").val();
        var $type = $("#pet_type").val();



        var pet = {
            name: $name,
            age: $age,
            comment: $comment,
            type: $type
        };

        var arr = Storage.getAccounts();
        arr.push(pet);

        localStorage.setItem('arrObject', JSON.stringify(arr));


    })
    $('.add').submit(function(){
        $(".container").append("<div class='row'><div class='col-sm-2'>" +
            "</div><div class='col-sm-6'><div class='alert alert-success'>Питомец успешно добавлен</div>" +
            "</div></div>");
        return false;
    });
});

