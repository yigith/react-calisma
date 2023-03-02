import React, { useState } from 'react';

function AdListesi() {
    const [ad, setAd] = useState("");
    const [adlar, setAdlar] = useState(["ali", "can", "cem"]);

    function handleSubmit(event) {
        event.preventDefault();
        let yeniAdlar = [ad, ...adlar];
        setAdlar(yeniAdlar);
        setAd("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={ad}
                    onChange={(e) => setAd(e.target.value)} required />
                <button>Ekle</button>
            </form>
            <ul>
                {adlar.map((v, i) => <li key={i}>{v}</li>)}
            </ul>
        </div>
    );
}

export default AdListesi;