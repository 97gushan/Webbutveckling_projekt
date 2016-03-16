
function sign_up(){

    var input = {
        name: $("#name").val(),
        mail: $("#mail").val()

    };
    // save to a database
    //$.post("http://97gushan.pythonanywhere.com/formular/", {"name":input["name"], "mail":input["mail"]});

    test = $.get("http://97gushan.pythonanywhere.com/wubwub/");

    console.log(test[lista["foo"]]);

    $(".input_box").hide();
    $(".pre_sign_up_text").hide();
    $(".sign_up_text").show();
    $(".sign_btn").hide();


}
