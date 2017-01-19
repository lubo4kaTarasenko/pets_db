$(function(){
    $("#go").click(function (){
        $("#tab").find("tr").remove();

        var $searchText = $("#search").val();
        var arr = Storage.getAccounts();
        for (var i = 0; i < arr.length; i++) {
            var pet = arr[i];
            var pet_name = pet.name;
            var b = pet_name.indexOf($searchText);

            if (b !== -1) {
                $("#tab").append("<tr><th>" + pet.name + "</th><td>" + pet.type + "</td><td>" +
                    pet.age + "</td><td>" + pet.comment + "</td></tr>")
            }
        }


    })
});

