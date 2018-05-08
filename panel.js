function panel(width,height,$parent){
    if(arguments.length<2){return false;}
    var $_element = $(document.createElement('div'));
    $_element.attr ({
       "class":"panel"
    });
     
    $_element.css({
        "width":width,
        "height":height,
        "position":"absolute",
        "top":"50%",
        "left":"50%",
        "margin_left":-width/2,
        "margin_top":-height/2,
       /* "z-index":"100"*/
    });
    if(typeof $parent=='undefined')
        {
            $parent=$(document.documentElement);
        }
    else if(!$parent)
        {
            return false;
        }
    $parent.append($_element);
}
    