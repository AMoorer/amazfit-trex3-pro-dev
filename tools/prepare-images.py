#!/usr/bin/env python3
"""
Image Preparation Tool for Amazfit Trex 3 Pro Photo Gallery
Resizes images to 360x360 pixels and converts them to PNG format
"""

import os
import sys
from pathlib import Path
from PIL import Image

# Configuration
TARGET_SIZE = (360, 360)
MAX_IMAGES = 20
OUTPUT_DIR = "../photo-gallery/assets/images"
SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.bmp', '.gif', '.webp']

def create_output_directory():
    """Create the output directory if it doesn't exist"""
    output_path = Path(OUTPUT_DIR)
    output_path.mkdir(parents=True, exist_ok=True)
    return output_path

def resize_image(input_path, output_path, index):
    """
    Resize and convert an image to the target size
    
    Args:
        input_path: Path to the input image
        output_path: Directory to save the processed image
        index: Image index (0-19)
    """
    try:
        # Open the image
        img = Image.open(input_path)
        
        # Convert RGBA to RGB if necessary (for transparency)
        if img.mode == 'RGBA':
            # Create a white background
            background = Image.new('RGB', img.size, (255, 255, 255))
            background.paste(img, mask=img.split()[3])  # 3 is the alpha channel
            img = background
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Calculate aspect ratio and resize
        # We'll use thumbnail to maintain aspect ratio, then pad if needed
        img.thumbnail(TARGET_SIZE, Image.Resampling.LANCZOS)
        
        # Create a new image with the target size and paste the resized image
        new_img = Image.new('RGB', TARGET_SIZE, (0, 0, 0))
        
        # Calculate position to center the image
        x = (TARGET_SIZE[0] - img.size[0]) // 2
        y = (TARGET_SIZE[1] - img.size[1]) // 2
        
        new_img.paste(img, (x, y))
        
        # Save the image
        output_file = output_path / f"photo_{index}.png"
        new_img.save(output_file, 'PNG', optimize=True)
        
        print(f"✓ Processed: {input_path.name} -> photo_{index}.png")
        return True
        
    except Exception as e:
        print(f"✗ Error processing {input_path.name}: {str(e)}")
        return False

def create_placeholder(output_path):
    """Create a placeholder image for empty slots"""
    placeholder = Image.new('RGB', TARGET_SIZE, (30, 30, 30))
    
    # You could add text or a simple design here
    placeholder_file = output_path / "placeholder.png"
    placeholder.save(placeholder_file, 'PNG')
    print(f"✓ Created placeholder image")

def main():
    print("=" * 60)
    print("Amazfit Trex 3 Pro - Photo Gallery Image Preparation Tool")
    print("=" * 60)
    print(f"Target size: {TARGET_SIZE[0]}x{TARGET_SIZE[1]} pixels")
    print(f"Maximum images: {MAX_IMAGES}")
    print()
    
    # Check if input directory argument is provided
    if len(sys.argv) < 2:
        print("Usage: python prepare-images.py <input_directory>")
        print()
        print("Example: python prepare-images.py C:/Users/YourName/Pictures/WatchPhotos")
        sys.exit(1)
    
    input_dir = Path(sys.argv[1])
    
    # Validate input directory
    if not input_dir.exists():
        print(f"Error: Input directory '{input_dir}' does not exist")
        sys.exit(1)
    
    if not input_dir.is_dir():
        print(f"Error: '{input_dir}' is not a directory")
        sys.exit(1)
    
    # Create output directory
    output_path = create_output_directory()
    print(f"Output directory: {output_path.absolute()}")
    print()
    
    # Get all supported image files from input directory
    image_files = []
    for ext in SUPPORTED_FORMATS:
        image_files.extend(input_dir.glob(f"*{ext}"))
        image_files.extend(input_dir.glob(f"*{ext.upper()}"))
    
    # Sort files by name
    image_files = sorted(set(image_files))
    
    if not image_files:
        print(f"No supported image files found in {input_dir}")
        print(f"Supported formats: {', '.join(SUPPORTED_FORMATS)}")
        sys.exit(1)
    
    # Limit to MAX_IMAGES
    if len(image_files) > MAX_IMAGES:
        print(f"Warning: Found {len(image_files)} images, limiting to {MAX_IMAGES}")
        image_files = image_files[:MAX_IMAGES]
    
    print(f"Processing {len(image_files)} images...")
    print()
    
    # Process each image
    success_count = 0
    for index, image_file in enumerate(image_files):
        if resize_image(image_file, output_path, index):
            success_count += 1
    
    # Create placeholder image
    create_placeholder(output_path)
    
    print()
    print("=" * 60)
    print(f"Processing complete!")
    print(f"Successfully processed: {success_count}/{len(image_files)} images")
    print(f"Images saved to: {output_path.absolute()}")
    print()
    print("Next steps:")
    print("1. Copy the images to your Zepp OS project")
    print("2. Build and deploy the app to your watch")
    print("=" * 60)

if __name__ == "__main__":
    main()
