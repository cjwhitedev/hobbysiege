import Image from "next/image";
import styles from "./page.module.css";
import nextlogo from "../../public/next.svg";
import vercellogo from "../../public/vercel.svg";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className="wrapper">
        <h1>title</h1>
        <p>
          Bacon ipsum dolor amet shankle corned beef tongue leberkas, jerky picanha meatball tri-tip sausage filet mignon sirloin venison. Turkey buffalo ribeye bresaola ham hock. Pork belly bacon pork chop buffalo tail shank pastrami ribeye jowl andouille venison leberkas porchetta. T-bone tenderloin ham hock pig corned beef tri-tip frankfurter chicken prosciutto. Tenderloin porchetta chuck short ribs shank.
        </p>
        <figure>
          <Image
            className="dithered"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuser-images.githubusercontent.com%2F9162068%2F186179442-60d12f26-b5a5-498b-849c-69b1e46a7f02.png&f=1&nofb=1&ipt=7a79654a8bce2465a3aa6c904b4c94bc6c37013e43cda87e12b93bdec960e6f3"
            alt="example image"
            width={220}
            height={262}
          />
        </figure>
        <p>Pig sausage tenderloin beef ribs corned beef bresaola venison. Filet mignon pork belly jerky pork ribeye. Ball tip turkey ground round pork. Sirloin short ribs chislic, filet mignon cow shank andouille. Tenderloin short ribs salami ribeye ground round frankfurter swine pork chop kielbasa spare ribs. Andouille prosciutto pig sausage t-bone, fatback cupim chicken drumstick pork jowl alcatra sirloin.</p>
      </main>
    </div>
  );
}
