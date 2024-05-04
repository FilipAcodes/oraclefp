const oracledb = require("oracledb");
import { NextResponse } from "next/server";

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export async function GET(request, context) {
  console.log(context.params);
  let connection = await oracledb.getConnection({
    user: "filip",
    password: "filip",
    connectionString: "//localhost:1521/global_oracle",
  });
  const data = await connection.execute(`select * from employees`);
  return NextResponse.json({
    data: context.params.userId,
  });
}

//request + context for get inputs
//request.body for body POST/etc methods
// context.params gives you everything else
