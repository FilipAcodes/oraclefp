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
      <p>This is countries</p>
    </main>
  );
}
