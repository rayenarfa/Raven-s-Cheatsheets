# 🚀 Express.js Cheatsheet

A comprehensive reference guide for Express.js web framework, including routing, middleware, and best practices.

## 🚀 Getting Started

### Installation & Setup

```bash
# Create new project
mkdir my-express-app
cd my-express-app
npm init -y

# Install Express
npm install express

# Install additional dependencies
npm install cors helmet morgan dotenv
npm install --save-dev nodemon
```

### Basic Server Setup

```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Package.json Scripts

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest"
  }
}
```

## 🛣️ Routing

### Basic Routes

```javascript
const express = require('express');
const app = express();

// GET request
app.get('/users', (req, res) => {
  res.json({ users: [] });
});

// POST request
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({ message: 'User created', user: { name, email } });
});

// PUT request
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  res.json({ message: 'User updated', id, user: { name, email } });
});

// DELETE request
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: 'User deleted', id });
});

// PATCH request
app.patch('/users/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  res.json({ message: 'User partially updated', id, updates });
});
```

### Route Parameters

```javascript
// Single parameter
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ userId: id });
});

// Multiple parameters
app.get('/users/:id/posts/:postId', (req, res) => {
  const { id, postId } = req.params;
  res.json({ userId: id, postId });
});

// Optional parameters
app.get('/users/:id?', (req, res) => {
  const { id } = req.params;
  if (id) {
    res.json({ userId: id });
  } else {
    res.json({ message: 'All users' });
  }
});

// Regex parameters
app.get('/users/:id([0-9]+)', (req, res) => {
  const { id } = req.params;
  res.json({ userId: id });
});
```

### Query Parameters

```javascript
app.get('/search', (req, res) => {
  const { q, page = 1, limit = 10 } = req.query;
  
  res.json({
    query: q,
    page: parseInt(page),
    limit: parseInt(limit)
  });
});

// Example: GET /search?q=javascript&page=2&limit=20
```

### Route Groups (Router)

```javascript
const express = require('express');
const router = express.Router();

// User routes
router.get('/', (req, res) => {
  res.json({ message: 'All users' });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ userId: id });
});

router.post('/', (req, res) => {
  const user = req.body;
  res.status(201).json({ message: 'User created', user });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  res.json({ message: 'User updated', id, updates });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: 'User deleted', id });
});

module.exports = router;
```

```javascript
// In main app file
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);
```

## 🔧 Middleware

### Built-in Middleware

```javascript
const express = require('express');
const app = express();

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Parse cookies
app.use(express.json());
app.use(cookieParser());

// Enable CORS
app.use(cors());

// Security headers
app.use(helmet());

// Logging
app.use(morgan('combined'));
```

### Custom Middleware

```javascript
// Logger middleware
const logger = (req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
};

// Authentication middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
};

// Apply middleware
app.use(logger);
app.use('/protected', authenticate);
app.use(errorHandler);
```

### Middleware for Specific Routes

```javascript
// Apply to specific route
app.get('/protected', authenticate, (req, res) => {
  res.json({ message: 'Protected route', user: req.user });
});

// Apply to route group
app.use('/api', authenticate);

// Multiple middleware
app.post('/users', 
  validateUser, 
  sanitizeInput, 
  (req, res) => {
    // Route handler
  }
);
```

## 📊 Request & Response

### Request Object

```javascript
app.get('/example', (req, res) => {
  // URL parameters
  console.log(req.params);
  
  // Query string parameters
  console.log(req.query);
  
  // Request body
  console.log(req.body);
  
  // Request headers
  console.log(req.headers);
  
  // Request method
  console.log(req.method);
  
  // Request URL
  console.log(req.url);
  
  // Request path
  console.log(req.path);
  
  // Request hostname
  console.log(req.hostname);
  
  // Request IP
  console.log(req.ip);
  
  // Request cookies
  console.log(req.cookies);
  
  // Request file uploads
  console.log(req.files);
});
```

### Response Object

```javascript
app.get('/response-examples', (req, res) => {
  // Send JSON response
  res.json({ message: 'JSON response' });
  
  // Send HTML response
  res.send('<h1>HTML response</h1>');
  
  // Send status with JSON
  res.status(201).json({ message: 'Created' });
  
  // Redirect
  res.redirect('/new-page');
  
  // Send file
  res.sendFile('/path/to/file.html');
  
  // Download file
  res.download('/path/to/file.pdf');
  
  // Set headers
  res.set('Content-Type', 'application/json');
  res.set({
    'Content-Type': 'application/json',
    'X-Custom-Header': 'value'
  });
  
  // Set cookies
  res.cookie('name', 'value', { 
    maxAge: 900000, 
    httpOnly: true 
  });
  
  // Clear cookies
  res.clearCookie('name');
});
```

## 🗄️ Database Integration

### MongoDB with Mongoose

```javascript
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Routes
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
```

### PostgreSQL with Sequelize

```javascript
const { Sequelize, DataTypes } = require('sequelize');

// Connect to PostgreSQL
const sequelize = new Sequelize(process.env.DATABASE_URL);

// User Model
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Sync database
sequelize.sync();

// Routes
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

## 🔐 Authentication & Authorization

### JWT Authentication

```javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Login route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({ token, user: { id: user._id, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Protected route middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Use middleware
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected data', user: req.user });
});
```

## 📁 File Upload

### Multer for File Uploads

```javascript
const multer = require('multer');
const path = require('path');

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed'), false);
  }
};

// Configure multer
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5MB
  },
  fileFilter: fileFilter
});

// Upload route
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  res.json({
    message: 'File uploaded successfully',
    filename: req.file.filename,
    path: req.file.path
  });
});

// Multiple files
app.post('/upload-multiple', upload.array('images', 5), (req, res) => {
  res.json({
    message: 'Files uploaded successfully',
    files: req.files
  });
});
```

## 🧪 Testing

### Jest Testing

```javascript
// user.test.js
const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

describe('User API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_TEST_URI);
  });
  
  afterAll(async () => {
    await mongoose.connection.close();
  });
  
  beforeEach(async () => {
    await User.deleteMany({});
  });
  
  describe('GET /users', () => {
    it('should return all users', async () => {
      const response = await request(app)
        .get('/users')
        .expect(200);
      
      expect(response.body).toBeInstanceOf(Array);
    });
  });
  
  describe('POST /users', () => {
    it('should create a new user', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123'
      };
      
      const response = await request(app)
        .post('/users')
        .send(userData)
        .expect(201);
      
      expect(response.body.name).toBe(userData.name);
      expect(response.body.email).toBe(userData.email);
    });
  });
});
```

## 🚀 Production Setup

### Environment Configuration

```javascript
// config/database.js
const config = {
  development: {
    database: process.env.DEV_DATABASE_URL,
    port: 3000
  },
  production: {
    database: process.env.DATABASE_URL,
    port: process.env.PORT
  },
  test: {
    database: process.env.TEST_DATABASE_URL,
    port: 3001
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];
```

### PM2 Configuration

```javascript
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'my-express-app',
    script: 'server.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
```

### Security Best Practices

```javascript
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
  credentials: true
};
app.use(cors(corsOptions));

// Input validation
const { body, validationResult } = require('express-validator');

app.post('/users', [
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Process valid data
});
```

## 🔗 Useful Resources

- [Express.js Documentation](https://expressjs.com/)
- [Express.js GitHub](https://github.com/expressjs/express)
- [Express.js Examples](https://github.com/expressjs/express/tree/master/examples)
- [Express.js Security Best Practices](https://expressjs.com/en/advanced/best-practices-security.html)

---

**Happy coding! 🚀** 