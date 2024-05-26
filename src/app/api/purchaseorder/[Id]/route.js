import { getConnection } from "../connection";
import { getConnection } from "../../connection";

export async function GET(request, context) {
  const connection = await getConnection();
  const data = await connection.execute(
    `select * from purchaseorder where id = ${context.params.Id}`
  );
  return NextResponse.json({
    data: data.rows,
  });
}

//request + context for get inputs
//request.body for body POST/etc methods
// context.params gives you everything else
