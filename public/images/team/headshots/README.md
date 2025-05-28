# Creating Player Headshots

For the top scorers table to display proper player headshots, you need to create cropped versions of player images that focus on the player's face.

## How to Create Proper Headshots:

1. Open the original player image in an image editing software like Photoshop, GIMP, or even Preview on macOS.

2. Crop the image to focus tightly on the player's face.

3. Make sure the image is square (same width and height).

4. Save the cropped image in the following directory: `public/images/team/headshots/` with the following naming convention: `playername_headshot.png`

   For example:
   - `batata_headshot.png`
   - `neno_headshot.png`
   - etc.

5. The website will automatically use these headshot images in the top scorers table.

## Important Notes:

- The headshot images should be square and show only the player's face
- If you don't create a custom headshot, the system will try to use the full-body player image
- For players with accented characters, use the non-accented version in the filename (e.g., "ze_eduardo_headshot.png" for "Zé Eduardo")

## Using the Script:

You can also run the script to automatically create headshots (requires ImageMagick to be installed):

```
node scripts/generate_headshots.js
```

However, manually cropping will give better results since you can precisely position the crop around the player's face.
