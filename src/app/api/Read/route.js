const oracledb = require("oracledb");
import { NextResponse } from "next/server";

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export async function GET() {
  let connection;
  connection = await oracledb.getConnection({
    user: "filip",
    password: "filip",
    connectionString: "//localhost:1521/global_oracle",
  });
  const data = await connection.execute(`SELECT * FROM EMPLOYEES`);
  return NextResponse.json({
    data: data.rows,
  });
}
