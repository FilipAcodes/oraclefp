"use client";
import { useState, useEffect } from "react";
export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("/api/Read")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);
  console.log(data);
  return (
    <main>
      {data?.map((x) => {
        return (
          <div>
            <p>{x.FIRST_NAME}</p>
            <p>{x.LAST_NAME}</p>
            <p>{x.DEPT_ID}</p>
          </div>
        );
      })}
    </main>
  );
}
