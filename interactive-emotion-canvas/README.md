# Interactive Emotional Canvas

An interactive canvas that creates dynamic visualizations based on mouse movement speed. Built with p5.js.

## Features

* **Speed-Based Visualization**
  * Fast movements (>50px) generate colorful bursts and random lines
  * Slow movements create calm, blue circular ripples
* **Responsive Canvas**: Automatically resizes to fit window dimensions
* **Controls**
  * Mouse movement creates the artwork
  * Press 'C' to clear the canvas

## Setup

1. Install dependencies:
   ```bash
   npm install p5
   ```
2. Add a container div to your HTML:
   ```bash
   import './canvas.js'
   ```

## Technical Notes

The canvas uses p5.js instance mode for better encapsulation. It tracks mouse movement speed using lerp for smooth transitions between states, creating either energetic or calm visual effects based on interaction speed.

## Configuration
* Background color: RGB(30, 30, 30)
* Speed threshold: 50 pixels per frame
* Transition smoothing: 0.05 lerp factor
