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
    fetch(`/api/distributioncenters/${useparams.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  console.log(data);
  return (
    <main>
      <h1>Distribution Centers</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Address</th>
            <th>City</th>
            <th>Cost of Operations</th>
            <th>Country Id</th>
            <th>Employee Pay</th>
            <th>Lease</th>
            <th>Postal Code</th>
            <th>Revenue</th>
            <th>Street Name</th>
            <th>Stret Number</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e) => {
            return (
              <tr key={e.ID}>
                <td>{e.ID}</td>
                <th>{e.ADDRESS}</th>
                <th>{e.CITY}</th>
                <th>{e.COSTOFOPERATIONS} $</th>
                <th onClick={() => router.push(`/countries/${e.COUNTRY_ID}`)}>
                  {e.COUNTRY_ID}
                </th>
                <th>{e.EMPLOYEE_PAY}</th>
                <th>{e.LEASE}</th>
                <th>{e.POSTAL_CODE}</th>
                <th>{e.REVENUE}</th>
                <th>{e.STREET_NAME}</th>
                <th>{e.STREET_NUMBER}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
