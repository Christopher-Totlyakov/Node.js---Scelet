import mongoose from "mongoose";

async function initDatabase(){
    const dbUrl = '';
    const dbName = 'test_db';

    try {
        await mongoose.connect(dbUrl, { dbName });
        console.log('Successfully connected to database');
    } catch (error) {
        console.log('database connected failed');
        console.log(error.message);
    }
}

export default initDatabase;
