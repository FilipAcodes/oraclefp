"use client";
import React from "react";
import { useState, useEffect } from "react";
import "../table.css";

export default function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/countries")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h1>Countries</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e) => {
            return (
              <tr key={e.ID}>
                <td>{e.ID}</td>
                <td>{e.NAME}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
