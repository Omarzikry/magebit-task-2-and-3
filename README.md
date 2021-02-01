# megabit-task-2-and-3

# [DEMO LINK - VIEW PINEAPPLE WORKING DEMO](https://www.linkedin.com/in/omarzikry/)

Magebit pineaplle task

### Prerequisites

1. Node.js + npm
2. PHP
3. MySQL
4. Apache server

### Installing

### 1. Clone Repo

```
git clone https://github.com/Omarzikry/magebit-task-2-and-3.git
```

### 2. Go inside cloned repo

```
cd magebit-task-2-and-3
```

### 3. Install all dependencies (make sure nodejs with npm is installed on your machine)

```
npm install
```

### 4. Run development server

```
npm start
```

## Creating the MySQL Database

### 1. Open a new terminal and run the following command

```
mysql -u root -p
```

### 2. Create a database by running this command

```
mysql> create database reactdb;
```

### 3. Add SQL table to your database

```
mysql> use reactdb;
mysql> CREATE TABLE `contacts` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `timeStamp` varchar(100),
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
```

## Build (PHP doesn't work unless on production)

### 1. Build the app

```
npm run build
```

### 2. Go to the build folder

```
cd build
```

### 3. Run php server

```
php -S 127.0.0.1:8080
```

## Authors

- **Omar Zikry** - _Initial work_ - [Omar Zikry](https://www.linkedin.com/in/omarzikry/)
