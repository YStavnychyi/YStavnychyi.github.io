$(document).ready(function (){
    $("form").submit(function (){
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "Dentistry/mail.php",
            data: th.serialize()
        }).done(function(){
            setTimeout(() => {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});