module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "12demetrio34",
  DB: "hackaton12",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}