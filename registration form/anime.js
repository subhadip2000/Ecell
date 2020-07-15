const p=[];
var w = window.innerWidth;
var h = window.innerHeight;
function setup(){
    createCanvas(w,h);
    let len=Math.floor(innerWidth/15);
    let i;
    for(i=0;i<10;i++)
    {p.push(new particle1());
     p.push(new particle3());  
     p.push(new particle2()); 
    }
}
function draw1(){
    fill(196, 171, 59,127.5)
    rect(width/4, width/21, width/2, height/1.3,20)
}
function draw(){
     background(0,0,0);
     draw1();
     p.forEach(element => {
    {element.update();
     element.draw();}
     });
    
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

class particle1{
    constructor(){
    this.pos=createVector(random(width),random(height));
    this.size=0;
    this.trans=255
    }
    draw(){
        noStroke();
        fill(196, 171, 59,this.trans);
        ellipse(this.pos.x, this.pos.y, this.size);
    }
    update(){
       if(this.size<=127.5)
        {this.size=this.size+0.5;
         this.trans=this.trans-1;   
        }
        else{
    this.pos=createVector(random(width),random(height));
    this.size=10;
    this.trans=255
            
        }
    }
}
class particle2{
    constructor(){
    this.pos=createVector(random(width),random(height));
    this.size=0;
    this.trans=255
    }
    draw(){
        noStroke();
        fill(196, 171, 59,this.trans);
        ellipse(this.pos.x, this.pos.y, this.size);
    }
    update(){
       if(this.size<=255)
        {this.size=this.size+0.65;
         this.trans=this.trans-1.3;   
        }
        else{
    this.pos=createVector(random(width),random(height));
    this.size=10;
    this.trans=255
            
        }
    }
}
class particle3{
    constructor(){
    this.pos=createVector(random(width),random(height));
    this.size=0;
    this.trans=255
    }
    draw(){
        noStroke();
        fill(196, 171, 59,this.trans);
        ellipse(this.pos.x, this.pos.y, this.size);
    }
    update(){
       if(this.size<=255)
        {this.size=this.size+0.35;
         this.trans=this.trans-0.7;   
        }
        else{
    this.pos=createVector(random(width),random(height));
    this.size=10;
    this.trans=255
            
        }
    }
}