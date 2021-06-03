import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Accordion from './components/Accordion.js';
import Search from './components/Search.js';
import Dropdown from './components/Dropdown.js';
import Translate from './components/Translate.js';
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
      <Switch>
        <Route exact path="/">
          <Accordion />
        </Route>

        <Route exact path="/list">
          <Search />
        </Route>

        <Route exact path="/translate">
          <Translate />
        </Route>

        <Route exact path="/dropdown">
          <Dropdown
            options={options}
            propLabel="Select from the following options"
            selected={selected}
            onSelectedChange={setSelected}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
