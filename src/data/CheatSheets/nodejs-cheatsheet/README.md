# 🟢 Node.js Cheatsheet

A comprehensive reference guide for Node.js runtime, including core modules, async programming, and best practices.

## 🚀 Getting Started

### Installation & Setup

```bash
# Check Node.js version
node --version
npm --version

# Initialize new project
npm init
npm init -y

# Install dependencies
npm install package-name
npm install --save-dev package-name

# Global installation
npm install -g package-name

# Run scripts
npm start
npm test
npm run dev
```

### Basic Server

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

## 📦 Core Modules

### File System (fs)

```javascript
const fs = require('fs');
const fsPromises = require('fs').promises;

// Synchronous file operations
const data = fs.readFileSync('file.txt', 'utf8');
fs.writeFileSync('output.txt', 'Hello World');
fs.appendFileSync('log.txt', 'New log entry\n');

// Asynchronous file operations (callback-based)
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(data);
});

fs.writeFile('output.txt', 'Hello World', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully');
});

// Promise-based file operations
async function readFile() {
  try {
    const data = await fsPromises.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// File operations
fs.existsSync('file.txt'); // Check if file exists
fs.mkdirSync('new-directory'); // Create directory
fs.rmdirSync('empty-directory'); // Remove empty directory
fs.unlinkSync('file.txt'); // Delete file
fs.copyFileSync('source.txt', 'destination.txt'); // Copy file
fs.renameSync('old-name.txt', 'new-name.txt'); // Rename file

// Directory operations
const files = fs.readdirSync('.'); // Read directory contents
fs.mkdirSync('nested/directory', { recursive: true }); // Create nested directories
```

### Path Module

```javascript
const path = require('path');

// Path manipulation
path.join('folder', 'subfolder', 'file.txt'); // 'folder/subfolder/file.txt'
path.resolve('folder', 'file.txt'); // Absolute path
path.dirname('/path/to/file.txt'); // '/path/to'
path.basename('/path/to/file.txt'); // 'file.txt'
path.basename('/path/to/file.txt', '.txt'); // 'file'
path.extname('file.txt'); // '.txt'
path.parse('/path/to/file.txt'); // { root: '/', dir: '/path/to', base: 'file.txt', ext: '.txt', name: 'file' }

// Path checking
path.isAbsolute('/path/to/file'); // true
path.isAbsolute('./relative/path'); // false
path.normalize('/path//to///file'); // '/path/to/file'
path.relative('/path/from', '/path/to'); // '../to'
```

### URL Module

```javascript
const url = require('url');

// Parse URL
const parsedUrl = url.parse('https://example.com/path?query=value#fragment');
console.log(parsedUrl.hostname); // 'example.com'
console.log(parsedUrl.pathname); // '/path'
console.log(parsedUrl.query); // 'query=value'
console.log(parsedUrl.hash); // '#fragment'

// Format URL
const urlObject = {
  protocol: 'https:',
  hostname: 'example.com',
  pathname: '/path',
  query: { query: 'value' }
};
const formattedUrl = url.format(urlObject); // 'https://example.com/path?query=value'

// URLSearchParams
const params = new URLSearchParams('query=value&page=1');
params.get('query'); // 'value'
params.get('page'); // '1'
params.set('page', '2');
params.toString(); // 'query=value&page=2'
```

### Query String Module

```javascript
const querystring = require('querystring');

// Parse query string
const parsed = querystring.parse('name=john&age=25');
console.log(parsed); // { name: 'john', age: '25' }

// Stringify object
const stringified = querystring.stringify({ name: 'john', age: 25 });
console.log(stringified); // 'name=john&age=25'

// Escape/unescape
querystring.escape('hello world'); // 'hello%20world'
querystring.unescape('hello%20world'); // 'hello world'
```

### Crypto Module

