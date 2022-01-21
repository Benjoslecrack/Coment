$(function(){

    /////////////////////////////////////////////////////////////HEADER

    const doc = $(document);
    const win = $(window);
    doc.on('scroll', function(){
        let pos = doc.scrollTop();
        if(pos >= 450){
            $("#header").addClass('bggradient-opac');
        }else{
            $("#header").removeClass('bggradient-opac');
        }
    })


    /////////////////////////////////////////////////////////////TOP

    //JS
    // document.addEventListener("mousemove", parallax);
    // function parallax(e){
    //     this.querySelectorAll('.same').forEach( layer => {
    //         const speed = layer.getAttribute('data-speed')

    //         const x = (window.innerWidth - e.pageX*speed)/110;
    //         const y = (window.innerHeight - e.pageY*speed)/110;

    //         layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    //     })
    // }

    //TRANSFORMATIONNNN JQ 
    doc.mousemove(function(event){
        $(".same").each(function(){
 
            const speed = $(this).attr("data-speed");

            const x = (win.width() - event.pageX*speed)/110;
            const y = (win.height() - event.pageY*speed)/110;

            $(this).css("transform",`translateX(${x}px) translateY(${y}px)`);
        })
    })

    /////////////////////////////////////////////////////////////TESTIMONIALS
    var remove = ".avis-1";
    var selector = "";

    $('.profil').hover(
        function() {
            $(remove).css("display","none");
            var selct = $(this).attr('data-numero');
            selector = ".avis-" + selct;
            $(selector).css("display","block");
            remove = selector;
        }
    )

    //////////////////////////////////////////////////////////////SCREENS
    var carte_selct = "carte-1";
    var selecteur_selct = "select1";

    $(".selecteur").click(function(){
        if($(this).attr("id") != selecteur_selct){
            $(this).removeClass("remove_green_link");
            $(this).addClass("add_green_link");
            $(`#${carte_selct}`).css("display","none");
            $(`#${selecteur_selct}`).addClass("remove_green_link");

            var numero = $(this).attr("data-numero");
            var id_carte = "carte-"+numero;
            var id_selecteur = "select"+numero;
            $(`#${id_carte}`).css("display","block");

            carte_selct = id_carte;
            selecteur_selct = id_selecteur;

            if(carte_selct == "carte-1"){
                $(".iphones").css("left","0px");
            }
            if(carte_selct == "carte-2"){
                $(".iphones").css("left","-304px");
            }
            if(carte_selct == "carte-3"){
                $(".iphones").css("left","-608px");
            }
        }
    })
    
})