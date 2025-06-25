const mongoose = require('mongoose')

const connectToDB = async () => {
    try{
        await mongoose.connect(
            'mongodb+srv://harshsharmahs798:harshsharma123@cluster0.ua5ckdj.mongodb.net/'
        )
        console.log('mongodb is connected successfully!');
    }
    catch(error){
        console.error('Mongodb connection is failed',error);
        process.exit(1)
    }
};

module.exports = connectToDB