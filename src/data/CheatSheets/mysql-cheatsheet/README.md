# 🐬 MySQL Cheatsheet

A comprehensive reference guide for MySQL database, including SQL queries, database management, and best practices.

## 🚀 Getting Started

### Installation & Connection

```bash
# Install MySQL
# Ubuntu/Debian
sudo apt-get install mysql-server

# macOS with Homebrew
brew install mysql

# Start MySQL service
sudo systemctl start mysql
sudo systemctl enable mysql

# Connect to MySQL
mysql -u username -p
mysql -h hostname -u username -p database_name
```

### Node.js Connection

```javascript
const mysql = require('mysql2/promise');

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'database_name'
});

// Close connection
await connection.end();
```

## 📊 Database Operations

### Create Database

```sql
-- Create database
CREATE DATABASE database_name;
CREATE DATABASE database_name CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Use database
USE database_name;

-- Show databases
SHOW DATABASES;

-- Drop database
DROP DATABASE database_name;
```

### Create Tables

```sql
-- Create table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INT CHECK (age >= 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create table with foreign key
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    status ENUM('pending', 'completed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Show tables
SHOW TABLES;

-- Describe table
DESCRIBE users;
DESC users;

-- Drop table
DROP TABLE table_name;
```

## 📝 CRUD Operations

### INSERT

```sql
-- Insert single row
INSERT INTO users (name, email, age) VALUES ('John Doe', 'john@example.com', 30);

-- Insert multiple rows
INSERT INTO users (name, email, age) VALUES 
    ('Jane Doe', 'jane@example.com', 25),
    ('Bob Smith', 'bob@example.com', 35);

-- Insert with SELECT
INSERT INTO users (name, email, age)
SELECT name, email, age FROM old_users WHERE age > 25;

-- Insert and get last insert ID
INSERT INTO users (name, email, age) VALUES ('John Doe', 'john@example.com', 30);
SELECT LAST_INSERT_ID();
```

### SELECT

```sql
-- Basic select
SELECT * FROM users;

-- Select specific columns
SELECT name, email FROM users;

-- Select with alias
SELECT name AS user_name, email AS user_email FROM users;

-- Select with condition
SELECT * FROM users WHERE age > 25;

-- Select with multiple conditions
SELECT * FROM users WHERE age > 25 AND status = 'active';

-- Select with OR
SELECT * FROM users WHERE age < 25 OR age > 65;

-- Select with IN
SELECT * FROM users WHERE age IN (25, 30, 35);

-- Select with LIKE
SELECT * FROM users WHERE name LIKE 'John%';
SELECT * FROM users WHERE name LIKE '%Doe%';
SELECT * FROM users WHERE name LIKE 'J_n%';

-- Select with NULL
SELECT * FROM users WHERE email IS NULL;
SELECT * FROM users WHERE email IS NOT NULL;

-- Select with LIMIT
SELECT * FROM users LIMIT 10;
SELECT * FROM users LIMIT 10 OFFSET 20;

-- Select with ORDER BY
SELECT * FROM users ORDER BY name ASC;
SELECT * FROM users ORDER BY age DESC;
SELECT * FROM users ORDER BY name ASC, age DESC;

-- Select with DISTINCT
SELECT DISTINCT age FROM users;
SELECT DISTINCT name, age FROM users;
```

### UPDATE

```sql
-- Update single row
UPDATE users SET age = 31 WHERE id = 1;

-- Update multiple rows
UPDATE users SET status = 'inactive' WHERE age > 65;

-- Update with condition
UPDATE users SET 
    name = 'John Smith',
    email = 'johnsmith@example.com',
    updated_at = CURRENT_TIMESTAMP
WHERE id = 1;

-- Update with JOIN
UPDATE users u
JOIN orders o ON u.id = o.user_id
SET u.total_orders = (
    SELECT COUNT(*) FROM orders WHERE user_id = u.id
);
```

### DELETE

```sql
-- Delete single row
DELETE FROM users WHERE id = 1;

-- Delete multiple rows
DELETE FROM users WHERE age < 18;

-- Delete all rows
DELETE FROM users;
TRUNCATE TABLE users;  -- Faster, resets auto-increment

-- Delete with JOIN
DELETE u FROM users u
JOIN orders o ON u.id = o.user_id
WHERE o.total = 0;
```

## 🔗 JOIN Operations

### INNER JOIN

```sql
-- Basic inner join
SELECT u.name, o.total
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

-- Multiple joins
SELECT u.name, o.total, p.name as product_name
FROM users u
INNER JOIN orders o ON u.id = o.user_id
INNER JOIN products p ON o.product_id = p.id;
```

