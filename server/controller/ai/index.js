//Utils
const ErrorResponse = require('../../utils/errorResponse');

// Middleware
const asyncHandler = require('../../middleware/async');
const PythonShell = require('python-shell');

//@desc get all assets
//route GET /api/v1/assets
//@access PRIVATE
exports.hands = asyncHandler(async (req, res, next) => {

        var options = {
          args:
          [
            req.query.funds, // starting funds
            req.query.size, // (initial) wager size
            req.query.count, // wager count — number of wagers per sim
            req.query.sims // number of simulations
          ]
        }

    PythonShell.run('../../../../api/index.py', options, function (err, data) {
        if (err) res.send(err);
        res.send(data.toString())
      });

      res.status(200).json({  content: "Hands"})

});


//@desc create single asset
//route POST /api/v1/assets
//@access PRIVATE
exports.pipes = asyncHandler(async (req, res, next) => {
    //Add User to body 
    req.body.user = req.user.id;
 
    console.log('Create Asset Body ----> ', req.body )
 
    //If user is not admin they can only add one Asset
    if(req.user.role === 'system'){
        return next(new ErrorResponse(`System users are not allowed to publish assets`, 400))
    }
 
   res.status(200).json({ success: true, content: " Pipe " })
 
 });
//@desc generate AI Art
//route POST /api/v1/assets/:id/ai/art
//@access PRIVATE
exports.generateArt = asyncHandler(async (req, res, next) => {
    const prompt = req.body.prompt;
  res.status(200).json({ success: true, data: prompt })
});




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

