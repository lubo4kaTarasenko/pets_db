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
});