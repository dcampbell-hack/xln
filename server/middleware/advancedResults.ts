import { Request, Response, NextFunction } from 'express';
import { AdvanceResults, ReqBody, ReqParams, ReqQuery, ResBody } from '../type/definition.ts'
import { Types } from 'mongoose';
import { String, Union } from 'ts-toolbelt'; 

const advancedResults = (model: any, populate: { path: string, select: string}) => async (req: Request<ReqBody, ReqParams, ReqQuery>, res:  AdvanceResults, next: NextFunction) => {
    
    let query;

    //Copy req.query 
    const reqQuery = { ...req.query}
    const select: String = req.query.select as String
    const sort: String = req.query.sort as String
    const reqPage: string = req.query.page as string
    const reqLimit: string = req.query.limit as string
    
    //Fields to exclude 
    const removeFields = ['select', 'sort', 'page', 'limit'];
    
    //Loop over removeFields and delete from reqQuery 
    removeFields.forEach(param => delete reqQuery[param])
  // Create query string
  let queryStr = JSON.stringify(reqQuery)

  // Create operator ($qt, $gte, etc.)
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

  // Finding resource
  query = model.find(JSON.parse(queryStr))

  //Select Fields 
if(req.query.select){
    const fields: String = select.split(',').join(' ');
    query = query.select(fields)
}

//Sort

if(req.query.sort){
    const sortBy = sort.split(',').join(' ');
    query = query.sort(sortBy)
} else {
    query = query.sort('-createdAt')
}

//Pagination
const page: number = parseInt(reqPage, 10) || 1;
const limit: number = parseInt(reqLimit, 10) || 1;
const startIndex = (page-1) * limit;
const endIndex = page * limit;
const total = await model.countDocuments();

query = query.skip(startIndex).limit(limit);
if(populate){
    if(populate.path){
      const values = populate.path.split(', ')
      values.forEach( val => query.populate(val) )
    } else {
    query = query.populate(populate)
    }
}

//Executing query 
const results = await query;

// Pagination query 
const pagination: any = {};

if(endIndex < total){
    pagination.next = {
        page: page + 1,
        limit
    }
}

if(startIndex > 0){
    pagination.prev = {
        page: page - 1,
        limit
    }
}

res.advancedResults = {
    success: true, 
    count: results.length,
    pagination,
    data: results
}

next();
}

export default advancedResults;
