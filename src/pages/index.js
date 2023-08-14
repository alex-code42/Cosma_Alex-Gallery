import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import useSWR from "swr";
import Link from "next/link";
import Spotlight from "@/components/Spotlight";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  // const [images, updateImages] = useState([]);

  if (error) {
    return <div>error occurred: {error}</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  const spotlight = data[Math.floor(Math.random() * 11)];
  console.log("spotlight", spotlight);

  return (
    <>
      <h1>Spotlight</h1>
      <Spotlight
        image={spotlight.imageSource}
        artist={spotlight.artist}
        title={spotlight.name}
      />
    </>
  );
}
