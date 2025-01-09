import p5 from "p5";

const sketch = (p) => {
    let lastX = 0;
    let lastY = 0;
    let speed = 0;

    p.setup = () => {
        // Match the canvas size to the full window size
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.parent('canvas-container'); // Attach canvas to a div container for control
        p.background(30);
    };

    p.draw = () => {
        const mouseSpeed = p.dist(p.mouseX, p.mouseY, lastX, lastY);
        speed = p.lerp(speed, mouseSpeed, 0.05); // Smooth transition between speeds

        if (speed > 50) {
            p.stroke(p.random(200, 255), p.random(50, 100), p.random(100, 255), 150);
            p.strokeWeight(p.random(1, 4));
            p.line(p.mouseX, p.mouseY, p.random(p.width), p.random(p.height));
            p.fill(p.random(255), p.random(255), p.random(255), 50);
            p.ellipse(p.mouseX, p.mouseY, p.random(10, 50));
        } else {
            p.stroke(100, 200, 255, 50);
            p.strokeWeight(1);
            p.noFill();
            p.ellipse(p.mouseX, p.mouseY, speed * 2);
        }

        lastX = p.mouseX;
        lastY = p.mouseY;
    };

    p.windowResized = () => {
        // Resize canvas dynamically when window resizes
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        p.background(30);
    };

    p.keyPressed = () => {
        if (p.key === "c" || p.key === "C") {
            p.background(30); // Clear the canvas
        }
    };
};

new p5(sketch);
