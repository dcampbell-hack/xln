import { charLimiter, removeSpace } from "../text/transform";

export const setAssetName = (values) => {
    switch(values.assetType){
        case "AI Art":
            console.log("Form AI", values )
            let newName;
            if(values.model || values.prompt || values.size ){
                newName = values.model + "_" + charLimiter(10, values.prompt) + "_" + values.size
            }
            console.log("SetAssetName", newName)
            return removeSpace(newName)
        default: 
           return {}
    }
}