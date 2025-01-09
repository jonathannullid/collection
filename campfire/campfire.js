<div id="canvas-container"></div>

<script is:inline src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    
  const sketch = (p) => {
  let particles = [];
  let glowIntensity = 0;
  
  class Particle {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.vx = p.random(-1, 1);
      this.vy = p.random(-5, -2);
      this.alpha = 255;
      this.size = p.random(10, 20);
      this.color = p.random([
        p.color(255, 150, 0),    // Orange
        p.color(255, 100, 0),    // Deep orange
        p.color(255, 50, 0),     // Red-orange
        p.color(255, 200, 0)     // Yellow
      ]);
    }
    
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy *= 0.98;
      this.alpha -= 5;
      this.size *= 0.97;
    }
    
    draw() {
      p.noStroke();
      let c = this.color;
      c.setAlpha(this.alpha);
      p.fill(c);
      p.ellipse(this.x, this.y, this.size);
    }
  }

  p.setup = function() {
    p.createCanvas(400, 400);
    p.angleMode(p.DEGREES);
  }

  p.draw = function() {
    p.background(20, 15, 35);  // Dark blue-purple night sky
    
    // Add glow effect
    glowIntensity = p.sin(p.frameCount * 2) * 20;
    
    // Draw ground
    p.fill(50, 35, 20);  // Rich earth tone
    p.noStroke();
    p.rect(0, 300, p.width, 100);
    
    // Draw logs in a pyramid formation
    p.push();
    p.translate(p.width/2, 300);
    
    // Draw log shadows
    p.fill(30, 20, 10);
    drawLogs(5);
    
    // Draw actual logs
    p.fill(101, 67, 33);  // Rich brown
    p.stroke(60, 40, 20);
    p.strokeWeight(2);
    drawLogs(0);
    p.pop();
    
    // Create new particles
    if (p.frameCount % 2 === 0) {
      let particle = new Particle();
      particles.push(particle);
    }
    
    // Draw base flame glow
    p.push();
    p.translate(p.width/2, 280);
    let baseGlow = p.color(255, 100, 0, 50 + glowIntensity);
    p.fill(baseGlow);
    p.noStroke();
    p.ellipse(0, 0, 80 + glowIntensity, 60 + glowIntensity);
    p.pop();
    
    // Update and draw particles
    p.push();
    p.translate(p.width/2, 280);
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].draw();
      
      if (particles[i].alpha < 0) {
        particles.splice(i, 1);
      }
    }
    p.pop();
  }
  
  function drawLogs(yOffset) {
    // Bottom logs
    p.push();
    p.rotate(-30);
    p.rect(-60, yOffset, 120, 20, 5);
    p.pop();
    
    p.push();
    p.rotate(30);
    p.rect(-60, yOffset, 120, 20, 5);
    p.pop();
    
    // Top log
    p.push();
    p.translate(0, -15);
    p.rect(-60, yOffset, 120, 20, 5);
    p.pop();
  }
}

    new p5(sketch, "canvas-container");
  });
</script>