### LEFT JOIN

```sql
-- Left join (all users, even without orders)
SELECT u.name, o.total
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;

-- Left join with condition
SELECT u.name, o.total
FROM users u
LEFT JOIN orders o ON u.id = o.user_id AND o.status = 'completed';
```

### RIGHT JOIN

```sql
-- Right join (all orders, even without users)
SELECT u.name, o.total
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id;
```

### FULL OUTER JOIN

```sql
-- Full outer join (MySQL doesn't support FULL OUTER JOIN directly)
SELECT u.name, o.total
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
UNION
SELECT u.name, o.total
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id
WHERE u.id IS NULL;
```

## 📊 Aggregation Functions

### Basic Aggregation

```sql
-- Count
SELECT COUNT(*) FROM users;
SELECT COUNT(email) FROM users;
SELECT COUNT(DISTINCT age) FROM users;

-- Sum
SELECT SUM(total) FROM orders;
SELECT SUM(total) FROM orders WHERE status = 'completed';

-- Average
SELECT AVG(age) FROM users;
SELECT AVG(total) FROM orders;

-- Min/Max
SELECT MIN(age) FROM users;
SELECT MAX(age) FROM users;
SELECT MIN(total), MAX(total) FROM orders;
```

### GROUP BY

```sql
-- Group by single column
SELECT age, COUNT(*) as count
FROM users
GROUP BY age;

-- Group by multiple columns
SELECT age, status, COUNT(*) as count
FROM users
GROUP BY age, status;

-- Group by with aggregation
SELECT 
    age,
    COUNT(*) as user_count,
    AVG(total) as avg_order_total
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY age;

-- Group by with HAVING
SELECT age, COUNT(*) as count
FROM users
GROUP BY age
HAVING count > 5;
```

## 🔍 Advanced Queries

### Subqueries

```sql
-- Subquery in WHERE
SELECT * FROM users 
WHERE age > (SELECT AVG(age) FROM users);

-- Subquery in SELECT
SELECT 
    name,
    (SELECT COUNT(*) FROM orders WHERE user_id = users.id) as order_count
FROM users;

-- Subquery in FROM
SELECT avg_age.age_group, COUNT(*) as user_count
FROM (
    SELECT 
        CASE 
            WHEN age < 25 THEN 'Young'
            WHEN age < 50 THEN 'Adult'
            ELSE 'Senior'
        END as age_group
    FROM users
) avg_age
GROUP BY avg_age.age_group;

-- EXISTS
SELECT * FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o 
    WHERE o.user_id = u.id AND o.total > 100
);
```

### Window Functions

```sql
-- Row number
SELECT 
    name,
    age,
    ROW_NUMBER() OVER (ORDER BY age DESC) as row_num
FROM users;

-- Rank
SELECT 
    name,
    age,
    RANK() OVER (ORDER BY age DESC) as rank_num
FROM users;

-- Dense rank
SELECT 
    name,
    age,
    DENSE_RANK() OVER (ORDER BY age DESC) as dense_rank_num
FROM users;

-- Partition by
SELECT 
    name,
    age,
    status,
    ROW_NUMBER() OVER (PARTITION BY status ORDER BY age DESC) as row_num
FROM users;
```

## 🗂️ Indexing

### Create Indexes

```sql
-- Single column index
CREATE INDEX idx_email ON users(email);

-- Composite index
CREATE INDEX idx_name_age ON users(name, age);

-- Unique index
CREATE UNIQUE INDEX idx_email_unique ON users(email);

-- Full-text index
CREATE FULLTEXT INDEX idx_name_fulltext ON users(name);

-- Show indexes
SHOW INDEX FROM users;
```

### Index Management

```sql
-- Drop index
DROP INDEX idx_email ON users;

-- Analyze table
ANALYZE TABLE users;

-- Check index usage
EXPLAIN SELECT * FROM users WHERE email = 'john@example.com';
```

## 🔒 User Management

### Create Users

```sql
-- Create user
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';

-- Create user with specific host
CREATE USER 'username'@'%' IDENTIFIED BY 'password';

-- Grant privileges
GRANT SELECT, INSERT, UPDATE, DELETE ON database_name.* TO 'username'@'localhost';

-- Grant all privileges
GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'localhost';

-- Grant global privileges
GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost';

-- Flush privileges
FLUSH PRIVILEGES;
```

### User Management

