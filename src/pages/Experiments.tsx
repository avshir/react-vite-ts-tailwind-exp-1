import CurrentTime from '../components/CurrentTime';
import TabSection from '../components/TabSection';

export default function Experiments() {
  return (
    <main className="container mx-auto p-8">
      <h1>
        Experiments with <span className="text-purple-700">React</span>
      </h1>
      <CurrentTime />
      <TabSection initTab="tab-2" />
    </main>
  );
}
