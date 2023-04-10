import { create } from "../../../data";

export async function isValidAssetValues(assetType, values, addNewError){
    switch(assetType){
        case 'AI Art':
            if(!values["model"] || values["model"] == "-- Choose AI Model --") return addNewError("Select the model you want to use");
            if(!values["prompt"]) return addNewError("Enter a prompt to generate an image");
            if(!values["size"]) return addNewError("Select the size of the model");
            return true
        break;
        default: 
           return false
    }
}
