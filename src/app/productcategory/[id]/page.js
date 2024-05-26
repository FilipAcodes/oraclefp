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
    fetch(`/api/productcategory/${useparams.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

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
                <td
                  onClick={() => router.push(`/productcategory/${e.ID}`)}
                  className="sendTo"
                >
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
