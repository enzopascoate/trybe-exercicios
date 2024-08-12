const config = {
  "development": {
    "username": "root",
    "password": "password",
    "database": "books_database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "password",
    "database": "books_database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "password",
    "database": "books_database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};

module.exports = {
  development: config.development,
  test: config.test,
  production: config.production,
};
