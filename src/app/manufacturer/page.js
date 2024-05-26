"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../table.css";
export default function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/manufacturer")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h1>Manufacturers</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Address</th>
            <th>City</th>
            <th>Name</th>
            <th>Contact Info</th>
            <th>Email</th>
            <th>Phonenumber</th>
            <th>Postal Code</th>
            <th>Street Name</th>
            <th>Street Number</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e) => {
            return (
              <tr key={e.ID}>
                <td
                  onClick={() => router.push(`/manufacturer/${e.ID}`)}
                  className="sendTo"
                >
                  {e.ID}
                </td>
                <th>{e.ADDRESS}</th>
                <th>{e.CITY}</th>
                <th>{e.NAME}</th>
                <th>{e.CONTACT_INFO}</th>
                <th>{e.EMAIL}</th>
                <th>{e.PHONENUMBER}</th>
                <th>{e.POSTAL_CODE}</th>
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
