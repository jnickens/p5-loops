function setup(){
    createCanvas(600,400);
    background(0);
}


function draw(){
    strokeWeight(4);
    stroke(255);
    
    var x = 0;
    
    while(x<width){
    
    fill(56,09,89);
    ellipse(300,   x,  25, 25);
     x = x + 50;
    }
    
    for(var x = 0; x < 650; x = x + 50){
        fill(255,0,200);
        ellipse(200, x , 25 , 25);
        
        function mousePressed() {
         r = random(255);
         g = random(255);
      b = random(255);
  }

    }
    
    

}