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
    fetch(`/api/orderdetail/${useparams.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h1>Order Details</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Price</th>
            <th>Product id</th>
            <th>QTE</th>
            <th>Salesorder id</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e) => {
            return (
              <tr key={e.ID}>
                <td onClick={() => router.push(`/orderdetail/${e.ID}`)}>
                  {e.ID}
                </td>
                <th>{e.PRICE}</th>
                <th>{e.PRODUCT_ID}</th>
                <th>{e.QTE}</th>
                <th
                  onClick={() => router.push(`/salesorder/${e.SALESORDER_ID}`)}
                >
                  {e.SALESORDER_ID}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
