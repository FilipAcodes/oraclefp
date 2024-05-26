"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../table.css";
export default function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/purchaser")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  console.log(data);
  return (
    <main>
      <h1>Purchaser</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Address</th>
            <th>Contact Info</th>
            <th>Date Employed</th>
            <th>Date Left</th>
            <th>Distribution Center Id</th>
            <th>Email</th>
            <th>Fname</th>
            <th>Lname</th>
            <th>Phone No</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e) => {
            const employedDate = new Date(e.DATE_EMPLOYED);
            const formattedEmployedDate = employedDate.toLocaleString();
            return (
              <tr key={e.ID}>
                <td
                  onClick={() => router.push(`/purchaser/${e.ID}`)}
                  className="sendTo"
                >
                  {e.ID}
                </td>
                <th>{e.ADDRESS}</th>
                <th>{e.CONTACT_INFO}</th>
                <th>{formattedEmployedDate}</th>
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
