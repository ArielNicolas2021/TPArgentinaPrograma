$(function(){
    $("#nuevos-check").on("click",function () {
        if ($("#nuevos-check:checked")) {
            $("#nuevos").show();
            $("#usados").hide();
        }
    });
    $("#usados-check").on("click",function () {
        if ($("#usados-check:checked")) {
            $("#usados").show();
            $("#nuevos").hide();
        }
    });
});
