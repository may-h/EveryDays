const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.paswsword,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Define Tables
db.Member = require("./member")(sequelize, Sequelize);
db.User = require("./User")(sequelize, Sequelize);
db.Payment = require("./payment")(sequelize, Sequelize);
db.Company = require("./company")(sequelize, Sequelize);
db.Memo = require("./memo")(sequelize, Sequelize);
db.Attendance = require("./attendance")(sequelize, Sequelize);

//Define Relations
db.User.hasOne(db.Company, { ForeignKey: "compay_code" });
db.Company.belongsTo(db.User, { ForeignKey: "compay_code" });

db.Company.hasMany(db.Member, { ForeignKey: "company_code" });
db.Member.belongsTo(db.Company, { ForeignKey: "company_code" });

db.Member.hasMany(db.Payment);
db.Payment.belongsTo(db.Member);

db.Member.hasOne(db.Memo);
db.Memo.belongsTo(db.Memo);

db.Member.hasMany(db.Attendance);
db.Attendance.belongsTo(db.Member);

module.exports = db;
