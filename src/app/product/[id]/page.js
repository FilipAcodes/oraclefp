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
    fetch(`/api/product/${useparams.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h1>Product</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Color</th>
            <th>Price</th>
            <th>QTE</th>
            <th>Product Category Id</th>
            <th>Target Demographic</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e) => {
            return (
              <tr key={e.ID}>
                <td onClick={() => router.push(`/product/${e.ID}`)}>{e.ID}</td>
                <th>{e.NAME}</th>
                <th>{e.DESCRIPTION}</th>
                <th>{e.COLOR}</th>
                <th>{e.PRICE}</th>
                <th>{e.QTE}</th>
                <th
                  onClick={() =>
                    router.push(`/productcategory/${e.PRODUCTCATEGORY_ID}`)
                  }
                >
                  {e.PRODUCTCATEGORY_ID}
                </th>
                <th>{e.TARGETDEMOGRAPHIC}</th>
                <th>{e.WEIGHT}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
