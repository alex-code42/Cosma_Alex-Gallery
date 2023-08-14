import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import useSWR from "swr";
import Link from "next/link";
import Spotlight from "@/components/Spotlight";
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ["latin"] });
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const artURL = "https://example-apis.vercel.app/api/art";

export default function Home() {
  // const [images, updateImages] = useState([]);
  const { data, error, isLoading } = useSWR(artURL, fetcher);

  if (error) {
    return <div>error occurred: {error}</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  // updateImages(data);
  // console.log(images);
  console.log("data:", data);

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
