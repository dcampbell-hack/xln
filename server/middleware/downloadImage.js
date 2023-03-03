const fs = require("fs");
const randomColor = require('randomcolor');

async function downloadImage(next, user, filePath){
    const getImage = await fetch(filePath);

    const blob = await getImage.blob();
    
    const arrayBuffer = await blob.arrayBuffer();

    const buffer = Buffer.from(arrayBuffer);

    const hex = randomColor()

    const fileName = `${user.username}_${hex.slice(1)}.png`
        
    await fs.writeFile(`client/uploads/${user.id}/asset/${fileName}`, buffer, (err) => console.log(err));
    return fileName;
}

module.exports = downloadImage;