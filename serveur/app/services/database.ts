import * as mongo from 'mongodb';
import * as assert from 'assert';

export class Database
{
    private db : mongo.Db;
    constructor(url : string)
    {
       mongo.MongoClient.connect(url, (err, db) =>{
            this.db = db;
       });
    }

    public getDb() : mongo.Db { return this.db; }
}