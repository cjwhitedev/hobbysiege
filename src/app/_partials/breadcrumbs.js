import './../_styles/breadcrumbs.css'
import Link from 'next/link';

export default function Breadcrumbs({pageName}) {
  return (
    <div className='container'>
      <ul className='breadcrumbs'>
          <li><Link href={`/`}>home</Link></li>
          <li><Link href={`/blog`}>blog</Link></li>
          <li>{pageName}</li>
      </ul>
    </div>
  );
}