
import fs from 'fs';
import path from 'path';
import { createCanvas, loadImage } from 'canvas';

export const POST= async({request})=>{
  // const Body =await request.json();
  let formData = await request.formData();
  console.log(formData);
  const title = formData.get('title');
  const name = formData.get('name');
  const file = formData.get('file');
  const outputFormat = formData.get('outputFormat');
 
// Load clipart based on the selected event
    const clipartPath = path.resolve(`./src/lib/clips/${title}.png`);
    const clipartImage = await loadImage(clipartPath);

    const imageBuffer = await file.arrayBuffer();
    const backgroundImage = await loadImage(Buffer.from(imageBuffer));

    // Create a canvas for image manipulation
    const canvas = createCanvas(backgroundImage.width, backgroundImage.height);
    const ctx = canvas.getContext('2d');

    // Draw background image
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // Draw clipart image
    ctx.drawImage(clipartImage, 0, 0, canvas.width, canvas.height);

    // Add name text
    ctx.fillStyle = 'white'; // Set text color
    ctx.font = '30px lato'; // Set font and size
    ctx.fillText(name, 50, 50); // Adjust xPosition and yPosition
    ctx.fillText(title, 25, 25); // Adjust xPosition and yPosition


    // Save the final image
    const outputPath = `./static/${title}.${outputFormat}`;
    const writeStream = fs.createWriteStream(outputPath);
    const stream = canvas.createJPEGStream(); // Use createJPEGStream() for JPEG
    stream.pipe(writeStream);

  return new Response(JSON.stringify({body:{filePath: `${title}.${outputFormat}`}},{message:"sucess"},{status:200}))
}

  //   return {
  //     status: 200,
  //     body: {
  //       filePath: `/generated/${title}_${name}.${outputFormat}`
  //     },
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   };
  // } catch (error) {
  //   return {
  //     status: 501,
  //     body: {
  //       error: 'An error occurred'
  //     },
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   };
  // }
