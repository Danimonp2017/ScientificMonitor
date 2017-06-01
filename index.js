const MongoClient = require('mongodb').MongoClient,
      assert = require('assert'),
      data = require('./MOCK_DATA.json');

// Connection URL
const url = 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server
MongoClient.connect(url, (err, db) => {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  insertDocs(db, data, () => {
    deleteDocs(db, {gender: "Male"}, (res) => {
      console.log("Deteled documents: " + res.deletedCount);
        db.close();
    }, "Users");
    findDocs(db, () => {
    db.close();
    }, 'Users');
  }, 'Users');
});

const insertDocs = (db, data, callback, collectionName) => {
        const collection = db.collection(collectionName);

        collection.insertMany(data, (err, res) => {
          assert.equal(err, null);
          callback(res)
        });
      },

      findDocs = (db, callback, collectionName, query={}) => {
        const collection = db.collection(collectionName);

        collection.find(query).toArray((err, docs) => {
          assert.equal(null, err);
          console.log('Records: ');
          console.log(docs);
          callback(docs);
        })
      },

      updateDoc = (db, query1, query2, callback, collectionName) => {
        const collection = db.collection(collectionName);

        collection.updateOne(query1, query2, (err, res) => {
          assert.equal(err, null);
          callback(res);
        });
      },

      deleteDocs = (db, query, callback, collectionName, justOne=false) => {
        const collection = db.collection(collectionName);

        collection.deleteMany(query, (err, res) => {
          assert.equal(err, null);
          callback(res);
        });
      }
