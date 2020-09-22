export const ConfigSchema = {
  botToken: {
    doc: 'tokenTelegramBot',
    format: String,
    default: ''
  },
  db: {
    host: {
      doc: "Database host name/IP",
      format: "*",
      default: "127.0.0.1"
    },
    name: {
      doc: "Database name",
      format: String,
      default: "root"
    },
    password: {
      doc: "Database password",
      format: String,
      default: "root"
    },
    dbname: {
      doc: "Database name",
      format: String,
      default: "qnote"
    },
    port: {
      doc: "Database port",
      format: Number,
      default: 3306
    },
    type: {
      doc: "Database type",
      format: String,
      default: "mysql"
    },
    entities: {
      doc: "Entities Path",
      format: Array,
      default: ["**/**.entity.js"]
    },
    migrations: {
      doc: "Migration Path",
      format: Array,
      default: ["migration/*.js"],
    }
  }
};
