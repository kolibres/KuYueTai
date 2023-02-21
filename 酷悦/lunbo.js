var index = 1;
function lunbo(){
    index ++;
    if( index > 2){
        index = 1;
    }
    var img = document.getElementById("lunbo1");
    img.src = "./img/lunbo"+index+".jpg";
}
    setInterval(lunbo,2000);