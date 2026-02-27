import Image from "next/image";
import Link from 'next/link';

export default async function transmissions() {

  return (
    <div className="page">
      <div className="wrapper">
        <main className="container">
            <h1>Transmissions Page</h1>
            <ul>
              <li key="transmissions-test-page">
                <Link href={`/transmissions/transmissions-test-page`}>Transmissions Test Page</Link>
              </li>
            </ul>
        </main>
      </div>
    </div>
  );
}