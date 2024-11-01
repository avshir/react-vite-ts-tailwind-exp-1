import danialImg from './../assets/images/image-daniel.jpg';
import jeanetteImg from './../assets/images/image-jeanette.jpg';
import jonathanImg from './../assets/images/image-jonathan.jpg';
import kiraImg from './../assets/images/image-kira.jpg';
import patrickImg from './../assets/images/image-patrick.jpg';

export default function TailwindPage() {
  return (
    <main className="mx-auto max-w-[1200px] p-8">
      <h1>Tailwind grid</h1>
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        <section className="card bg-primary bg-[url('assets/svg/bg-pattern-quotation.svg')] bg-[right_2rem_top] bg-no-repeat text-white shadow-2xl md:col-span-2 lg:col-span-2">
          <div className="card-container-name">
            <img src={danialImg} alt="daniel" className="card-photo" />
            <span className="card-name">Daniel Clifford</span>
            <span className="card-edu">Verified Graduate</span>
          </div>
          <p className="card-info">
            I received a job offer mid-course, and the subjects I learned were current, if not more
            so, in the company I joined. I honestly feel I got every penny's worth.
          </p>
          <p className="card-description">
            I was an EMT for many years before I joined the bootcamp. I've been looking to make a
            transition and have heard some people who had an amazing experience here. I signed up
            for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
            The next 12 weeks was the best - and most grueling - time of my life. Since completing
            the course, I've successfully switched careers, working as a Software Engineer at a VR
            startup.
          </p>
        </section>
        <section className="card bg-primary-darkGrayishBlue text-white">
          <div className="card-container-name">
            <img src={jonathanImg} alt="Jonathan" className="card-photo" />
            <span className="card-name">Jonathan Walters</span>
            <span className="card-edu">Verified Graduate</span>
          </div>
          <p className="card-info">The team was very supportive and kept me motivated</p>
          <p className="card-description">
            I started as a total newbie with virtually no coding skills. I now work as a mobile
            engineer for a big company. This was one of the best investments I've made in myself.
          </p>
        </section>
        <section className="card bg-white text-primary-darkBlackishBlue">
          <div className="card-container-name">
            <img src={jeanetteImg} alt="jean" className="card-photo" />
            <span className="card-name">Jeanette Harmon</span>
            <span className="card-edu text-black/50">Verified Graduate</span>
          </div>
          <p className="card-info">An overall wonderful and rewarding experience</p>
          <p className="card-description text-black/50">
            Thank you for the wonderful experience! I now have a job I really enjoy, and make a good
            living while doing something I love.
          </p>
        </section>
        <section className="card bg-primary-darkBlackishBlue text-white md:col-span-2 lg:col-span-2">
          <div className="card-container-name">
            <img src={patrickImg} alt="patrick" className="card-photo" />
            <span className="card-name">Patrick Abrams</span>
            <span className="card-edu">Verified Graduate</span>
          </div>
          <p className="card-info">
            Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from
            them and learning from their experiences was easy.
          </p>
          <p className="card-description">
            The staff seem genuinely concerned about my progress which I find really refreshing. The
            program gave me the confidence necessary to be able to go out in the world and present
            myself as a capable junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart and amazing people.
          </p>
        </section>
        <section className="card bg-white text-primary-darkBlackishBlue md:col-span-3 md:row-start-2 lg:col-start-4 lg:row-span-2 lg:row-start-1">
          <div className="card-container-name">
            <img src={kiraImg} alt="kira" className="card-photo" />
            <span className="card-name">Kira Whittle</span>
            <span className="card-edu text-black/50">Verified Graduate</span>
          </div>
          <p className="card-info">Such a life-changing experience. Highly recommended!</p>
          <p className="card-description text-black/50">
            Before joining the bootcamp, I've never written a line of code. I needed some structure
            from professionals who can help me learn programming step by step. I was encouraged to
            enroll by a former student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They were very hands-on and
            I never had to wait long for assistance. The agile team project, in particular, was
            outstanding. It took my learning to the next level in a way that no tutorial could ever
            have. In fact, I've often referred to it during interviews as an example of my
            developent experience. It certainly helped me land a job as a full-stack developer after
            receiving multiple offers. 100% recommend!
          </p>
        </section>
      </div>
    </main>
  );
}
