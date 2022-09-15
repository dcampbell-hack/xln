//Utils
const ErrorResponse = require('../../utils/errorResponse');

// Middleware
const asyncHandler = require('../../middleware/async');

// Machine Learning
// const brain = require('brain.js');
// const network = new brain.NeuralNetwork();


//@desc Smart Learning
//@route GET /api/v1/blockchain/get-contract-address 
//@access Public 
exports.smartLearning = asyncHandler(async (req, res, next ) => {

    // network.train([
    //     { input: [0,0,0], output: [0]},
    //     { input: [0,0,1], output: [0]},
    //     { input: [0,1,1], output: [0]},
    //     { input: [1,0,1], output: [1]},
    //     { input: [1,1,1], output: [1]}
    // ])

    // const output = network.run([1,0,0]);

     res.json(200).json({ success: true, result: 'output' })

});

