$(document).ready(function(e){
    $('#closeHamburg').hide();
    $('#hamburg').on('click',function(e)
    {
        //$('#navBar').css({'display':'block'});
        //$('#navBar').toggleClass('mostrarMenu');
        $('#navBar').slideDown();
        $('#closeHamburg').show(300);
        $('#hamburg').hide(400);
    });

    $('#closeHamburg').on('click',function(e)
    {
        //$('#navBar').css({'display':'block'});
        /*$('#navBar').toggleClass('mostrarMenu');*/
        $('#hamburg').show();
        $('#closeHamburg').hide();
        $('#navBar').hide();
        
    });
});