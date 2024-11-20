import { useInView } from 'react-intersection-observer';

import { DotBackgroundDemo } from '../components/DotBackground';
import { Meteors } from '../components/ui/meteors';
import MeteorsCardSection from '../components/MeteorsCardSection';
import LazyAnimationSection from '../components/LazyAnimationSection';
import { InfiniteMovingCardsDemo } from '../components/InfiniteMovingCardsDemo';

export default function AnimatedPage() {
  const { ref: refRocketSection, inView: isVisibleRocketSection } = useInView({
    /* Optional options */
    // threshold: 0.5,
    // triggerOnce: false,
    // rootMargin: '100px 0px',
  });
  const { ref: refTestSection1, inView: isVisibleTestSection1 } = useInView();
  const { ref: refMeteorsCardSection2, inView: isVisibleMeteorsCardSection2 } = useInView({
    triggerOnce: false,
    rootMargin: '50px 0px',
  });

  return (
    <main className="bg-gray-800">
      {/* meteors-section */}
      <div className="relative mx-auto flex h-[25vh] w-80 items-center overflow-hidden bg-gray-800">
        <h1 className="animate-fade bg-gradient-to-r from-gray-50 to-purple-900 bg-clip-text text-gray-300 text-transparent animate-duration-[4000ms] animate-once animate-ease-out">
          Animated Page with Aceternity UI and Framer motion
        </h1>
        <Meteors number={40} />
      </div>
      {/* DotBackgroundDemo-section */}
      <DotBackgroundDemo>
        <div className="animate-fade-up animate-delay-500 animate-duration-1000 animate-once">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Animated Page with Aceternity UI and Framer motion
          </h1>
          <p className="text-3xl text-black/60">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, atque? Amet earum
            dolorum ab itaque id, debitis deleniti facilis quae?
          </p>
        </div>
      </DotBackgroundDemo>
      <MeteorsCardSection />
      <LazyAnimationSection />
      <div className="mx-auto max-w-3xl border-t border-purple-300 p-8"></div>
      {/* rocket-section */}
      <section id="rocket-section" className="bg-purple-300">
        <div className="mx-auto max-w-7xl p-8">
          <h2 className="text-center">Magic 🪄 in rocket-section</h2>
          <p ref={refRocketSection}>
            <span className={`rocket ${isVisibleRocketSection ? 'animateRocket' : ''}`}>🚀</span>
          </p>
        </div>
      </section>
      {/* test-section-1 */}
      <section id="test-section-1" className="bg-gray-300">
        <div className="mx-auto max-w-7xl p-8">
          <h2 className="text-center">Magic 🪄 in test-section-1</h2>
          <p ref={refTestSection1}>
            {isVisibleTestSection1 && (
              <div className="animate-fade-up animate-delay-500 animate-duration-1000 animate-once">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dignissimos
                aperiam similique temporibus dolores dolore libero, laborum error eligendi ex
                consequuntur, perferendis sed quos debitis ducimus asperiores sint accusantium?
                Enim, maiores quia sunt incidunt fuga natus laboriosam nobis repellat necessitatibus
                nihil aut nemo autem ipsum minima perferendis quasi. Ipsam, temporibus.
              </div>
            )}
          </p>
        </div>
      </section>
      {/* meteorsCard-section-2 */}
      <div id="meteorsCard-section-2" className="min-h-40" ref={refMeteorsCardSection2}>
        {isVisibleMeteorsCardSection2 && <MeteorsCardSection />}
      </div>
      <InfiniteMovingCardsDemo />
    </main>
  );
}
