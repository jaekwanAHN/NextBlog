import Link from 'next/link';

const Sidebar = () => {
  const tempArray = ['1', '2', '3'];

  return (
    <aside className="sidebar">
      <ul>
        {tempArray.map((value) => {
          return (
            <li>
              <Link href={`post/${value}`}>{value}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
