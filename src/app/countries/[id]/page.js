"use client";
import { useParams } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import "../../table.css";
export default function page() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const useparams = useParams();

  useEffect(() => {
    fetch(`/api/countries/${useparams.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  console.log(data);
  return (
    <>
      <h1>Country Name: {data && data[0].NAME}</h1>
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
    </>
  );
}
