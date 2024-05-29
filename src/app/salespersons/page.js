"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../table.css";
export default function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/salespersons")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h1>Sales Persons</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Address</th>
            <th>Contact Info</th>
            <th>Date Employed</th>
            <th>Date Left</th>
            <th>Distribution Center Id</th>
            <th>Email </th>
            <th>Fname </th>
            <th>Lname </th>
            <th>Phone No </th>
            <th>Salary </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e) => {
            const currentDate = new Date(e.DATE_EMPLOYED);
            const formattedCurrentDate = currentDate.toLocaleString();
            return (
              <tr key={e.ID}>
                <td
                  onClick={() => router.push(`/salespersons/${e.ID}`)}
                  className="sendTo"
                >
                  {e.ID}
                </td>
                <td>{e.ADDRESS}</td>
                <td>{e.CONTACT_INFO}</td>
                <th>{formattedCurrentDate}</th>
                <th>{e.DATE_LEFT ? e.DATE_LEFT : "NULL"}</th>
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
                <th>{e.EMAIL}</th>
                <th>{e.FNAME}</th>
                <th>{e.LNAME}</th>
                <th>{e.PHONENUMBER}</th>
                <th>{e.SALARY}$</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
