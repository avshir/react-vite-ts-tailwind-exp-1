// Split with image
// https://tailwindui.com/components/marketing/sections/cta-sections
// text-indigo-400
// bg-indigo-600;
// text-base / 7; //leigh-height: 28px
// max-w-7xl // max-width: 80rem; /* 1280px */

//gradient:
// for bg
// bg-gradient-to-r from-indigo-300 to-indigo-600
// for text
// bg-gradient-to-r from-indigo-300 to-indigo-600 bg-clip-text text-transparent

export default function CTASections() {
  return (
    <div className="relative bg-gray-900">
      <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          alt="puples"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 md:py-32">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24">
          <h2 className="text-left text-base font-semibold text-indigo-400">
            Award winning support
          </h2>
          <p className="mt-2 text-5xl font-semibold text-white">We’re here to help</p>
          <p className="mt-6 text-base/7 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
            sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
            volutpat quisque ut interdum tincidunt duis.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="rounded-md bg-white/10 px-4 py-3 text-left text-sm font-semibold text-white hover:bg-white/20"
            >
              Visit the help center
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
