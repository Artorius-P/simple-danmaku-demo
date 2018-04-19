function setColor() {
    var red = ('00' + Math.floor(Math.random()*256).toString(16)).slice(-2);
    var green = ('00' + Math.floor(Math.random()*256).toString(16)).slice(-2);
    var blue = ('00' + Math.floor(Math.random()*256).toString(16)).slice(-2);
    var colorNum = '#' + red + green + blue;
    return colorNum;
};


function move(){
    $("#contentbox div:not(:animated)").animate({
            right:"+=120%"
    }, 4000 + Math.random()*8000, function() {
            this.remove();		
    })
}


function creatDiv(text,settedcolor) {
    var top = 40 * Math.floor(Math.random()*9);
    var color = setColor();
    var box = ('<div style="position:absolute;right:0;top:' + top + 'px;box-sizing:border-box;height:30px;margin-bottom:10px;line-height:30px;color:'+ color +';font-size: 20px;font-weight:400;white-space:nowrap">' + text + '</div>'); // 可以用添加一个class不用行内样式  ("<div class=\"className\"</div>) 用转义符
    $("#contentbox").append(box);
    
}    

var danmakuPool = ["草泥马学习去","你tm的怎么还在玩","学习啊！","不学习的人没资格一起玩","学习使人快乐","学习，学习啊！"];

function timer() {
    var text = danmakuPool[Math.floor(Math.random()*danmakuPool.length)];
    if(danmakuPool.length === 0){
        return false;
    }
    creatDiv(text);
    move();
}

window.onload=function(){
    //清屏
    var shoot=document.getElementsByTagName('button')[0];
    var clear=document.querySelector(".clear");
    var contentbox=document.querySelector(".contentbox");
    clear.onclick=function(){
        contentbox.innerText="";
        danmakuPool = [];
    };
    shoot.onclick=function(){
        var text = document.getElementById('saysomething').value;
        danmakuPool.push(text);
        creatDiv(text);
        move();
    };
    $('#saysomething').bind('keypress',function(event){
        if(event.keyCode == "13")   
        {shoot.onclick();}
    });
    var fun = setInterval(timer,1500);
    setTimeout(function(){
        fun;
    },5000);
}