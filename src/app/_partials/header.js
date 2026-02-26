import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="container">
          <Link className='mark' href={`/`}>hobbysiege</Link>
        </div>
      </div>
    </header>
  );
}