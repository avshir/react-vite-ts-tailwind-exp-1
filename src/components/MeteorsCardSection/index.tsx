// use tailwindcss-animated
// use Aceternity UI for MeteorsCard
import { MeteorsCard } from './MeteorsCard';

export default function MeteorsCardSection() {
  return (
    <section className="mx-auto max-w-7xl p-8">
      <div className="flex justify-center gap-6">
        <div className="animate-fade-up animate-delay-100 animate-once">
          <MeteorsCard />
        </div>
        <div className="animate-fade-up animate-delay-300 animate-once">
          <MeteorsCard />
        </div>
        <div className="animate-fade-up animate-delay-500 animate-once">
          <MeteorsCard />
        </div>
      </div>
    </section>
  );
}
