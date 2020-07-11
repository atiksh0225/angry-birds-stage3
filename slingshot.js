class Slingshot{
   constructor(bodyA, bodyB) {
   var opt = {
   bodyA:bodyA,
   bodyB:bodyB,
   stiffness: 0.04,
   length: 10    
   }
   this.sling = Constraint.create(opt);
   World.add(world,this.sling);
   }
   display() {
   var pointA = this.sling.bodyA.position;
   var pointB = this.sling.bodyB.position;
   strokeWeight(7);
   line(pointA.x, pointA.y, pointB.x, pointB.y)    
   }
} 