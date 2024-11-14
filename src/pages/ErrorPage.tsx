import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div
      id="error-page"
      className="container mx-auto flex h-[80vh] flex-col items-center justify-center px-8"
    >
      <h1>Ooops!</h1>
      <p className="text-2xl font-bold text-purple-700">Sorry, this page is 404.</p>
      <Link
        to="/"
        className="w-full text-center rounded-2xl bg-purple-700 px-6 py-4 text-2xl text-white sm:w-40"
      >
        Home Page
      </Link>
    </div>
  );
}
