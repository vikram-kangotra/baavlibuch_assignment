import express from 'express';
import cors from 'cors';
import multer from 'multer';
import axios from 'axios';
import path from 'path';
import fs from 'fs';
import { URL } from 'url';

import Connection from './db/connection.js';
import User from './db/user.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const __dirname = new URL('.', import.meta.url).pathname;
const uploadDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, uploadDir);
    },
    filename: (_req, file, cb) => {
        const uniqueFilename = `${Date.now()}-${Math.round(Math.random() * 1E9)}-${file.originalname}`;
        cb(null, uniqueFilename); 
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('photo'), async (req, res) => {
    try {

        const connection = await Connection.findOne();
        if (!connection) {
            connection = new Connection();
        }
        connection.connectionCount += 1;
        await connection.save();

        console.log(`Connection count: ${connection.connectionCount}`);

        const { id, friendId } = req.body;

        const existingUser = await User.findOne({ id });
        if (existingUser) {
            console.log(`User ${id} already exists`);
            return res.status(409).send('User already exists');
        }

        const user = new User({ id, friendId });
        await user.save();

        const friend = await User.findOne({ id: friendId });
        if (friend) {
            friend.friendList.push(id);
            await friend.save();
        }

        const response = await axios.get(process.env.NGRAM_API_URL + '?string1=' + id + '&string2=' + friendId);

        return res.json({ message: 'Upload successful', similarity: response.data.similarity });
    } catch (e) {
        console.error('Error processing upload', e);
        return res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
    }
);
