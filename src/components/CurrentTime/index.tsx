import { useEffect, useState } from 'react';

export default function CurrentTime() {
  const [curTime, setCurTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => setCurTime(new Date()), 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <section className="mb-4 w-32">
      <h3 className="mb-4 text-left">Current time</h3>
      <div className="w-32 rounded-lg border-2 border-purple-700/50 px-6 py-3 text-2xl font-bold text-purple-700">
        <time dateTime="HH:MM:SS">{curTime.toLocaleTimeString('en-GB')}</time>
      </div>
    </section>
  );
}
