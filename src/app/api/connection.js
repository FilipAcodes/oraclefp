const oracledb = require("oracledb");
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function getConnection() {
  try {
    let connection = await oracledb.getConnection({
      user: "oracleproject",
      password: "oracleproject",
      connectionString: "//localhost:1521/global_oracle",
    });
    return connection;
  } catch (error) {
    console.error("Error establishing connection", error);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
}

module.exports = { getConnection };
