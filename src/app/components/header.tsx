'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header>
      헤더 메뉴
      <button>
        <Link href="/">홈으로</Link>
      </button>
      <button>
        <Link href="/post">글목록</Link>
      </button>
    </header>
  );
};

export default Header;
