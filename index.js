import express from 'express';
import path from 'path';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import fileupload from 'express-fileupload';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';
import cors from 'cors';
import { Server} from "socket.io";
import { createServer } from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// import { spawn } from 'child_process';
// import pythonEmailer = spawn('python', ['./python/email.py'];
// import pythonIndex = spawn('python', ['./python/index.py'];

import errorHandler from './server/middleware/error.js'
import connectDB from "./server/config/db.js";

import User from './server/routes/user.js';
import Wallet from './server/routes/wallet.js';
import Conditional from './server/routes/asset/conditional.js';
import Auth from './server/routes/auth.js';
import AI from './server/routes/asset/ai.js';

import XLN from './server/routes/blockchain/index.js';
import Market from './server/routes/blockchain/market.js';
import NFT from './server/routes/blockchain/nft.js';
import ICO from './server/routes/blockchain/ico.js';
import Token from './server/routes/blockchain/token.js';

import Asset from './server/routes/asset/asset.js';
import Share from './server/routes/asset/share.js';
import Offer from './server/routes/asset/offer.js';
import Review from './server/routes/asset/review.js';
import Comment from './server/routes/asset/comment.js';
import Transaction from './server/routes/asset/transaction.js';

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
    // pythonIndex.stdout.on('data', data => {
    //     console.log(data.toString());
    // })
});

const io = new Server(server, {
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