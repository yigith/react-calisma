import './App.css';
import BenimButonum from './BenimButonum';
import React, { Component, useState } from 'react';
import Sayac from './Sayac';
import Dugme from './Dugme';
import AdListesi from './AdListesi';


function App() {
  const [goster, setGoster] = useState(true);

  const gosterDegisti = function (event) {
    setGoster(event.target.checked);
  };

  return (
    <div className="App">
      <Baslik />
      <AdListesi />
      <div>
        <input type="checkbox" onChange={gosterDegisti} checked={goster} /> Türkiye'nin Başkentini Göster
      </div>
      {goster && <Baskent />}
      <Sevgi ad="karpuz" />
      <Sevgi ad="lahmacun" />
      <Sevgi ad="araba" />
      <BenimButonum metin="Gönder" />
      <Saygi sifat="güzel" />
      <Saygi sifat="fedakar" />
      <Sayac deger={1} />
      <Sayac deger={10} />
      <Sayac deger={100} />
      <Dugme deger={1000} />
    </div>
  );
}

function Baskent() {
  return <p className="App-baskent">Ankara</p>;
}

// bu bir react bileşenidir.
function Baslik() {
  return <h1>React Öğreniyorum</h1>;
}

function Sevgi(props) {
  return <p>Ben {props.ad} severim.</p>;
}

class Saygi extends Component {
  render() {
    return <p>Ben {this.props.sifat} olana saygı duyarım.</p>;
  }
}

export default App;
