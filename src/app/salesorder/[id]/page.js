"use client";
import { useParams } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../../table.css";
export default function page() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const useparams = useParams();
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/salesorder/${useparams.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h1>Sales Order</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Customer Id</th>
            <th>Date Ordered</th>
            <th>Price</th>
            <th>Product Id</th>
            <th>Qte</th>
            <th>SalesPerson Id </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e) => {
            const dateOrdered = new Date(e.DATEORDERED);
            const formattedDateOrdered = dateOrdered.toLocaleString();
            return (
              <tr key={e.ID}>
                <td
                  onClick={() => router.push(`/salesorder/${e.ID}`)}
                  className="sendTo"
                >
                  {e.ID}
                </td>
                <th
                  onClick={() => router.push(`/customer/${e.CUSTOMER_ID}`)}
                  className="sendTo"
                >
                  {e.CUSTOMER_ID}
                </th>
                <th>{formattedDateOrdered}</th>
                <th>{e.PRICE}</th>
                <th
                  onClick={() => router.push(`/product/${e.PRODUCT_ID}`)}
                  className="sendTo"
                >
                  {e.PRODUCT_ID}
                </th>
                <th>{e.QTE}</th>
                <th
                  onClick={() =>
                    router.push(`/salespersons/${e.SALESPERSON_ID}`)
                  }
                  className="sendTo"
                >
                  {e.SALESPERSON_ID}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
