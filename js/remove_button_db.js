$(function() {
    $(".remove_in_tab").click(function () {
        $this.addClass("class");
        var conf = confirm("Вы уверенные, что хотите удалить питомца с базы данных?");
        console.log(conf)
        if(conf){
            $('.class').prev("tr").remove();
       }
    })
});//всего-то нужно как-то сослатся на кнопку в ифе, чтобы найти тр и удалить его... 