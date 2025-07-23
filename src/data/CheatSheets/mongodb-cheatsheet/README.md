# 🍃 MongoDB Cheatsheet

A comprehensive reference guide for MongoDB database, including queries, aggregation, and best practices.

## 🚀 Getting Started

### Installation & Connection

```bash
# Install MongoDB
# Ubuntu/Debian
sudo apt-get install mongodb

# macOS with Homebrew
brew install mongodb-community

# Start MongoDB service
sudo systemctl start mongod
sudo systemctl enable mongod

# Connect to MongoDB shell
mongosh
mongosh "mongodb://localhost:27017/database_name"
```

### Node.js Connection

```javascript
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection error:", error);
  }
}

// Close connection
async function close() {
  await client.close();
  console.log("Disconnected from MongoDB");
}
```

## 📊 Basic Operations

### Create Operations

```javascript
// Insert one document
const result = await collection.insertOne({
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  createdAt: new Date()
});

// Insert multiple documents
const documents = [
  { name: "Jane Doe", email: "jane@example.com", age: 25 },
  { name: "Bob Smith", email: "bob@example.com", age: 35 }
];
const result = await collection.insertMany(documents);

// Insert with options
const result = await collection.insertOne(document, {
  writeConcern: { w: 1 },
  ordered: true
});
```

### Read Operations

```javascript
// Find one document
const document = await collection.findOne({ name: "John Doe" });

// Find all documents
const documents = await collection.find({}).toArray();

// Find with filter
const users = await collection.find({ age: { $gte: 25 } }).toArray();

// Find with projection
const users = await collection.find({}, { name: 1, email: 1, _id: 0 }).toArray();

// Find with sort
const users = await collection.find({}).sort({ age: 1 }).toArray();

// Find with limit
const users = await collection.find({}).limit(10).toArray();

// Find with skip
const users = await collection.find({}).skip(10).limit(10).toArray();

// Count documents
const count = await collection.countDocuments({ age: { $gte: 25 } });
```

### Update Operations

```javascript
// Update one document
const result = await collection.updateOne(
  { name: "John Doe" },
  { $set: { age: 31 } }
);

// Update multiple documents
const result = await collection.updateMany(
  { age: { $lt: 30 } },
  { $inc: { age: 1 } }
);

// Update with upsert
const result = await collection.updateOne(
  { email: "john@example.com" },
  { $set: { name: "John Doe", age: 30 } },
  { upsert: true }
);

// Replace document
const result = await collection.replaceOne(
  { name: "John Doe" },
  { name: "John Doe", email: "john@example.com", age: 31 }
);
```

### Delete Operations

```javascript
// Delete one document
const result = await collection.deleteOne({ name: "John Doe" });

// Delete multiple documents
const result = await collection.deleteMany({ age: { $lt: 18 } });

// Delete all documents
const result = await collection.deleteMany({});
```

## 🔍 Query Operators

### Comparison Operators

```javascript
// Equal
db.users.find({ age: 30 })

// Not equal
db.users.find({ age: { $ne: 30 } })

// Greater than
db.users.find({ age: { $gt: 25 } })

// Greater than or equal
db.users.find({ age: { $gte: 25 } })

// Less than
db.users.find({ age: { $lt: 30 } })

// Less than or equal
db.users.find({ age: { $lte: 30 } })

// In array
db.users.find({ age: { $in: [25, 30, 35] } })

// Not in array
db.users.find({ age: { $nin: [25, 30, 35] } })

// Exists
db.users.find({ email: { $exists: true } })

// Type check
db.users.find({ age: { $type: "number" } })
```

### Logical Operators

```javascript
// AND (implicit)
db.users.find({ age: { $gte: 25 }, status: "active" })

// OR
db.users.find({ $or: [{ age: { $lt: 25 } }, { age: { $gt: 65 } }] })

// AND with OR
db.users.find({
  status: "active",
  $or: [
    { age: { $lt: 25 } },
    { age: { $gt: 65 } }
  ]
})

// NOT
db.users.find({ age: { $not: { $lt: 25 } } })

// NOR
db.users.find({ $nor: [{ age: { $lt: 25 } }, { status: "inactive" }] })
```

