/*广告图片数组*/
var images=[
    "img/slider/h-power-bg.jpg",
    "img/slider/h-jingying-bg.jpg",
    "img/slider/h-mobileday-bg.jpg",
    "img/slider/h-prague2-bg.jpg"
];

var $slider=$('#slider');
var $ulImgs=$('#img');
var $index=$('#index');
var liWidth=parseFloat($slider.css("width"));

var str="<li><img src="+images.join("></li><li><img src=")+"></li>";
str+="<li><img src="+images[0]+"></li>";
$ulImgs.html(str);
$ulImgs.css("width",liWidth*(images.length+1));
for(var i=0;i<images.length;i++){
    $index.append($('<li></li>'))
}
var j=0;
var wait=2000;
var speed=2000;
function move(){
    setTimeout(e=>{
            j++;
            $ulImgs.animate(
                {left:-liWidth*j},
                speed,
                ()=>{
                    if(j==images.length){
                        j=0;
                        $ulImgs.css("left","");
                    }
                    move();
                }
            )},
        wait);
}
move();


