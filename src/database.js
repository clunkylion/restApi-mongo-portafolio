import MongoClient from 'mongodb';
export async function connect() {
    try {
        //constructor cliente db
        const client = await MongoClient.connect('mongodb://localhost:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = client.db('restapi-portafolio');
        console.log('DB is connected in Mongo');
        return db;
    } catch (error) {
        console.log(error);
    }
    
}
