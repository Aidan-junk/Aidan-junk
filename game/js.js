
var ObjImg=null;
var enemyO=null;
var x = 300;
var y = 10;
var xBool;
var xPicId = "newXPic";
var enemyX = 50;
var enemyY = 200; 
var speedOfCircle = 5;
var speedOfDude = 10;
var run = false;
var eventCount = 0;
var firstX=false
var xCount = 0;
var newX;
var newY;
var DIV_ONE = document.getElementById("div1");
var windowWidth = document.documentElement.clientWidth;

var windowHeight = document.documentElement.clientHeight;


function dude()
{
    document.getElementById("dudePosX").innerHTML=x;
    document.getElementById("dudePosY").innerHTML=y;
}
function Op(){
    document.getElementById("enY").innerHTML=enemyY;
    document.getElementById("enX").innerHTML=enemyX;
}
function init()
{
    ObjImg=document.getElementById("img1");
    ObjImg.style.position ='fixed';

    ObjImg.style.left= x + 'px';
    ObjImg.style.top= y + 'px';

    enemyO = document.getElementById("Opic");
    enemyO.style.position ='fixed';

}
function Move(e)
{
    windowWidth = document.documentElement.clientWidth;
    eventCount++;
    
    var key_code=e.which||e.keyCode;
    switch(key_code)
    {
        case 37: //left
            moveLeft(); 
            break;
        case 38: //up
            moveUp();

            break;
        case 39: //right
            moveRight();
            break;
        case 40: //down
            moveDown();
            break;
        case 88: //x
            Pocket();
            break;
        case 90: //c
           run= true;
            break;
    }
    //sound();        // stupid walking sound
    circleAi();     // logic for enemy A.I
    change()        //
    bigbutts();     //
    Op();           //
    dude();         // updates position
    local();       // see's if dude has gotten the x
    xdisplay();     // makes the x not visable if dude has gotten it  
    emptypockets(); // 

    if(xBool==true){
        SpawnNewX();
    }
    localTwo()
    XboolReSet()        
    
}

function change(){
    if(eventCount % 2 == 0 ){
        document.getElementById("img1").src="output-onlinepngtools (1).png";
    }
    else{
        document.getElementById("img1").src="dude-good.png";
    }   
}
function moveLeft()
{
    if(x>10){
        ObjImg.style.left = parseInt(x)-speedOfDude+'px';
        x-=speedOfDude;  
    }
}
function moveUp()
{
    if(y>10){
        ObjImg.style.top = parseInt(y)-speedOfDude+'px';
        y-=speedOfDude;
    }
}
function moveRight()
{
    console.log(parseInt(windowWidth));
    if(x<parseInt(windowWidth)-59){
        ObjImg.style.left = parseInt(x)+speedOfDude+'px';
        x+=speedOfDude;
    }
}
function moveDown()
{
    if(y<windowHeight-135){
        ObjImg.style.top = parseInt(y)+speedOfDude+'px';
        y+=speedOfDude;
   }
}
function enMoveLeft(){
    if(enemyX>10){
        enemyO.style.left = parseInt(enemyX)-speedOfCircle+'px';
        enemyX-=speedOfCircle;
    }
}
function enMoveUp(){
    if(enemyY>10){
        enemyO.style.top = parseInt(enemyY)-speedOfCircle+'px';
        enemyY-=speedOfCircle;
    }
}
function enMoveRight(){
    if(enemyX<1495){
        enemyO.style.left = parseInt(enemyX)+speedOfCircle+'px';
        enemyX+=speedOfCircle;
    }
}
function enMoveDown(){
    if(enemyY<715){
        enemyO.style.top =  parseInt(enemyY)+speedOfCircle+'px';
        enemyY+=speedOfCircle;
    }
}
function local()                                                          // come back here 
{

    if((x>=470 && x<=530) && (y>=465 && y<=605)){
        xBool = true;
    }

    else{
        xBool =false;
    }


}
function localTwo(){
    if(x>=(newX-30) && x<=(newX+30)&& (y>=(newY-27) && y<=(newY+23))){
        xBool = true;
        xCount++;
        var thisX = document.getElementById("newXPic");
        thisX.remove();
        SpawnNewX();
    }
    else{
        xBool =false;
    }
}
function Pocket()
{
    var myDiv = document.getElementById("div1");

    if(myDiv.style.visibility == "visible"){
        myDiv.style.visibility = "hidden";
    }
    else{
        myDiv.style.visibility = "visible";
    }
} 
function emptypockets(){
    
        var thisDiv = document.getElementById("div1")
        var myPar = document.getElementById("p1");

        if(xBool == true){
            thisDiv.removeChild(myPar);
        }
}
function bigbutts()
{
    if(xBool == true)
    {
        var Xpic = document.createElement("img");
        var xpic = document.getElementById("X");
        var Pocketdiv = document.getElementById("div1");

        Xpic.setAttribute("src","X-good.png");
        Xpic.style.visibility="inherit";

        Xpic.style.top="0";
        Xpic.style.left="0";

        Pocketdiv.appendChild(Xpic);   
    }
}
function xdisplay(){
    if(xBool == true){
        document.getElementById("X").remove();
    }
}
function circleAi(){
    
    let distanceBetweenX = x-enemyX;
    let distanceBetweenY = y-enemyY;
    var moveTowards = false;
    const INTREVAL = 400;
    const NEG =0;

    if((Math.abs(distanceBetweenX)<=INTREVAL)||(Math.abs(distanceBetweenY)<=INTREVAL)){
        moveTowards = true;
    }
    else{
        moveTowards = false;
    }

    if(moveTowards==true){
        if(distanceBetweenX < NEG){
            enMoveLeft();
        }
        else{
            enMoveRight();
        }
        if(distanceBetweenY < NEG){
            enMoveUp();
        }
        else{
            enMoveDown();
        }
    }
    if((Math.abs(distanceBetweenX)<=40)&&((Math.abs(distanceBetweenY)<=30)))
    {
        GameOver();
    }
}
// shows game over div
function GameOver(){

    document.body.style.backgroundColor="red";
    document.getElementById("end").style.visibility="visible";
}
function sound(){
    var sounds = document.getElementById("audio1");
    sounds.play();
}
function SpawnNewX(){

    newX = Math.floor(Math.random() * 1485) + 1;
    newY = Math.floor(Math.random() * 620) + 1;

    var xPic = document.createElement("IMG");
    let div = document.getElementById("div2");

    xPic.setAttribute("src","x-good.png");
    xPic.setAttribute("id", xPicId)

    xPic.style.position = "fixed";

    xPic.style.left = parseInt(newX)+'px';
    xPic.style.top = parseInt(newY)+'px';

    div.appendChild(xPic);
}
function XboolReSet(){
    if(xBool==true){
        XBool=false;
    }    
}

window.onload=init;
