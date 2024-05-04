"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../table.css";
export default function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/product")
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
            <th>Color</th>
            <th>Description</th>
            <th>Manufacturer Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Product Category Id</th>
            <th>QTE</th>
            <th>Target Demographic</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e) => {
            return (
              <tr key={e.ID}>
                <td onClick={() => router.push(`/product/${e.ID}`)}>{e.ID}</td>
                <th>{e.COLOR}</th>
                <th>{e.DESCRIPTION}</th>
                <th
                  onClick={() =>
                    router.push(`/manufacturer/${e.MANUFACTURER_ID}`)
                  }
                >
                  {e.MANUFACTURER_ID}
                </th>
                <th>{e.NAME}</th>
                <th>{e.PRICE}</th>
                <th
                  onClick={() =>
                    router.push(`/productcategory/${e.PRODUCTCATEGORY_ID}`)
                  }
                >
                  {e.PRODUCTCATEGORY_ID}
                </th>
                <th>{e.QTE}</th>
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
