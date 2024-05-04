"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../table.css";
export default function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/purchaseorder")
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
                <td onClick={() => router.push(`/purchaseorder/${e.ID}`)}>
                  {e.ID}
                </td>
                <th
                  onClick={() =>
                    router.push(
                      `/distributioncenters/${e.DISTRIBUTIONCENTER_ID}`
                    )
                  }
                >
                  {e.DISTRIBUTIONCENTER_ID}
                </th>
                <th
                  onClick={() =>
                    router.push(`/manufacturer/${e.MANUFACTURER_ID}`)
                  }
                >
                  {e.MANUFACTURER_ID}
                </th>
                <th>{e.PRICE}$</th>
                <th onClick={() => router.push(`/product/${e.PRODUCT_ID}`)}>
                  {e.PRODUCT_ID}
                </th>
                <th onClick={() => router.push(`/purchaser/${e.PURCHASER_ID}`)}>
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