```sql
-- Show users
SELECT User, Host FROM mysql.user;

-- Change password
ALTER USER 'username'@'localhost' IDENTIFIED BY 'new_password';

-- Drop user
DROP USER 'username'@'localhost';

-- Revoke privileges
REVOKE SELECT ON database_name.* FROM 'username'@'localhost';
```

## 🔧 Database Administration

### Backup & Restore

```bash
# Backup database
mysqldump -u username -p database_name > backup.sql

# Backup specific tables
mysqldump -u username -p database_name table1 table2 > backup.sql

# Backup with options
mysqldump -u username -p --single-transaction --routines --triggers database_name > backup.sql

# Restore database
mysql -u username -p database_name < backup.sql

# Create backup with compression
mysqldump -u username -p database_name | gzip > backup.sql.gz

# Restore from compressed backup
gunzip < backup.sql.gz | mysql -u username -p database_name
```

### Performance Optimization

```sql
-- Show process list
SHOW PROCESSLIST;

-- Kill process
KILL process_id;

-- Show variables
SHOW VARIABLES LIKE 'max_connections';
SHOW VARIABLES LIKE 'innodb_buffer_pool_size';

-- Set variables
SET GLOBAL max_connections = 200;
SET SESSION sql_mode = 'STRICT_TRANS_TABLES';

-- Show status
SHOW STATUS LIKE 'Threads_connected';
SHOW STATUS LIKE 'Slow_queries';
```

## 📊 Data Types

### Numeric Types

```sql
-- Integer types
TINYINT      -- 1 byte (-128 to 127)
SMALLINT     -- 2 bytes (-32,768 to 32,767)
INT          -- 4 bytes (-2,147,483,648 to 2,147,483,647)
BIGINT       -- 8 bytes

-- Decimal types
DECIMAL(10,2)  -- Fixed-point decimal
FLOAT          -- Single-precision floating-point
DOUBLE         -- Double-precision floating-point
```

### String Types

```sql
-- Fixed-length strings
CHAR(10)     -- Fixed 10 characters

-- Variable-length strings
VARCHAR(255) -- Variable up to 255 characters
TEXT         -- Variable up to 65,535 characters
LONGTEXT     -- Variable up to 4,294,967,295 characters

-- Binary strings
BINARY(10)   -- Fixed 10 bytes
VARBINARY(255) -- Variable up to 255 bytes
BLOB         -- Variable up to 65,535 bytes
```

### Date & Time Types

```sql
-- Date types
DATE         -- YYYY-MM-DD
TIME         -- HH:MM:SS
DATETIME     -- YYYY-MM-DD HH:MM:SS
TIMESTAMP    -- YYYY-MM-DD HH:MM:SS (auto-update)
YEAR         -- YYYY
```

## 🔍 Useful Functions

### String Functions

```sql
-- String manipulation
CONCAT('Hello', ' ', 'World')           -- 'Hello World'
SUBSTRING('Hello World', 1, 5)          -- 'Hello'
UPPER('hello')                          -- 'HELLO'
LOWER('HELLO')                          -- 'hello'
LENGTH('Hello World')                   -- 11
TRIM('  Hello  ')                       -- 'Hello'
REPLACE('Hello World', 'World', 'MySQL') -- 'Hello MySQL'
```

### Date Functions

```sql
-- Date manipulation
NOW()                                   -- Current timestamp
CURDATE()                               -- Current date
CURTIME()                               -- Current time
DATE_ADD(NOW(), INTERVAL 1 DAY)         -- Add 1 day
DATE_SUB(NOW(), INTERVAL 1 MONTH)       -- Subtract 1 month
DATEDIFF('2024-01-01', '2023-01-01')    -- 365
YEAR(NOW())                             -- Current year
MONTH(NOW())                            -- Current month
DAY(NOW())                              -- Current day
```

### Mathematical Functions

```sql
-- Mathematical operations
ABS(-10)                                -- 10
CEIL(3.14)                              -- 4
FLOOR(3.14)                             -- 3
ROUND(3.14159, 2)                       -- 3.14
POWER(2, 3)                             -- 8
SQRT(16)                                -- 4
RAND()                                  -- Random number
```

## 🔗 Useful Resources

- [MySQL Documentation](https://dev.mysql.com/doc/)
- [MySQL Tutorial](https://dev.mysql.com/doc/refman/8.0/en/tutorial.html)
- [MySQL Workbench](https://www.mysql.com/products/workbench/)
- [MySQL Performance Tuning](https://dev.mysql.com/doc/refman/8.0/en/optimization.html)

---

**Happy querying! 🐬** 