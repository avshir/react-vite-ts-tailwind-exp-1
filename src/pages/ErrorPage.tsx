import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div id="error-page" className="flex h-[80vh] flex-col items-center justify-center">
      <h1>Ooops!</h1>
      <p className="text-2xl font-bold text-purple-700">Sorry, this page is 404.</p>
      <Link to="/" className="text-2xl bg-purple-700 text-white px-6 py-4 rounded-2xl">Home Page</Link>
    </div>
  );
}
