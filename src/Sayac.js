import { useState } from "react";

function Sayac(props) {
    const [sayi, setSayi] = useState(props.deger);

    return (
        <button onClick={() => setSayi(sayi + 1)}>{sayi}</button>
    );
}

export default Sayac;