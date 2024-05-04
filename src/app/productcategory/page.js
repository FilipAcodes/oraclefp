"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../table.css";
export default function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/productcategory")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  console.log(data);
  return (
    <main>
      <h1>Product Category</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e) => {
            return (
              <tr key={e.ID}>
                <td onClick={() => router.push(`/productcategory/${e.ID}`)}>
                  {e.ID}
                </td>
                <th>{e.DESCRIPTION}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
