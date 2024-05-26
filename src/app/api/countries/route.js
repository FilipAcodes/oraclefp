import { NextResponse } from "next/server";
import { getConnection } from "../connection";

export async function GET(request, context) {
  try {
    const connection = await getConnection();
    const data = await connection.execute(`select * from countries`);

    return NextResponse.json({
      data: data.rows,
    });
  } catch (error) {
    console.error("Error processing request", error);
    return NextResponse.error(error);
  }
}

//request + context for get inputs
//request.body for body POST/etc methods
// context.params gives you everything else

// change {{connection}} into a function to be exported/imported into different files