### Element Operators

```javascript
// Array contains
db.users.find({ tags: "javascript" })

// Array contains all
db.users.find({ tags: { $all: ["javascript", "nodejs"] } })

// Array size
db.users.find({ tags: { $size: 3 } })

// Array element match
db.users.find({ "scores": { $elemMatch: { $gte: 80, $lt: 90 } } })

// Array index
db.users.find({ "scores.0": { $gte: 80 } })
```

## 🔧 Update Operators

### Field Update Operators

```javascript
// Set field value
db.users.updateOne(
  { name: "John Doe" },
  { $set: { age: 31, updatedAt: new Date() } }
)

// Unset field
db.users.updateOne(
  { name: "John Doe" },
  { $unset: { temporaryField: "" } }
)

// Increment
db.users.updateOne(
  { name: "John Doe" },
  { $inc: { age: 1, loginCount: 1 } }
)

// Multiply
db.users.updateOne(
  { name: "John Doe" },
  { $mul: { score: 1.1 } }
)

// Rename field
db.users.updateOne(
  { name: "John Doe" },
  { $rename: { "oldField": "newField" } }
)
```

### Array Update Operators

```javascript
// Add to array
db.users.updateOne(
  { name: "John Doe" },
  { $push: { tags: "mongodb" } }
)

// Add multiple to array
db.users.updateOne(
  { name: "John Doe" },
  { $push: { tags: { $each: ["mongodb", "nodejs"] } } }
)

// Add to array if not exists
db.users.updateOne(
  { name: "John Doe" },
  { $addToSet: { tags: "javascript" } }
)

// Remove from array
db.users.updateOne(
  { name: "John Doe" },
  { $pull: { tags: "old-tag" } }
)

// Remove first element
db.users.updateOne(
  { name: "John Doe" },
  { $pop: { tags: -1 } }  // -1 for first, 1 for last
)

// Update array element
db.users.updateOne(
  { name: "John Doe" },
  { $set: { "tags.0": "updated-tag" } }
)
```

## 📈 Aggregation Pipeline

### Basic Aggregation

```javascript
// Simple aggregation
const result = await collection.aggregate([
  { $match: { age: { $gte: 25 } } },
  { $group: { _id: "$status", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]).toArray();

// Group by multiple fields
const result = await collection.aggregate([
  { $group: { 
    _id: { status: "$status", ageGroup: "$ageGroup" },
    count: { $sum: 1 },
    avgAge: { $avg: "$age" }
  }},
  { $sort: { "_id.status": 1, count: -1 } }
]).toArray();
```

### Aggregation Stages

```javascript
// $match - Filter documents
{ $match: { age: { $gte: 25 }, status: "active" } }

// $group - Group documents
{ $group: { 
  _id: "$category",
  totalSales: { $sum: "$amount" },
  avgPrice: { $avg: "$price" },
  count: { $sum: 1 }
}}

// $sort - Sort documents
{ $sort: { totalSales: -1, _id: 1 } }

// $limit - Limit number of documents
{ $limit: 10 }

// $skip - Skip documents
{ $skip: 20 }

// $project - Reshape documents
{ $project: { 
  name: 1,
  email: 1,
  ageGroup: {
    $cond: {
      if: { $lt: ["$age", 30] },
      then: "young",
      else: "adult"
    }
  }
}}

// $lookup - Join collections
{ $lookup: {
  from: "orders",
  localField: "_id",
  foreignField: "userId",
  as: "orders"
}}

// $unwind - Deconstruct array
{ $unwind: "$tags" }

// $addFields - Add new fields
{ $addFields: {
  fullName: { $concat: ["$firstName", " ", "$lastName"] },
  isAdult: { $gte: ["$age", 18] }
}}
```

### Aggregation Operators

