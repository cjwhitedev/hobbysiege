import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="container">
          <ul className='main-nav'>
            <li><Link className='mark' href={`/`}>blea.cc<span>/</span></Link></li>
            <li><Link href={`/transmissions`}>transmissions</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}