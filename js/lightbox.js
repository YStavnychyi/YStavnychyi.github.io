var modal = document.getElementById('myModal');
var img = $('.clinicImg');
var modalImg = $('#foto');

$('.clinicImg').click(function (){
    modal.style.display = "flex";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
});

var span = document.getElementsByClassName("close_img")[0];
span.onclick = function () {
    modal.style.display = "none";
}

$(document).keydown(function(e){
    if(e.keyCode === 27){
        e.stopPropagation();
        $('.modal').fadeOut();
    }
});