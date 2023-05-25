import fs from "fs";
import randomColor from 'randomcolor';

async function downloadImage(next, user, file){

      const  getImage = await fetch(file.data);

       const blob = await getImage.blob();
        
       const arrayBuffer = await blob.arrayBuffer();
    
       const buffer = Buffer.from(arrayBuffer);


    console.log(file.type, buffer )

    const hex = randomColor()

    const fileName = `${user.username}_${hex.slice(1)}.png`
        
    await fs.writeFile(`client/uploads/${user.id}/asset/${fileName}`, buffer, (err) => console.log(err));
    return fileName;
}

export default downloadImage;