```javascript
const crypto = require('crypto');

// Hash functions
const hash = crypto.createHash('sha256');
hash.update('Hello World');
console.log(hash.digest('hex')); // Hash in hexadecimal

// HMAC
const hmac = crypto.createHmac('sha256', 'secret-key');
hmac.update('Hello World');
console.log(hmac.digest('hex')); // HMAC in hexadecimal

// Random bytes
const randomBytes = crypto.randomBytes(16);
console.log(randomBytes.toString('hex')); // Random hex string

// Cipher/Decipher
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Encrypt
const cipher = crypto.createCipher(algorithm, key);
let encrypted = cipher.update('Hello World', 'utf8', 'hex');
encrypted += cipher.final('hex');

// Decrypt
const decipher = crypto.createDecipher(algorithm, key);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
```

## 🔄 Async Programming

### Callbacks

```javascript
// Callback pattern
function readFileCallback(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, data);
  });
}

// Usage
readFileCallback('file.txt', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('Data:', data);
});
```

### Promises

```javascript
// Creating promises
function readFilePromise(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

// Using promises
readFilePromise('file.txt')
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Promise.all
Promise.all([
  readFilePromise('file1.txt'),
  readFilePromise('file2.txt'),
  readFilePromise('file3.txt')
])
  .then(results => {
    console.log('All files read:', results);
  })
  .catch(error => {
    console.error('Error reading files:', error);
  });

// Promise.race
Promise.race([
  readFilePromise('file1.txt'),
  readFilePromise('file2.txt')
])
  .then(result => {
    console.log('First file read:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### Async/Await

```javascript
// Async function
async function readFiles() {
  try {
    const data1 = await readFilePromise('file1.txt');
    const data2 = await readFilePromise('file2.txt');
    console.log('Data1:', data1);
    console.log('Data2:', data2);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Parallel execution
async function readFilesParallel() {
  try {
    const [data1, data2] = await Promise.all([
      readFilePromise('file1.txt'),
      readFilePromise('file2.txt')
    ]);
    console.log('Data1:', data1);
    console.log('Data2:', data2);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Error handling with async/await
async function handleErrors() {
  try {
    const result = await riskyOperation();
    return result;
  } catch (error) {
    console.error('Operation failed:', error);
    throw error; // Re-throw if needed
  }
}
```

## 🌐 HTTP & HTTPS

### HTTP Client

```javascript
const http = require('http');
const https = require('https');

// HTTP GET request
function makeHttpRequest(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// HTTP POST request
function makePostRequest(url, data) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(data);
    
    const options = {
      hostname: 'api.example.com',
      port: 80,
      path: '/endpoint',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };
    
    const req = http.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        resolve(responseData);
      });
    });
    
    req.on('error', (err) => {
      reject(err);
    });
    
    req.write(postData);
    req.end();
  });
}
```

### HTTPS Server

```javascript
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem')
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('HTTPS Server Response');
});

server.listen(443, () => {
  console.log('HTTPS Server running on port 443');
});
```

## 🔧 Streams

### Readable Streams

```javascript
const fs = require('fs');

// Reading file as stream
const readStream = fs.createReadStream('large-file.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('Chunk received:', chunk);
});

readStream.on('end', () => {
  console.log('File reading completed');
});

readStream.on('error', (error) => {
  console.error('Error reading file:', error);
});

// Piping streams
fs.createReadStream('input.txt')
  .pipe(fs.createWriteStream('output.txt'));
```

### Writable Streams

```javascript
const fs = require('fs');

// Writing to file as stream
const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello World\n');
writeStream.write('Another line\n');
writeStream.end('Final line\n');

writeStream.on('finish', () => {
  console.log('Writing completed');
});

writeStream.on('error', (error) => {
  console.error('Error writing file:', error);
});
```

### Transform Streams

```javascript
const { Transform } = require('stream');

// Custom transform stream
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const upperCase = chunk.toString().toUpperCase();
    callback(null, upperCase);
  }
});

// Usage
fs.createReadStream('input.txt')
  .pipe(upperCaseTransform)
  .pipe(fs.createWriteStream('output.txt'));
