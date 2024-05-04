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
            <th>Current Date</th>
            <th>Date Ordered</th>
            <th>Price</th>
            <th>SalesPerson Id </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e) => {
            const currentDate = new Date(e.CURRENTDATE);
            const formattedCurrentDate = currentDate.toLocaleString();
            const dateOrdered = new Date(e.DATEORDERED);
            const formattedDateOrdered = dateOrdered.toLocaleString();
            return (
              <tr key={e.ID}>
                <td onClick={() => router.push(`/salesorder/${e.ID}`)}>
                  {e.ID}
                </td>
                <th onClick={() => router.push(`/customer/${e.CUSTOMER_ID}`)}>
                  {e.CUSTOMER_ID}
                </th>
                <th>{formattedCurrentDate}</th>
                <th>{formattedDateOrdered}</th>
                <th>{e.PRICE}</th>
                <th
                  onClick={() =>
                    router.push(`/salespersons/${e.SALESPERSON_ID}`)
                  }
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
