import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="flex justify-center items-center">
      <div>Oops, nothing here</div>
      <Link to="/">
        <button>Go back to home page</button>
      </Link>
    </main>
  );
}
