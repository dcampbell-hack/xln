import ErrorResponse from '../utils/errorResponse.js';
import Category from '../model/Category.js';
import { formatField } from './formatField.js';
import _ from 'lodash';
 
export const checkModelForDuplicate = async (model, value) => {

try{

    async function createField(value){
        console.log('Trigger....', value)
        await model.create(value);
    }

    const fieldArr = await model.find();

    const newField = [];
    let filter;
 
    let valueArr;
    valueArr = formatField(value)
    valueArr.map(value => newField.push({ name: value}))  

    fieldArr.map(field => {
        newField.forEach(({ name }, index ) => {
            if(field.name == name){
                newField.splice(index, index + 1)
            }
        })
    })

    newField.forEach( field => createField(field) );

    return newField;

} catch(err){
    return new ErrorResponse(err, 500)
}

}
