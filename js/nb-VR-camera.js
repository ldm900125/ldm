
//鼠标点击小图切换大图
$("#icon-list").on("mouseover","li",function(){
    $(this).addClass("selected")
           .siblings()
            .removeClass("selected");
    var src=$(this)
            .children("img")
            .attr("src");
    $("#mImg").attr("src",src);
});

//鼠标进入和移出中图片时
var $mask=$("#mask");
var $largeDiv=$("#large-div");
var $superMask=$("#super-mask");
var MSIZE=200;
$superMask.mouseover(function(){
    $mask.show();
    $largeDiv.show();
    $largeDiv.style('backgroundImage','img/camera_big1.jpg')
});

$superMask.mouseout(function(){
    $mask.hide();
    $largeDiv.hide();
});

//鼠标在中图片中图片时

$superMask.mousemove(function(e){
    //获得鼠标相对于父元素的位置
    var x=e.offsetX;
    var y=e.offsetY;
    var top=x-MSIZE/2;
    var left=y-MSIZE/2;
    $mask.css('top',top+"px");
    $mask.css('left',left+"px");
    if(top<0){top=0}
    if(left<0){left=0}
});