```javascript
// Arithmetic operators
{ $sum: "$amount" }
{ $avg: "$price" }
{ $min: "$score" }
{ $max: "$score" }
{ $count: {} }

// String operators
{ $concat: ["$firstName", " ", "$lastName"] }
{ $toUpper: "$name" }
{ $toLower: "$email" }
{ $substr: ["$description", 0, 100] }

// Date operators
{ $year: "$createdAt" }
{ $month: "$createdAt" }
{ $dayOfMonth: "$createdAt" }
{ $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }

// Conditional operators
{ $cond: {
  if: { $gte: ["$age", 18] },
  then: "adult",
  else: "minor"
}}

// Array operators
{ $size: "$tags" }
{ $arrayElemAt: ["$scores", 0] }
{ $in: ["$category", ["A", "B", "C"]] }
```

## 🗂️ Indexing

### Create Indexes

```javascript
// Single field index
await collection.createIndex({ email: 1 });

// Compound index
await collection.createIndex({ status: 1, createdAt: -1 });

// Unique index
await collection.createIndex({ email: 1 }, { unique: true });

// Sparse index
await collection.createIndex({ phone: 1 }, { sparse: true });

// Text index
await collection.createIndex({ description: "text" });

// Geospatial index
await collection.createIndex({ location: "2dsphere" });

// TTL index
await collection.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });
```

### Index Management

```javascript
// List indexes
const indexes = await collection.indexes();

// Drop index
await collection.dropIndex("index_name");

// Drop all indexes
await collection.dropIndexes();

// Get index usage stats
const stats = await collection.aggregate([
  { $indexStats: {} }
]).toArray();
```

## 🔒 Data Validation

### Schema Validation

```javascript
// Create collection with validation
await db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "age"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
          description: "must be a valid email address"
        },
        age: {
          bsonType: "int",
          minimum: 0,
          maximum: 120,
          description: "must be an integer between 0 and 120"
        }
      }
    }
  }
});
```

## 📊 Performance & Optimization

### Query Optimization

```javascript
// Use projection to limit fields
const users = await collection.find({}, { name: 1, email: 1, _id: 0 });

// Use covered queries
const users = await collection.find({ status: "active" }, { _id: 0 });

// Use batch operations
const operations = [
  { insertOne: { document: { name: "John", age: 30 } } },
  { updateOne: { filter: { name: "Jane" }, update: { $set: { age: 31 } } } },
  { deleteOne: { filter: { name: "Bob" } } }
];
const result = await collection.bulkWrite(operations);

// Use cursor for large datasets
const cursor = collection.find({});
while (await cursor.hasNext()) {
  const doc = await cursor.next();
  // Process document
}
```

### Connection Pooling

```javascript
const { MongoClient } = require('mongodb');

const client = new MongoClient(uri, {
  maxPoolSize: 10,
  minPoolSize: 5,
  maxIdleTimeMS: 30000,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
});
```

## 🔍 Advanced Queries

### Text Search

```javascript
// Create text index
await collection.createIndex({ description: "text", title: "text" });

// Text search
const results = await collection.find({
  $text: { $search: "mongodb tutorial" }
}).toArray();

// Text search with score
const results = await collection.find({
  $text: { $search: "mongodb tutorial" }
}, {
  score: { $meta: "textScore" }
}).sort({ score: { $meta: "textScore" } }).toArray();
```

### Geospatial Queries

```javascript
// Create geospatial index
await collection.createIndex({ location: "2dsphere" });

// Find documents near a point
const results = await collection.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [longitude, latitude]
      },
      $maxDistance: 1000
    }
  }
}).toArray();

// Find documents within a polygon
const results = await collection.find({
  location: {
    $geoWithin: {
      $geometry: {
        type: "Polygon",
        coordinates: [[[lng1, lat1], [lng2, lat2], [lng3, lat3], [lng1, lat1]]]
      }
    }
  }
}).toArray();
```

## 🔗 Useful Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
- [MongoDB Compass](https://www.mongodb.com/products/compass)

---

**Happy querying! 🍃** 