```

## 🕒 Timers

```javascript
// setTimeout
const timeoutId = setTimeout(() => {
  console.log('This runs after 2 seconds');
}, 2000);

// Clear timeout
clearTimeout(timeoutId);

// setInterval
const intervalId = setInterval(() => {
  console.log('This runs every 1 second');
}, 1000);

// Clear interval
clearInterval(intervalId);

// setImmediate
setImmediate(() => {
  console.log('This runs immediately after current execution');
});

// process.nextTick
process.nextTick(() => {
  console.log('This runs before next event loop iteration');
});
```

## 🔍 Events

```javascript
const EventEmitter = require('events');

// Custom event emitter
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Listen for events
myEmitter.on('event', (arg1, arg2) => {
  console.log('Event occurred with args:', arg1, arg2);
});

// Listen once
myEmitter.once('event', () => {
  console.log('This will only run once');
});

// Emit events
myEmitter.emit('event', 'arg1', 'arg2');

// Remove listeners
myEmitter.removeListener('event', listenerFunction);
myEmitter.removeAllListeners('event');

// Get listener count
const listenerCount = myEmitter.listenerCount('event');
```

## 🧵 Child Processes

```javascript
const { spawn, exec, fork } = require('child_process');

// Spawn process
const child = spawn('ls', ['-la']);

child.stdout.on('data', (data) => {
  console.log('stdout:', data.toString());
});

child.stderr.on('data', (data) => {
  console.error('stderr:', data.toString());
});

child.on('close', (code) => {
  console.log('Child process exited with code:', code);
});

// Exec process
exec('ls -la', (error, stdout, stderr) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
});

// Fork process
const forked = fork('child.js');

forked.on('message', (message) => {
  console.log('Message from child:', message);
});

forked.send({ hello: 'world' });
```

## 🔧 Buffer

```javascript
const buffer = require('buffer');

// Create buffers
const buf1 = Buffer.alloc(10); // Creates buffer filled with zeros
const buf2 = Buffer.allocUnsafe(10); // Creates uninitialized buffer
const buf3 = Buffer.from('Hello World'); // Creates buffer from string
const buf4 = Buffer.from([1, 2, 3, 4, 5]); // Creates buffer from array

// Buffer operations
buf3.toString(); // 'Hello World'
buf3.toString('base64'); // Base64 encoding
buf3.toString('hex'); // Hexadecimal encoding

// Buffer concatenation
const combined = Buffer.concat([buf1, buf2, buf3]);

// Buffer comparison
buf1.equals(buf2); // Compare buffers
buf1.compare(buf2); // Compare buffers (returns -1, 0, or 1)

// Buffer slicing
const slice = buf3.slice(0, 5); // Get first 5 bytes
```

## 🛠️ Utilities

### Process Object

```javascript
// Process information
console.log(process.pid); // Process ID
console.log(process.version); // Node.js version
console.log(process.platform); // Platform (win32, darwin, linux)
console.log(process.arch); // Architecture (x64, arm64)
console.log(process.cwd()); // Current working directory
console.log(process.env); // Environment variables

// Process events
process.on('exit', (code) => {
  console.log('Process exiting with code:', code);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection at:', promise, 'reason:', reason);
});

// Process methods
process.exit(0); // Exit with success code
process.kill(process.pid, 'SIGTERM'); // Send signal to process
```

### Console

```javascript
// Console methods
console.log('Regular log');
console.info('Info message');
console.warn('Warning message');
console.error('Error message');
console.debug('Debug message');

// Console formatting
console.log('String: %s, Number: %d, Object: %o', 'hello', 42, { key: 'value' });

// Console timing
console.time('operation');
// ... some operation
console.timeEnd('operation');

// Console table
console.table([
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 }
]);

// Console trace
console.trace('Trace message');
```

## 🔗 Useful Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [Node.js API Reference](https://nodejs.org/api/)
- [npm Documentation](https://docs.npmjs.com/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

---

**Happy coding! 🟢** 