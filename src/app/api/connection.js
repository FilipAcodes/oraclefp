const oracledb = require("oracledb");

async function connection() {
  try {
    let connection = await oracledb.getConnection({
      user: "oracleproject",
      password: "oracleproject",
      connectionString: "//localhost:1521/global_oracle",
    });
    return connection;
  } catch (error) {
    console.error("Error establishing connection", error);
  }
}

module.exports = { connection };
