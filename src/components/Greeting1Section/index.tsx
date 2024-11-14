// https://www.creative-tim.com/twcomponents/component/heading

const img_src =
  'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';

export default function Greeting1Section() {
  return (
    <div className="bg-indigo-700">
      <div className="lg:grid lg:grid-cols-2">
        <div className="mx-auto max-w-3xl px-10 py-24 lg:max-w-md lg:px-0">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-100">
            <span className="block">Ready to dive in?</span>
            <span className="block">Start your free trial today.</span>
          </h2>
          <p className="mt-5 text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="mt-5 inline-block shadow">
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-white px-4 py-3 font-medium text-indigo-500 hover:bg-indigo-100"
            >
              Sign up for free
            </a>
          </div>
        </div>
        <div className="lg:relative lg:mt-16">
          <img
            className="h-60 w-full object-cover object-center lg:absolute lg:inset-0 lg:h-full lg:rounded-tl-md"
            src={img_src}
            alt="nature"
          />
        </div>
      </div>
    </div>
  );
}
