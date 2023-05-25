import { Field } from '../type/utils.ts';
import ErrorResponse from '../utils/errorResponse.ts';
import Category from '../model/Category.ts';
import { formatField } from './formatField.js';
import _ from 'lodash';


 
export const checkModelForDuplicate = async (model, value) => {

try{

    async function createField(value){
        await model.create(value);
    }

    const fieldArr = await model.find();

    const newField: Field[]  = [];
    let filter;
 
    let valueArr;
    valueArr = formatField(value)
    valueArr.map((val) => newField.push({ name: val}))  

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
