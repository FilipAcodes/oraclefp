"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../table.css";
export default function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/distributioncenters")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

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
                <td
                  onClick={() => router.push(`/distributioncenters/${e.ID}`)}
                  className="sendTo"
                >
                  {e.ID}
                </td>
                <th>{e.ADDRESS}</th>
                <th>{e.CITY}</th>
                <th>{e.COSTOFOPERATIONS} $</th>
                <th
                  onClick={() => router.push(`/countries/${e.COUNTRY_ID}`)}
                  className="sendTo"
                >
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
