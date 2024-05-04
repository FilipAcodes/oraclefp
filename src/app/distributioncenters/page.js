"use client";
import { useState, useEffect } from "react";
export default function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("/api/Read")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data.data);
  //       setLoading(false);
  //     });
  // }, []);
  console.log(data);
  return (
    <main>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data?.map((x) => (
          <div key={x.EMPLOYEE_ID}>
            <p>
              First Name: {x.FIRST_NAME} Last Name:{x.LAST_NAME}
            </p>
            <p>Salary: {x.SALARY}$</p>
          </div>
        ))
      )}
    </main>
  );
}
