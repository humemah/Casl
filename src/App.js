// App.js

import React from 'react';
import { AbilityContext } from './components/Can';
import TodoList from './components/TodoList';
import Ability from './components/Ability';

function App() {
    

  return (
    <AbilityContext.Provider value={Ability}>
      <TodoList />
    </AbilityContext.Provider>
  );
}

export default App;
