```javascript
// Incorrect use of $inc operator
db.collection.updateOne({"_id": ObjectId("65167e5d7a7d5c1a02e84885")}, {"$inc": {"counter": "1"}});
```