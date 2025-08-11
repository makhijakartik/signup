const express = require('express');
const cors = require('cors');
const { userRoute } = require('./routes/user_routes');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/user',userRoute);

async function main() {
    try {
        await mongoose.connect("mongodb+srv://makhijakartik05:XzKvsFqXC4jcVtl8@cluster0.dmupeb8.mongodb.net/fsd_db");
        const port = 3000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}

main();