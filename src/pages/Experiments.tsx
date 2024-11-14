import { useState, useRef } from 'react';

import CurrentTime from '../components/CurrentTime';
import TabSection from '../components/TabSection';
import ModalPortal from '../components/ModalPortal';
import Button from '../components/Button';
import ButtonList from '../components/ButtonList';
import IconsList from '../components/IconsList';
import ButtonToTop from '../components/ButtonToTop';
import Footer from '../components/Footer';
import PricingSection from '../components/PricingSection';
import CTASections from '../components/CTASections/';
import Greeting1Section from '../components/Greeting1Section';

import { articles } from '../data/articles';

export default function Experiments() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const blogExperimentsRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <main className="container mx-auto p-8">
        <h1>
          Experiments with <span className="text-purple-700">React</span>
        </h1>
        <div className="flex gap-4" id="button-group-experiments">
          <Button
            isActive={true}
            isRipple={true}
            onClick={() => {
              blogExperimentsRef.current?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
            className="bg-orange-500"
          >
            {' '}
            Go to smooth "Blog Experiments section" with ripple effect
          </Button>
          <Button isRipple={true} isActive={true} onClick={() => alert('111')}>
            My button with with ripple effect
          </Button>
          <Button
            isActive={true}
            onClick={() => alert('222')}
            className="rounded-full bg-orange-500"
          >
            My button with props
          </Button>
        </div>
        <CurrentTime />
        <TabSection initTab="tab-2" />
        <div id="modal-portal-experiments">
          <h3>Modal in Portal</h3>
          <Button onClick={openModal} isActive={true} isRipple={true}>
            Show Modal in Portal
          </Button>
          {showModal && (
            <ModalPortal onClose={closeModal} isOpen={showModal}>
              <h2>Modal dialog</h2>
              <p>This Modal use createPortal and dialog HTML</p>
              <p> Added some info in modal portal dialog </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad eveniet
                officiis iure iste nulla! Fugiat autem beatae, delectus aperiam animi, provident
                corrupti molestias odit dolor in ea fugit neque eveniet. Quam, iusto. Sint
                repellendus unde totam facilis itaque nam asperiores, autem consequuntur ad
                provident nulla, nemo in eligendi quis corrupti vitae dolorem, blanditiis
                temporibus! Ad placeat minus sit sapiente aperiam ea incidunt ipsa accusamus earum!
                Assumenda perferendis dignissimos laboriosam illum quia? Impedit, aperiam eveniet.
                Accusamus, iste vitae magnam labore exercitationem dignissimos consectetur veniam
                pariatur quos repellendus necessitatibus! Possimus ullam libero et laboriosam est
                aliquid exercitationem natus provident quo tenetur!
              </p>
            </ModalPortal>
          )}
        </div>
        <ButtonList />
        <IconsList />
        <section ref={blogExperimentsRef} id="blog-experiments">
          <h2>Blog Experiments</h2>
          {articles.map((article) => (
            <article key={article.id} id={`article-${article.id}`}>
              <h3>{article.title}</h3>
              <p>{article.text}</p>
            </article>
          ))}
        </section>
        <section className="flex h-80 items-center justify-center bg-gradient-to-r from-indigo-700 to-black">
          <p className="bg-gradient-to-r from-gray-500 to-gray-50 bg-clip-text text-4xl font-semibold text-transparent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </section>
        <CTASections />
        <PricingSection />
        <Greeting1Section />
        <div className="mt-4 text-right">
          <ButtonToTop>Jump to top ↑</ButtonToTop>
        </div>
      </main>
      <Footer />
    </>
  );
}
