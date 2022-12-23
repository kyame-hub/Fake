function play_se(){
    var warning = new Audio('Nyan Cat.mp3');
    warning.play();
    
};

$(function(){

    //　ブラウザバック禁止
    history.pushState(null, null, null);
    $(window).on('popstate', function(e){

        if (!e.orininalEvent.state)
        play_se();

    });
    

            // OKボタン押すとMP3
            $('.modal').modal({dismissible: false});
            $('#alert').modal('open');
            $('#close').click(function(){
                $('#alert').modal('close');
                play_se();
            })
});