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

export class DdService {
  private db: Db;
  private collection: Collection;

  constructor() {
    const uri = dot.parsed.MONGO_URI;
    const client = new MongoClient(uri);

    client
      .connect()
      .then(() => {
        console.log('connected to mongo uri');
        this.db = client.db();
        this.collection = this.db.collection('main');
      })
      .catch((error) => {
        console.error('error connecting to mongo', error);
        throw error;
      });
  }

  // *** CRUD ***

  // create
  async create(document: any): Promise<InsertOneResult<any>> {
    return await this.collection.insertOne(document);
  }

  // read all or read by a filter
  async readAllOrByFilter(filters = {}): Promise<any[]> {
    return await this.collection.find(filters).toArray();
  }

  // update
  async update(
    id: string,
    updatedDocument: Menu | Restaurant | Order,
  ): Promise<UpdateResult> {
    return await this.collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedDocument },
    );
  }

  // delete
  async delete(id: string): Promise<DeleteResult> {
    return await this.collection.deleteOne({ _id: new ObjectId(id) });
  }
}
