const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');
const socket = require("socket.io");
const errorHandler = require('./server/middleware/error');
const connectDB = require('./server/config/db');

const spawn = require('child_process').spawn;
const pythonEmailer = spawn('python', ['./python/email.py']);
const pythonIndex = spawn('python', ['./python/index.py']);

//Load env 
dotenv.config({ path: './server/config/config.env'});
connectDB();

const app = express();
const PORT = process.env.PORT;

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//File upload 
app.use(fileupload());

// Sanitize Data 
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent Cross Site Scripting 
app.use(xss());

// Prevent http polution 
app.use(hpp());

//Enable CORS 
app.use(cors());

//Rate limiting 
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, 
    max: 100
})

app.use(errorHandler);


app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'client/public')));

const User = require('./server/routes/user');
const Wallet = require('./server/routes/wallet');
const Conditional = require('./server/routes/asset/conditional');
const Auth = require('./server/routes/auth')
const AI = require('./server/routes/asset/ai')

const XLN = require('./server/routes/blockchain/')
const Market = require('./server/routes/blockchain/market')
const NFT = require('./server/routes/blockchain/nft')
const ICO = require('./server/routes/blockchain/ico')
const Token = require('./server/routes/blockchain/token')

const Asset = require('./server/routes/asset/asset')
const Share = require('./server/routes/asset/share')
const Offer = require('./server/routes/asset/offer')
const Review = require('./server/routes/asset/review')
const Comment = require('./server/routes/asset/comment')
const Transaction = require('./server/routes/asset/transaction')

//Mount routers
app.use('/api/v1/ai/', AI );
app.use('/api/v1/auth', Auth);
app.use('/api/v1/users', User);
app.use('/api/v1/conditional', Conditional);
app.use('/api/v1/assets', Asset);
app.use('/api/v1/shares', Share);
app.use('/api/v1/offers', Offer);
app.use('/api/v1/reviews', Review);
app.use('/api/v1/tx', Transaction);
app.use('/api/v1/comments', Comment);

// Blockchain Routes
app.use('/api/v1/blockchain/', XLN );
app.use('/api/v1/blockchain/token', Token );
app.use('/api/v1/blockchain/nft', NFT );
app.use('/api/v1/blockchain/ico', ICO );
app.use('/api/v1/blockchain/market', Market );




const server = app.listen(PORT, () => { 
    console.log(`Server is started on PORT: ${PORT}`)
    pythonIndex.stdout.on('data', data => {
        console.log(data.toString());
    })
});

const io = socket(server, {
    allowEIO3: true,
    cors: {credentials: true, origin: 'http://localhost:3000'},
});

io.on("connection", function (socket) {
    console.log(socket.id);
    socket.on("SEND_MESSAGE", function (data) {
        io.emit("MESSAGE", data);
    });
});

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit())
})