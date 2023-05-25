import express, { Express } from 'express';
import path from 'path';
import morgan from 'morgan';
import colors from 'colors';
import fileupload from 'express-fileupload';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';
import { Server} from "socket.io";
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// import { spawn } from 'child_process';
// import pythonEmailer = spawn('python', ['./python/email.py'];
// import pythonIndex = spawn('python', ['./python/index.py'];

import errorHandler from './server/middleware/error.ts'
import connectDB from "./server/config/db.ts";

import User from './server/routes/user/user.ts';
import Wallet from './server/routes/wallet/wallet.ts';
import Conditional from './server/routes/asset/conditional.ts';
import Auth from './server/routes/user/auth.ts';
import AI from './server/routes/asset/ai.ts';

import XLN from './server/routes/blockchain/index.ts';
import Market from './server/routes/blockchain/market.ts';
import NFT from './server/routes/blockchain/nft.ts';
import ICO from './server/routes/blockchain/ico.ts';
import Token from './server/routes/blockchain/token.ts';

import Asset from './server/routes/asset/asset.ts';
import Share from './server/routes/asset/share.ts';
import Offer from './server/routes/asset/offer.ts';
import Review from './server/routes/asset/review.ts';
import Comment from './server/routes/asset/comment.ts';
import Transaction from './server/routes/asset/transaction.ts';

//Load env 
dotenv.config({ path: './server/config/config.env'});
connectDB();

const app: Express = express();
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

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }))

//Rate limiting 
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, 
    max: 100
})

app.use(errorHandler);

app.use(express.json());
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
    // console.log(`Error: ${err?.message}`);
    server.close(() => process.exit())
})