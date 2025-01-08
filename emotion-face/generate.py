from PIL import Image, ImageDraw
import random

WIDTH, HEIGHT = 960, 480

def generate_emotion_face():
    # Create a blank canvas
    img = Image.new("RGB", (WIDTH, HEIGHT), "black")
    draw = ImageDraw.Draw(img)

    # Depression: Fragmented, jagged patterns
    for _ in range(150):
        x1 = random.randint(0, WIDTH // 2)
        y1 = random.randint(0, HEIGHT)
        x2 = x1 + random.randint(20, 100)
        y2 = y1 + random.randint(20, 100)
        color = (random.randint(0, 50), random.randint(0, 50), random.randint(80, 150))
        draw.polygon([x1, y1, x2, y2, x1 + 10, y1 - 10], fill=color)

    # Joy: Radiant bursts
    for _ in range(100):
        cx = random.randint(WIDTH // 2, WIDTH)
        cy = random.randint(0, HEIGHT)
        radius = random.randint(20, 80)
        color = (random.randint(150, 255), random.randint(100, 255), random.randint(100, 255))
        for r in range(radius, 0, -10):  # Gradient effect
            draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=None, fill=color)

    # Face outline (Circle in the center)
    face_radius = min(WIDTH, HEIGHT) // 2 - 50  # Ensure it fits within the smaller dimension
    face_center = (WIDTH // 2, HEIGHT // 2)
    

    # Eyes (Circles)
    eye_radius = face_radius // 6
    left_eye_center = (face_center[0] - face_radius // 2, face_center[1] - face_radius // 3)
    right_eye_center = (face_center[0] + face_radius // 2, face_center[1] - face_radius // 3)

    # Left eye (Depression side)
    draw.ellipse(
        [left_eye_center[0] - eye_radius, left_eye_center[1] - eye_radius,
         left_eye_center[0] + eye_radius, left_eye_center[1] + eye_radius],
        fill=(50, 50, 100)
    )
    draw.line(
        [(left_eye_center[0], left_eye_center[1]), (left_eye_center[0], left_eye_center[1] + 20)],
        fill="white",
        width=2
    )

    # Right eye (Joy side)
    draw.ellipse(
        [right_eye_center[0] - eye_radius, right_eye_center[1] - eye_radius,
         right_eye_center[0] + eye_radius, right_eye_center[1] + eye_radius],
        fill=(200, 250, 100)
    )
    draw.arc(
        [right_eye_center[0] - eye_radius + 10, right_eye_center[1] - eye_radius + 10,
         right_eye_center[0] + eye_radius - 10, right_eye_center[1] + eye_radius - 10],
        start=0,
        end=180,
        fill="white",
        width=2
    )

    return img

art = generate_emotion_face()
art.show()
art.save("emotion_face_art.png")
