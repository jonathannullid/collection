# Emotion Face Generator

A Python script that generates abstract art representing contrasting emotions through visual elements. This project creates a unique image that splits the canvas into two emotional sides: depression and joy.

## Overview

The script uses the Python Imaging Library (PIL) to create an abstract face with:
- Left side: Depression represented by fragmented, jagged patterns in dark blues
- Right side: Joy represented by radiant bursts in bright, warm colors
- Central face features with contrasting eye expressions

## Requirements

- Python 3.x
- PIL (Pillow) library

## Installation

```bash
pip install Pillow
```

## Usage

Run the script to generate a new emotion face:

```bash
python generate.py
```

The script will:
1. Generate a 960x480 pixel image
2. Display the image
3. Save it as "emotion_face_art.png"

## Technical Details

- Canvas size: 960x480 pixels
- Depression side: Uses polygons with dark blue tones
- Joy side: Uses radiant circles with bright colors
- Eyes: Uniquely styled to represent each emotion
- Output format: PNG

## License

MIT License