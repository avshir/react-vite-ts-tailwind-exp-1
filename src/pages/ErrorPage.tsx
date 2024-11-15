import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div
      id="error-page"
      className="mx-auto flex h-[80vh] max-w-7xl flex-col items-center justify-center px-8"
    >
      <h1>Ooops!</h1>
      <p className="text-2xl font-bold text-purple-700">Sorry, this page is 404.</p>
      <Link
        to="/"
        className="w-full rounded-2xl bg-purple-700 px-6 py-4 text-center text-2xl text-white hover:bg-purple-500 hover:text-white sm:w-40"
      >
        Home Page
      </Link>
    </div>
  );
}
