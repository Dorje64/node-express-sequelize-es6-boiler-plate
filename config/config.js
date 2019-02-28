const config = {
  "development": {
    "username": "root",
    "password": null,
    "database": "medusa_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "medusa_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "medusa_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

const env = process.env.NODE_ENV || 'development';

export default {
  [env]: {
    dialect: config[env]['dialect'],
    username: config[env]['username'],
    password: config[env]['password'],
    host: config[env]['host'],
    migrationStorageTableName: 'SequelizeMeta'
  }
};
