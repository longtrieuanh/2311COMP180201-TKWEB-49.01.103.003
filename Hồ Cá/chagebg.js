var bg = ['./image/img1.jpg','./image/img2.jpg','./image/img3.jpg']
document.querySelector("#bg1").addEventListener("click",function(){
    document.querySelector("#background_image img").src= bg[0];
})
document.querySelector("#bg2").addEventListener("click",function(){
    document.querySelector("#background_image img").src= bg[1];
})
document.querySelector("#bg3").addEventListener("click",function(){
    document.querySelector("#background_image img").src= bg[2];
})

var audio = ['./media/sound1.mp3','./media/sound2.mp3','./media/sound3.mp3']
document.querySelector("#ms1").addEventListener("click",function(){
    document.querySelector("#musiclist audio").src= audio[0];
    document.querySelector("#musiclist audio").play();
})
document.querySelector("#ms2").addEventListener("click",function(){
    document.querySelector("#musiclist audio").src= audio[1];
    document.querySelector("#musiclist audio").play();
})
document.querySelector("#ms3").addEventListener("click",function(){
    document.querySelector("#musiclist audio").src= audio[2];
    document.querySelector("#musiclist audio").play();


})


