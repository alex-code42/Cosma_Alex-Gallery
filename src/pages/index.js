import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Spotlight from "@/components/Spotlight";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, error, isLoading, artPiecesState }) {
  // const [images, updateImages] = useState([]);

  if (error) {
    return <div>error occurred: {error}</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="abstand">
      <h1>Spotlight</h1>
      <Spotlight data={data} artPiecesState={artPiecesState} />
    </div>
  );
}
