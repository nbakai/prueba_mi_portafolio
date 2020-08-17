$(function(){
    $('a').click(function(event){
        if(this.hash !== "") {
            event.preventDefault();
            var x = this.hash;
            $("html, body").animate({
                scrollTop: $(x).offset().top
            }, 800, function(){
                window.location.hash = x;
            });
        }
    });
});


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });