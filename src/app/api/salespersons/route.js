const oracledb = require("oracledb");
import { NextResponse } from "next/server";

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export async function GET(request, context) {
  let connection = await oracledb.getConnection({
    user: "oracleproject",
    password: "oracleproject",
    connectionString: "//localhost:1521/global_oracle",
  });
  const data = await connection.execute(`select * from salespersons`);

  return NextResponse.json({
    data: data.rows,
  });
}

//request + context for get inputs
//request.body for body POST/etc methods
// context.params gives you everything else
