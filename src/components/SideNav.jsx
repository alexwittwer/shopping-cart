export default function SideNav() {
  return (
    <nav className="max-w-24 p-5 flex">
      <ul className="flex flex-col gap-5">
        <li>
          <button className="w-full">Popular</button>
        </li>
        <li>
          <button>Featured</button>
        </li>
      </ul>
    </nav>
  );
}
