import { Header } from "./component/Header/Header";
import { CoreConcepts } from "./component/CoreConcepts";
import { CORE_CONCEPTS } from "./json/data";
import { TabButton } from "./component/TabButton/TabButton";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState('Please Click the tab button.');

  const handleSelect = (selected) => {
    console.log(selected);
    setSelected(selected);
  }
  

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concpets</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => { handleSelect('component')}}>Component</TabButton>
            <TabButton onSelect={() => { handleSelect('component2')}}>Component2</TabButton>
            <TabButton onSelect={() => { handleSelect('component3')}}>Component3</TabButton>
            <TabButton onSelect={() => { handleSelect('component4')}}>Component4</TabButton>
          </menu>
          <h3 style={{color:"black"}}>{selected}</h3>
        </section>
      </main>
    </div>
  );
}

export default App;

