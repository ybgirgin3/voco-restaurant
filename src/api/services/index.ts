import {
  MongoClient,
  Collection,
  Db,
  InsertOneResult,
  UpdateResult,
  ObjectId,
  DeleteResult,
} from 'mongodb';
import { Menu } from '../../interfaces/Menu';
import { Restaurant } from '../../interfaces/Restaurant';
import { Order } from '../../interfaces/Order';

const dot = require('dotenv').config();

export class DbService {
  private db: Db;
  private collection: Collection;
  private _collection: string;

  constructor(_collection: string) {
    const uri = dot.parsed.MONGO_URI;
    const client = new MongoClient(uri);
    this._collection = _collection;

    client
      .connect()
      .then(() => {
        console.log('connected to mongo uri');
        this.db = client.db();
        this.collection = this.db.collection(this._collection);
      })
      .catch((error) => {
        console.error('error connecting to mongo', error);
        throw error;
      });
  }

  // *** CRUD ***

  // create
  async create(document: Restaurant | Order | Menu): Promise<InsertOneResult<Restaurant | Order | Menu>> {
    let ret = await this.collection.insertOne(document);
    return ret;
  }

  // read all or read by a filter
  async readAllOrByFilter(filters: {} = {}): Promise<any[]> {
    return this.collection.find(filters).toArray();
  }

  // update
  async update(
    id: string,
    updatedDocument: Menu | Restaurant | Order,
  ): Promise<UpdateResult> {
    return this.collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedDocument },
    );
  }

  // delete
  async delete(id: string): Promise<DeleteResult> {
    return this.collection.deleteOne({ _id: new ObjectId(id) });
  }
}
