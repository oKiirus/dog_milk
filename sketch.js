var ar = [100]

var a = []


var yaa = 100

var xaa = 50

function preload(){
  
 
}

function setup() {
  createCanvas(800,400);

  feed = createButton("feed dog")
  feed.position(200, 30)
  feed.mousePressed(feedD) 
  
  feed = createButton("add food")
  feed.position(200, 60)
  feed.mousePressed(addF) 
}

function draw() {
  background("brown");  
  
  

  for(let i = 0; i < a.length; i++){
    
    a[i].display()
    }


  textSize(30)
  fill("black")
  text("dog", 600, 200)


}

function addF(){
  
  if(ar.length % 10 === 0){
    xaa = 50

  }
  if(ar.length % 10 === 0){
    yaa = yaa + 50
  }
  a.push(new Milk(xaa, yaa))

  xaa += 20

  
  

  ar.push(yaa)

  

}

function feedD(){

  a.pop()
  xaa -= 20
  
}

class Milk {
    
  constructor(x, y){
    this.x = x
    this.y = y
    this.r = 30

    this.image = loadImage("Milk.png")
    
  }


display(){
  
image(this.image, this.x, this.y , this.r, this.r)
}
}

