import React, { useState } from 'react';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';

function Faq() {
    const [value, setValue] = useState({
        firstValue: false,
        secondValue: false,
        thirdValue: false,
        fourthValue: false,
    });

    const handleFirstChange = () => {
        setValue({ ...value, firstValue: !value.firstValue });
    };

    const handleSecondChange = () => {
        setValue({ ...value, secondValue: !value.secondValue });
    };

    const handleThirdChange = () => {
        setValue({ ...value, thirdValue: !value.thirdValue });
    };

    const handleFourthChange = () => {
        setValue({ ...value, fourthValue: !value.fourthValue });
    };

    return (
        <div className={`${window.scrollY <= 1350 ? 'none' : 'anime'}`}>
            <div className="mx-8 flex justify-center my-8 bg-gray-900 text-white italic py-4 rounded-lg text-3xl font-serif">FAQs</div>

            <div>
                <div className="text-white mx-8 flex justify-between bg-gray-900 my-4 py-2 text-2xl rounded-lg">
                    <div className = "pl-6">What is this club?</div>
                    <div className="cursor-pointer pr-6 font-mono" onClick={handleFirstChange}>
                        {value.firstValue ? <ArrowDropUp /> : <ArrowDropDown />}
                    </div>
                </div>
                <div className={`${value.firstValue ? '' : 'hidden'} text-white pl-8 mx-8 py-4 font-mono`}>
                    This is the Wizardtopia Club.
                </div>
            </div>

            <div>
                <div className="text-white mx-8 flex justify-between bg-gray-900 my-4 py-2 text-2xl rounded-lg">
                    <div className = "pl-6 font-mono">How can I join the club?</div>
                    <div className="cursor-pointer pr-6" onClick={handleSecondChange}>
                        {value.secondValue ? <ArrowDropUp /> : <ArrowDropDown />}
                    </div>
                </div>
                <div className={`${value.secondValue ? '' : 'hidden'} text-white pl-8 mx-8 py-4 font-mono`}>
                    You can join the club by signing up on our website.
                </div>
            </div>

            <div>
                <div className="text-white mx-8 flex justify-between bg-gray-900 my-4 py-2 text-2xl rounded-lg">
                    <div className = "pl-6 font-mono">What are the benefits of membership?</div>
                    <div className="cursor-pointer pr-6" onClick={handleThirdChange}>
                        {value.thirdValue ? <ArrowDropUp /> : <ArrowDropDown />}
                    </div>
                </div>
                <div className={`${value.thirdValue ? '' : 'hidden'} text-white pl-8 mx-8 py-4 font-mono`}>
                    Members get access to exclusive events and resources.
                </div>
            </div>

            <div>
                <div className="text-white mx-8 flex justify-between bg-gray-900 my-4 py-2 text-2xl rounded-lg">
                    <div className = "pl-6 font-mono">Who can join the club?</div>
                    <div className="cursor-pointer pr-6" onClick={handleFourthChange}>
                        {value.fourthValue ? <ArrowDropUp /> : <ArrowDropDown />}
                    </div>
                </div>
                <div className={`${value.fourthValue ? '' : 'hidden'} text-white pl-8 mx-8 py-4 font-mono`}>
                    Anyone with an interest in wizardry can join the club.
                </div>
            </div>
        </div>
    );
}

export default Faq;
