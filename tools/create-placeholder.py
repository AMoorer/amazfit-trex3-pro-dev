#!/usr/bin/env python3
"""
Create a placeholder image for the photo gallery
"""

from PIL import Image, ImageDraw, ImageFont

TARGET_SIZE = (360, 360)
OUTPUT_FILE = "../photo-gallery/assets/images/placeholder.png"

def create_placeholder():
    """Create a simple placeholder image"""
    # Create dark gray background
    img = Image.new('RGB', TARGET_SIZE, (30, 30, 30))
    draw = ImageDraw.Draw(img)
    
    # Draw a simple icon/text
    # Calculate center
    center_x = TARGET_SIZE[0] // 2
    center_y = TARGET_SIZE[1] // 2
    
    # Draw a simple image icon (rectangle with a circle)
    icon_size = 120
    left = center_x - icon_size // 2
    top = center_y - icon_size // 2
    right = center_x + icon_size // 2
    bottom = center_y + icon_size // 2
    
    # Draw outer rectangle
    draw.rectangle([left, top, right, bottom], outline=(100, 100, 100), width=4)
    
    # Draw circle in the middle (sun/moon)
    circle_radius = 20
    draw.ellipse(
        [center_x - circle_radius, center_y - 30 - circle_radius,
         center_x + circle_radius, center_y - 30 + circle_radius],
        fill=(100, 100, 100)
    )
    
    # Draw mountains
    draw.polygon(
        [(left + 20, bottom - 20), (left + 50, bottom - 60), (left + 80, bottom - 20)],
        fill=(80, 80, 80)
    )
    draw.polygon(
        [(right - 80, bottom - 20), (right - 50, bottom - 50), (right - 20, bottom - 20)],
        fill=(80, 80, 80)
    )
    
    # Save the image
    import os
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    img.save(OUTPUT_FILE, 'PNG')
    print(f"Placeholder image created: {OUTPUT_FILE}")

if __name__ == "__main__":
    create_placeholder()
