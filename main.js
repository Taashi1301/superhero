var canvas= new fabric.Canvas('myCanvas');
blockwidth=30;
blockheight=30;
playerX=50;
playerY=50;
player_image="";
block_image="";

function player_update(){
    fabric.Image.fromURL("darth_vader.png", function(Img){
        player_image=Img;
        player_image.scaleToWidth(140);
        player_image.scaleToHeight(160);
        player_image.set({
            top:playerY,
            left:playerX
        });
        canvas.add(player_image);
    }); 
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image=Img;
        block_image.scaleToWidth(blockwidth);
        block_image.scaleToHeight(blockheight);
        block_image.set({
            top:playerY,
            left:playerX
        });
        canvas.add(block_image);
    })
}
window.addEventListener("keydown", My_keydown);
function My_keydown(e){
    keynumber=e.keyCode;
    if (e.shiftKey==true && keynumber=='80'){
        console.log("P and Shift were pressed together.")
        blockwidth=blockwidth+10;
        blockheight=blockheight+10;
        document.getElementById("widthspan").innerHTML=blockwidth;
        document.getElementById("heightspan").innerHTML=blockheight;
    }
    if (e.shiftKey==true && keynumber=='77'){
        console.log("M and Shift were pressed together.")
        blockwidth=blockwidth-10;
        blockheight=blockheight-10;
        document.getElementById("widthspan").innerHTML=blockwidth;
        document.getElementById("heightspan").innerHTML=blockheight;
    }
    if (keynumber=="70"){
        new_image("ironman_face.png");
        console.log("F");
    }
    if (keynumber=="66"){
        new_image("spiderman_body.png")
        console.log("B")
    }
    if (keynumber=="76"){
        new_image("hulk_legs.png")
        console.log("L")
    }
    if (keynumber=="82"){
        new_image("thor_right_hand.png");
        console.log("R")
    }
    if (keynumber=="72"){
        new_image("captain_america_left_hand.png");
        console.log("H");
    }
    if (keynumber=="38"){
        up();
        console.log("UP")
    }
    if (keynumber=="40"){
        down();
        console.log("DOWN")
    }
    if (keynumber=="37"){
        left();
        console.log("LEFT")
    }
    if (keynumber=="39"){
        right();
        console.log("RIGHT")
    }
}
function up(){
    if (playerY>=0){
        playerY=playerY-blockheight;
        console.log("Block height= "+blockheight);
        console.log("When up arrow is pressed, Y= "+playerY+" ,X= "+playerX);
        canvas.remove(player_image);
        player_update();
    }
}
function down(){
    if (playerY<=600){
        playerY=playerY+blockheight;
        console.log("Block height= "+blockheight);
        console.log("When down arrow is pressed, Y= "+playerY+" ,X= "+playerX);
        canvas.remove(player_image);
        player_update();
    }
}
function left(){
    if (playerX>=0){
        playerX=playerX-blockheight;
        console.log("Block height= "+blockheight);
        console.log("When left arrow is pressed, Y= "+playerY+" ,X= "+playerX);
        canvas.remove(player_image);
        player_update();
    }
}
function right(){
    if (playerX<=800){
        playerX=playerX+blockheight;
        console.log("Block height= "+blockheight);
        console.log("When right arrow is pressed, Y= "+playerY+" ,X= "+playerX);
        canvas.remove(player_image);
        player_update();
    }
}