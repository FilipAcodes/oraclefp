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
    fetch(`/api/purchaseorder/${useparams.id}`)
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
            <th>Distribution Center Id</th>
            <th>Manufacturer Id</th>
            <th>Price</th>
            <th>Product Id</th>
            <th>Purchaser Id</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e) => {
            return (
              <tr key={e.ID}>
                <td
                  onClick={() => router.push(`/purchaseorder/${e.ID}`)}
                  className="sendTo"
                >
                  {e.ID}
                </td>
                <th
                  onClick={() =>
                    router.push(
                      `/distributioncenters/${e.DISTRIBUTIONCENTER_ID}`
                    )
                  }
                  className="sendTo"
                >
                  {e.DISTRIBUTIONCENTER_ID}
                </th>
                <th
                  onClick={() =>
                    router.push(`/manufacturer/${e.MANUFACTURER_ID}`)
                  }
                  className="sendTo"
                >
                  {e.MANUFACTURER_ID}
                </th>
                <th>{e.PRICE}$</th>
                <th
                  onClick={() => router.push(`/product/${e.PRODUCT_ID}`)}
                  className="sendTo"
                >
                  {e.PRODUCT_ID}
                </th>
                <th
                  onClick={() => router.push(`/purchaser/${e.PURCHASER_ID}`)}
                  className="sendTo"
                >
                  {e.PURCHASER_ID}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
