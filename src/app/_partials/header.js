import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="container">
          <ul className='main-nav'>
            <li><Link className='mark' href={`/`}>hobbysiege</Link></li>
            <li><Link href={`/about`}>about</Link></li>
            <li><Link href={`/blog`}>blog</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}