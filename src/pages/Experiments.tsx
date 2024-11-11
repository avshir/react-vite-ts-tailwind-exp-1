import { useState } from 'react';
import CurrentTime from '../components/CurrentTime';
import TabSection from '../components/TabSection';
import ModalPortal from '../components/ModalPortal';
import Button from '../components/Button';
import ButtonList from '../components/ButtonList';
import IconsList from '../components/IconsList';
import Footer from '../components/Footer';

export default function Experiments() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <main className="container mx-auto p-8">
        <h1>
          Experiments with <span className="text-purple-700">React</span>
        </h1>
        <CurrentTime />
        <TabSection initTab="tab-2" />
        <h3>Modal in Portal</h3>
        <Button onClick={openModal} isActive={true}>
          Show Modal in Portal
        </Button>
        {showModal && (
          <ModalPortal onClose={closeModal} isOpen={showModal}>
            <h2>Modal dialog</h2>
            <p>This Modal use createPortal and dialog HTML</p>
            <p> Added some info in modal portal dialog </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad eveniet officiis
              iure iste nulla! Fugiat autem beatae, delectus aperiam animi, provident corrupti
              molestias odit dolor in ea fugit neque eveniet. Quam, iusto. Sint repellendus unde
              totam facilis itaque nam asperiores, autem consequuntur ad provident nulla, nemo in
              eligendi quis corrupti vitae dolorem, blanditiis temporibus! Ad placeat minus sit
              sapiente aperiam ea incidunt ipsa accusamus earum! Assumenda perferendis dignissimos
              laboriosam illum quia? Impedit, aperiam eveniet. Accusamus, iste vitae magnam labore
              exercitationem dignissimos consectetur veniam pariatur quos repellendus
              necessitatibus! Possimus ullam libero et laboriosam est aliquid exercitationem natus
              provident quo tenetur!
            </p>
          </ModalPortal>
        )}
        <ButtonList />
        <IconsList />
      </main>
      <Footer />
    </>
  );
}
