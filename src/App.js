import React, { useState } from 'react';
import 'regenerator-runtime/runtime';
import 'core-js/stable';

import Accordion from './components/Accordion.js';
import Search from './components/Search.js';
import Dropdown from './components/Dropdown.js';
import Translate from './components/Translate.js';
import Route from './components/Route.js';
import Header from './components/Header.js';

const options = [
  { label: 'The Color Red', value: 'red' },
  { label: 'The Color Green', value: 'green' },
  { label: 'A Shade of Blue', value: 'blue' },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="app ui container">
      <Header />
      <Route path="/">
        <Accordion />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          options={options}
          propLabel="Select from the following options"
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
    </div>
  );
};

export default App;
