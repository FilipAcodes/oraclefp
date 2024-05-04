"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../table.css";
export default function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    fetch("/api/customer")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h1>Customers</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Fname</th>
            <th>Lname</th>
            <th>Address</th>
            <th>City</th>
            <th>Country Id</th>
            <th>Email</th>
            <th>Phone #</th>
            <th>Postal Code</th>
            <th>Street Name</th>
            <th>Street Number</th>
            <th>Apartment Number</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e) => {
            return (
              <tr key={e.ID}>
                <td onClick={() => router.push(`/customer/${e.ID}`)}>{e.ID}</td>
                <th>{e.FNAME}</th>
                <th>{e.LNAME}</th>
                <th>{e.ADDRESS}</th>
                <th>{e.CITY}</th>
                <th onClick={() => router.push(`/countries/${e.COUNTRY_ID}`)}>
                  {e.COUNTRY_ID}
                </th>
                <th>{e.EMAIL}</th>
                <th>{e.PHONENUMBER}</th>
                <th>{e.POSTAL_CODE}</th>
                <th>{e.STREET_NAME}</th>
                <th>{e.STREET_NUMBER}</th>
                <th>{e.APART_NUMBER}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
