const oracledb = require("oracledb");
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function test() {
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: "filip",
      password: "filip",
      connectionString: "//localhost:1521/global_oracle",
    });
    const data = await connection.execute(`SELECT * FROM EMPLOYEES`);
    console.log(data.rows);
  } catch (err) {
    console.log(err);
  }
}

test();
