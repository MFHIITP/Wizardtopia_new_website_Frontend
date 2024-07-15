import React, { useEffect, useState } from 'react';

function Anime() {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => prev < 45 ? prev + 1 : 0);
        }, 100);
        
        return () => {
            clearInterval(interval);
        };
    }, []);
    
    return (
        <div>
            <div className="flex">
                <div className={`${index >= 1 ? "" : "hidden"}`}>J</div>
                <div className={`${index >= 2 ? "" : "hidden"}`}>a</div>
                <div className={`${index >= 3 ? "" : "hidden"}`}>d</div>
                <div className={`${index >= 4 ? "" : "hidden"}`}>a</div>
                <div className={`${index >= 5 ? "" : "hidden"}`}>v</div>
                <div className={`${index >= 6 ? "" : "hidden"}`}>p</div>
                <div className={`${index >= 7 ? "" : "hidden"}`}>u</div>
                <div className={`${index >= 8 ? "" : "hidden"}`}>r</div>
                <div className={`${index >= 9 ? "" : "hidden"}`}>&nbsp;</div>
                <div className={`${index >= 10 ? "" : "hidden"}`}>U</div>
                <div className={`${index >= 11 ? "" : "hidden"}`}>n</div>
                <div className={`${index >= 12 ? "" : "hidden"}`}>i</div>
                <div className={`${index >= 13 ? "" : "hidden"}`}>v</div>
                <div className={`${index >= 14 ? "" : "hidden"}`}>e</div>
                <div className={`${index >= 15 ? "" : "hidden"}`}>r</div>
                <div className={`${index >= 16 ? "" : "hidden"}`}>s</div>
                <div className={`${index >= 17 ? "" : "hidden"}`}>i</div>
                <div className={`${index >= 18 ? "" : "hidden"}`}>t</div>
                <div className={`${index >= 19 ? "" : "hidden"}`}>y</div>
                <div className={`${index >= 20 ? "" : "hidden"}`}>&nbsp;</div>
                <div className={`${index >= 21 ? "" : "hidden"}`}>W</div>
                <div className={`${index >= 22 ? "" : "hidden"}`}>i</div>
                <div className={`${index >= 23 ? "" : "hidden"}`}>z</div>
                <div className={`${index >= 24 ? "" : "hidden"}`}>a</div>
                <div className={`${index >= 25 ? "" : "hidden"}`}>r</div>
                <div className={`${index >= 26 ? "" : "hidden"}`}>d</div>
                <div className={`${index >= 27 ? "" : "hidden"}`}>i</div>
                <div className={`${index >= 28 ? "" : "hidden"}`}>n</div>
                <div className={`${index >= 29 ? "" : "hidden"}`}>g</div>
                <div className={`${index >= 30 ? "" : "hidden"}`}>&nbsp;</div>
                <div className={`${index >= 31 ? "" : "hidden"}`}>C</div>
                <div className={`${index >= 32 ? "" : "hidden"}`}>l</div>
                <div className={`${index >= 33 ? "" : "hidden"}`}>u</div>
                <div className={`${index >= 34 ? "" : "hidden"}`}>b</div>
            </div>
        </div>
    );
}

export default Anime;
