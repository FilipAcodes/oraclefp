import { getConnection } from "../connection";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  const connection = await getConnection();

  const data = await connection.execute(`select * from manufacturer`);

  return NextResponse.json({
    data: data.rows,
  });
}

//request + context for get inputs
//request.body for body POST/etc methods
// context.params gives you everything else
