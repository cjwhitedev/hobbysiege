import Image from "next/image";
import Link from 'next/link';
import Hero from "./_partials/hero";
import heroImage from "../../public/images/backyard.jpeg";


export default async function Home() {
  return (
    <div className="page">
      <Hero imagePath={heroImage}/>
      <div className="wrapper">
        <main className="container">
          <h1>You Have Survived.</h1>
          <p>If you are here, it means you have survived.</p>
        </main>
      </div>
    </div>
  );
}