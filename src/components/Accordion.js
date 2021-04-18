import React, { useState } from 'react';

const items = [
  {
    title: 'What is react?',
    content: 'React is a front-end JavaScript library',
    id: 1,
  },
  {
    title: 'Why is react?',
    content: 'React is a favourite JS library among engineers',
    id: 2,
  },
  {
    title: 'How do you use React?',
    content: 'You use react by creating components',
    id: 3,
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Where i is 'index'
  const onTitleClick = i => {
    setActiveIndex(i);
  };

  const renderedItems = items.map((item, i) => {
    const active = i === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.id}>
        <div onClick={() => onTitleClick(i)} className={`title ${active}`}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>{item.content}</div>
      </React.Fragment>
    );
  });

  return (
    <div>
      <div className="ui styled accordion">{renderedItems}</div>
    </div>
  );
};

export default Accordion;
