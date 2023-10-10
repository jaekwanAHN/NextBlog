'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex decoration-red-200 justify-center">
      헤더 메뉴
      <button>
        <Link href="/">홈으로</Link>
      </button>
    </header>
  );
};

export default Header;
