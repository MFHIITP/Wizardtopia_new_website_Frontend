import React, { useState, useEffect } from 'react';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [college, setCollege] = useState('');
    const [year, setYear] = useState('');
    const [branch, setBranch] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        if (password !== confirmPassword) {
            setMessage('Passwords do NOT match');
            return;
        }

        try {
            const response = await fetch('https://wizardtopia-backend.onrender.com/backend_main', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    year: year,
                    branch: branch,
                    phone: phone,
                    email: email,
                    study: college,
                    password: confirmPassword,
                })
            });

            if (response.status === 200) {
                window.location.href = '/backend_login';
            } else {
                const errorMessage = await response.text();
                setMessage(errorMessage);
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
            console.error('Error:', error);
        }
    };

    return (
        <div className={`flex flex-col justify-center items-center min-h-screen slowing`}>
            <div className="text-4xl font-serif text-white my-1 mx-4">WIZARDTOPIA</div>
            <div className="text-2xl font-serif text-white my-6 mx-4">Jadavpur University Wizarding Club</div>
            <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-lg w-full max-w-lg'>
                {message && <p className='text-red-500 text-center mb-4'>{message}</p>}
                <div className='flex flex-wrap -mx-4 mb-6'>
                    <div className='w-full md:w-1/2 px-4 mb-4 md:mb-0'>
                        <label htmlFor="name" className='block text-gray-700 font-semibold mb-2'>Name</label>
                        <input
                            type="text"
                            name='name'
                            id='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Your Name"
                            required
                            className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400'
                        />
                    </div>
                    <div className='w-full md:w-1/2 px-4'>
                        <label htmlFor="email" className='block text-gray-700 font-semibold mb-2'>Email</label>
                        <input
                            type="email"
                            name='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Your Email Address"
                            required
                            className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400'
                        />
                    </div>
                </div>
                <div className='flex flex-wrap -mx-4 mb-6'>
                    <div className='w-full md:w-1/2 px-4 mb-4 md:mb-0'>
                        <label htmlFor="password" className='block text-gray-700 font-semibold mb-2'>Password</label>
                        <input
                            type="password"
                            name='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                            required
                            className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400'
                        />
                    </div>
                    <div className='w-full md:w-1/2 px-4'>
                        <label htmlFor="confirmPassword" className='block text-gray-700 font-semibold mb-2'>Confirm Password</label>
                        <input
                            type="password"
                            name='confirmPassword'
                            id='confirmPassword'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Your Password"
                            required
                            className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400'
                        />
                    </div>
                </div>
                <div className='flex flex-wrap -mx-4 mb-6'>
                    <div className='w-full md:w-1/2 px-4 mb-4 md:mb-0'>
                        <label htmlFor="college" className='block text-gray-700 font-semibold mb-2'>College</label>
                        <input
                            type="text"
                            name='college'
                            id='college'
                            value={college}
                            onChange={(e) => setCollege(e.target.value)}
                            placeholder="Enter Your College"
                            required
                            className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400'
                        />
                    </div>
                    <div className='w-full md:w-1/2 px-4'>
                        <label htmlFor="year" className='block text-gray-700 font-semibold mb-2'>Year</label>
                        <input
                            type="text"
                            name='year'
                            id='year'
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            placeholder="Enter Your Year"
                            required
                            className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400'
                        />
                    </div>
                </div>
                <div className='flex flex-wrap -mx-4 mb-6'>
                    <div className='w-full md:w-1/2 px-4 mb-4 md:mb-0'>
                        <label htmlFor="branch" className='block text-gray-700 font-semibold mb-2'>Branch</label>
                        <input
                            type="text"
                            name='branch'
                            id='branch'
                            value={branch}
                            onChange={(e) => setBranch(e.target.value)}
                            placeholder="Enter Your Branch"
                            required
                            className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400'
                        />
                    </div>
                    <div className='w-full md:w-1/2 px-4'>
                        <label htmlFor="phone" className='block text-gray-700 font-semibold mb-2'>Phone Number</label>
                        <input
                            type="tel"
                            name='phone'
                            id='phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter Your Phone Number"
                            required
                            className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400'
                        />
                    </div>
                </div>
                <div className='text-center'>
                    <button type="submit" className='px-4 py-2 bg-blue-500 text-white rounded-lg'>Join Us</button>
                </div>
            </form>
        </div>
    );
}

export default Register;
