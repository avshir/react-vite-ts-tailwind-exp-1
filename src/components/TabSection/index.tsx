import { useState } from 'react';
import Button from '../Button';

interface TabSectionProps {
  initTab?: string;
}

export default function TabSection({ initTab = 'tab-1' }: TabSectionProps) {
  const [activeTab, setTab] = useState(initTab);

  const toggleTab = (currentTab: string) => {
    setTab(currentTab);
  };

  return (
    <section className="tabSection mb-4">
      <h3>Tab Section</h3>
      <div className="mb-4 flex justify-center gap-3">
        <Button isActive={activeTab === 'tab-1'} onClick={() => toggleTab('tab-1')}>
          Tab 1
        </Button>
        <Button isActive={activeTab === 'tab-2'} onClick={() => toggleTab('tab-2')}>
          Tab 2
        </Button>
        <Button isActive={activeTab === 'tab-3'} onClick={() => toggleTab('tab-3')}>
          Tab 3
        </Button>
      </div>

      <div className="tab-container mx-auto w-64">
        {activeTab === 'tab-1' && (
          <>
            <p>
              <span className="font-bold">Tab 1</span> info text. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Fugit necessitatibus earum commodi! Voluptates, omnis
              maiores?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, veritatis
              voluptate laudantium architecto nihil doloribus nisi facilis excepturi, nobis pariatur
              consequatur commodi neque .
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, veritatis
              voluptate laudantium.
            </p>
          </>
        )}
        {activeTab === 'tab-2' && (
          <>
            <p>
              <span className="font-bold">Tab 2</span> info text. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Modi, tempora. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Maxime doloremque, totam aspernatur porro aperiam quo cumque, sunt
              odio iusto, est laborum quia autem libero quis et impedit. Quaerat neque ex maxime?
              Voluptatibus obcaecati corporis sit.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda libero voluptatum
              officia quae? Expedita, dolor.
            </p>
          </>
        )}
        {activeTab === 'tab-3' && (
          <p>
            <span className="font-bold">Tab 3</span> info text. Lorem ipsum, dolor sit amet
            consectetur adipisicing.
          </p>
        )}
      </div>
    </section>
  );
}
