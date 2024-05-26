"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../table.css";
export default function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/specialclient")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  return (
    <main>
      <h1>Special Client discount view</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Category</th>
            <th>Color</th>
            <th>Description</th>
            <th>Discounted Price</th>
            <th>Name</th>
            <th>Qte</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e) => {
            return (
              <tr key={e.ID}>
                <td>{e.ID}</td>
                <td>{e.CATEGORY}</td>
                <td>{e.COLOR}</td>
                <td>{e.DESCRIPTION}</td>
                <td>{e.DISCOUNTED_PRICE}$</td>
                <th>{e.NAME}</th>
                <th>{e.QTE}</th>
                <th>{e.WEIGHT}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
