import { PatternIcon, YoutubeColorIcon, GoogleIcon, GithubIcon } from '../Icons';

export default function IconsComponent() {
  return (
    <section className="mx-auto max-w-7xl py-8">
      <h3>IconsList component</h3>
      <div className="flex flex-wrap justify-center gap-6">
        <svg
          className="h-6 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 24 24"
        >
          <path d="M23.498 6.186a3.02 3.02 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.02 3.02 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.02 3.02 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.02 3.02 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z"></path>
        </svg>
        <YoutubeColorIcon className="h-6 w-6" />
        <YoutubeColorIcon width={24} height={24} fill="green" />
        <GoogleIcon className="h-6 w-6" fill="orange" />
        <GoogleIcon className="h-6 w-6" />
        <GithubIcon className="h-6 w-6" />
        <GithubIcon className="h-6 w-6 flex-none fill-zinc-500 transition hover:fill-teal-500" />
        <PatternIcon />
        <PatternIcon stroke="orange" viewBox="0 0 124 124" width={36} height={36} />
      </div>
    </section>
  );
}
