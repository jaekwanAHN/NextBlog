const Sidebar = () => {
  const tempArray = ['item1', 'item2', 'item3'];

  return (
    <aside className="sidebar">
      <ul>
        {tempArray.map((value) => {
          return <li>{value}</li>;
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
