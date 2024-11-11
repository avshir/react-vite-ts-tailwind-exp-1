import { GithubIcon } from '../Icons';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-lg text-white">
      <div className="container mx-auto flex justify-between p-8">
        <div>Footer </div>
        <div className="flex gap-2">
          <a className="flex items-center gap-4 text-purple-300" href="https://github.com/avshir">
            <GithubIcon className="h-6 w-6" fill="#A775F1" />
            avhsir
          </a>
          <span>|&nbsp; 2024</span>
        </div>
      </div>
    </footer>
  );
}


