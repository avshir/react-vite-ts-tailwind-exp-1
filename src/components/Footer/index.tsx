import { GithubIcon } from '../Icons';

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="mx-auto flex w-full max-w-7xl justify-between p-8 text-lg text-white">
        <div>Footer </div>
        <div className="flex gap-2">
          <a
            className="group flex items-center text-purple-300 transition"
            href="https://github.com/avshir"
          >
            <GithubIcon className="h-6 w-6 fill-purple-300 transition group-hover:fill-purple-500" />
            <span className="ml-2 text-purple-300 transition group-hover:text-purple-500">
              avhsir
            </span>
          </a>
          <span>|&nbsp; 2024</span>
        </div>
      </div>
    </footer>
  );
}
