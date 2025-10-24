#!/usr/bin/env python3
"""
Create sample test images for the Photo Gallery app
"""

from PIL import Image, ImageDraw, ImageFont
import os

OUTPUT_DIR = r"C:\Users\andym\Pictures\WatchPhotos"
NUM_IMAGES = 5
COLORS = [
    (255, 99, 71),   # Tomato
    (70, 130, 180),  # Steel Blue
    (60, 179, 113),  # Medium Sea Green
    (255, 165, 0),   # Orange
    (147, 112, 219)  # Medium Purple
]

def create_test_image(number, color):
    """Create a simple test image with a number"""
    img = Image.new('RGB', (800, 800), color)
    draw = ImageDraw.Draw(img)
    
    # Try to use a default font
    try:
        font = ImageFont.truetype("arial.ttf", 200)
    except:
        font = ImageFont.load_default()
    
    # Draw the number
    text = str(number + 1)
    
    # Get text bounding box for centering
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (800 - text_width) // 2
    y = (800 - text_height) // 2 - 50
    
    # Draw white outline
    outline_width = 5
    for adj_x in range(-outline_width, outline_width+1):
        for adj_y in range(-outline_width, outline_width+1):
            draw.text((x+adj_x, y+adj_y), text, font=font, fill=(255, 255, 255))
    
    # Draw the number
    draw.text((x, y), text, font=font, fill=(0, 0, 0))
    
    # Add label
    label = f"Test Image {number + 1}"
    try:
        label_font = ImageFont.truetype("arial.ttf", 60)
    except:
        label_font = font
    
    bbox = draw.textbbox((0, 0), label, font=label_font)
    text_width = bbox[2] - bbox[0]
    label_x = (800 - text_width) // 2
    
    draw.text((label_x, 600), label, font=label_font, fill=(255, 255, 255))
    
    # Save
    filename = os.path.join(OUTPUT_DIR, f"test_image_{number + 1}.jpg")
    img.save(filename, 'JPEG', quality=95)
    print(f"Created: {filename}")

def main():
    print("Creating test images for Photo Gallery app...")
    print(f"Output directory: {OUTPUT_DIR}")
    print()
    
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    for i in range(NUM_IMAGES):
        create_test_image(i, COLORS[i % len(COLORS)])
    
    print()
    print(f"[OK] Created {NUM_IMAGES} test images")
    print()
    print("Next step: Run the prepare-images script:")
    print(f'  .\\tools\\prepare-images.bat "{OUTPUT_DIR}"')

if __name__ == "__main__":
    main()
