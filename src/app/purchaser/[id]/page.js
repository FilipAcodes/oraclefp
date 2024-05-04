"use client";
import { useParams } from "next/navigation";
export default function page() {
  return <p>Post: {useParams().id}</p>;
}
