import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";
import image from "../../public/images/dithered.jpeg";


export default async function Home() {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <main className="container">
          <h1>title</h1>
          <p>
            Bacon ipsum dolor amet shankle corned beef tongue leberkas, jerky picanha meatball tri-tip sausage filet mignon sirloin venison. Turkey buffalo ribeye bresaola ham hock. Pork belly bacon pork chop buffalo tail shank pastrami ribeye jowl andouille venison leberkas porchetta. T-bone tenderloin ham hock pig corned beef tri-tip frankfurter chicken prosciutto. Tenderloin porchetta chuck short ribs shank.
          </p>
          <ul>
            <li key="welcome">
              <Link href={`/blog/welcome`}>welcome</Link>
            </li>
            <li key="a-new-post">
              <Link href={`/blog/a-new-post`}>a new post</Link>
            </li>
          </ul>
          <figure>
            <Image
              className="dithered"
              src={image}
              alt="example image"
              width={500}
              height={500}
            />
          </figure>
          <p>Pig sausage tenderloin beef ribs corned beef bresaola venison. Filet mignon pork belly jerky pork ribeye. Ball tip turkey ground round pork. Sirloin short ribs chislic, filet mignon cow shank andouille. Tenderloin short ribs salami ribeye ground round frankfurter swine pork chop kielbasa spare ribs. Andouille prosciutto pig sausage t-bone, fatback cupim chicken drumstick pork jowl alcatra sirloin.</p>
        </main>
      </div>
    </div>
  );
}