import React from 'react';
import './App.css';
import Header from './Header'
import Card from './Card'
import content from './Content'
import Foot from './Foot'
function App() {
  return (
    
   <div>
    <Header />

{content.map(content=><Card
     id={content.id}
    name={content.name}
    arabic={content.arabic}
    meaning={content.meaning}
    />)}
<Foot />
 
   </div> 
   
  );
}

export default App;
