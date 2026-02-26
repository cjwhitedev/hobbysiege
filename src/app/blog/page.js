import Image from "next/image";
import Link from 'next/link';

export default async function Blog() {

  return (
    <div className="page">
      <div className="wrapper">
        <main className="container">
            <h1>Blog Page</h1>
            <ul>
              <li key="blog-test-page">
                <Link href={`/blog/blog-test-page`}>a new post</Link>
              </li>
            </ul>
        </main>
      </div>
    </div>
  );
}