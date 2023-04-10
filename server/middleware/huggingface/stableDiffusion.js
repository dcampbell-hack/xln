const axios = require('axios')
const fs = require("fs");
const randomColor = require('randomcolor');

const stableDiffusion = async (next, asset, prompt ) => {

console.log("Stable Diff fuction -----", asset, prompt)

    const inputData = {
        inputs: prompt,
        options: {
            wait_for_model: true,
        },
    }
    
    const response = await axios({
        url: `https://api-inference.huggingface.co/models/${asset.model}`,
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.HUGGING_FACE_TOKEN}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(inputData),
        responseType: 'arraybuffer',
    })

    console.log({ response: typeof response })
    
    const mimeType = response.headers['content-type']

    console.log({ mimeType })
    
    const result = response.data

    console.log({ result })
    
    const base64data = Buffer.from(result).toString('base64')

    console.log({ base64data })
    
    // const buffer = `data:${mimeType};base64,` + base64data

    // console.log({ buffer })

    const hex = randomColor()

    const fileName = `${asset.username}_${hex.slice(1)}.png`
        
    await fs.writeFile(`client/uploads/${asset.userId}/asset/${fileName}`, base64data, 'base64', (err) => console.log(err));
    return fileName;
}


module.exports = stableDiffusion;