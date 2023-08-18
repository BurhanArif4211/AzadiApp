import fs from "fs";
import path from "path";
import { loadImage, createCanvas } from "canvas";
const POST = async ({ request }) => {
  let formData = await request.formData();
  console.log(formData);
  const title = formData.get("title");
  const name = formData.get("name");
  const file = formData.get("file");
  const outputFormat = formData.get("outputFormat");
  const clipartPath = path.resolve(`./src/lib/clips/${title}.png`);
  const clipartImage = await loadImage(clipartPath);
  const imageBuffer = await file.arrayBuffer();
  const backgroundImage = await loadImage(Buffer.from(imageBuffer));
  const canvas = createCanvas(backgroundImage.width, backgroundImage.height);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(clipartImage, 0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "30px lato";
  ctx.fillText(name, 50, 50);
  ctx.fillText(title, 25, 25);
  const savePromise = new Promise((resolve) => {
    const outputPath = `./src/lib/${title}.${outputFormat}`;
    const writeStream = fs.createWriteStream(outputPath);
    const stream = canvas.createJPEGStream();
    stream.pipe(writeStream);
    stream.on("end", () => {
      resolve(outputPath);
    });
  });
  const savedImagePath = await savePromise;
  return new Response(
    JSON.stringify({ body: { filePath: savedImagePath } }, { message: "success" }, { status: 200 })
  );
};
export {
  POST
};
