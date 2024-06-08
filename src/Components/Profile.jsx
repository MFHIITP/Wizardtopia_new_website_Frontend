import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';

function Profile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [college, setCollege] = useState('');
    const [year, setYear] = useState('');
    const [branch, setBranch] = useState('');
    const [phone, setPhone] = useState('');

    const [newname, setNewname] = useState('');
    const [newpassword, setNewpassword] = useState('');
    const [newcollege, setNewcollege] = useState('');
    const [newyear, setNewyear] = useState('');
    const [newbranch, setNewbranch] = useState('');
    const [newphone, setNewphone] = useState('');

    const [changename, setChangename] = useState(false);
    const [changepassword, setChangepassword] = useState(false);
    const [changecollege, setChangecollege] = useState(false);
    const [changeyear, setChangeyear] = useState(false);
    const [changebranch, setChangebranch] = useState(false);
    const [changephone, setChangephone] = useState(false);

    useEffect(() => {
        let value = document.cookie.split(';');
        let val;
        for(let i = 0; i < value.length; i++){
            if(value[i].startsWith("ProfileInfo=")){
                val = value[i].substring(12);
            }
            else if(value[i].startsWith(" ProfileInfo=")){
                console.log(val);
                val = value[i].substring(13)
            }
        }
        let decoded_details = decodeURIComponent(val);
        decoded_details = decoded_details.substring(2);
        let details = JSON.parse(decoded_details)

        setBranch(details.branch)
        setCollege(details.college)
        setName(details.name);
        setPhone(details.phone)
        setEmail(details.email)
        setPassword(details.password)
        setYear(details.year)
    }, []);

    const handleupdate = async (type, val) => {
        const response = await fetch('https://wizardtopia-backend.onrender.com/backend_update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                email: email,
                old: type,
                name: val
            }), 
            credentials: 'include'
        });
        if (response.status === 200) {
            const data = await response.json();
            document.cookie = `ProfileInfo=${encodeURIComponent('j:' + JSON.stringify(data.profileinfo))}; path=/; domain=${window.location.hostname}; secure=false; sameSite=none;`
            window.location.reload();
        } else {
            console.log("Internal Server Error");
        }
    };

    const handleRemove = async () => {
        function deleteCookies(cookieNames) {
            document.cookie = `${cookieNames}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
        }
        const response = await fetch('https://wizardtopia-backend.onrender.com/backend_remove', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
        });
        if (response.status === 200) {
            deleteCookies(' Cookie')
            deleteCookies('ProfileInfo')
            window.location.href = '/backend_login';
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
            <div className='text-white text-3xl pb-6 font-serif'>Wizardtopia</div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl">
                <h1 className="text-2xl font-bold text-white mb-6 text-center font-mono">My Profile</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="flex justify-between text-gray-400">
                            <span>Name</span>
                            <span className='cursor-pointer' onClick={() => setChangename(!changename)}><EditIcon className='text-white mr-10'/></span>
                        </label>
                        {
                            !changename ?
                                <div className="bg-gray-700 text-white p-2 rounded">{name}</div>
                                :
                                <>
                                    <input type="text" onChange={(e) => setNewname(e.target.value)} value={newname} className="bg-gray-700 text-white p-2 rounded w-full"/>
                                    <div className='cursor-pointer text-white mt-2' onClick={() => handleupdate("name", newname)}>Submit</div>
                                </>
                        }
                    </div>

                    <div>
                        <label className="block text-gray-400">Email</label>
                        <div className="bg-gray-700 text-white p-2 rounded">{email}</div>
                    </div>

                    <div>
                        <label className="flex justify-between text-gray-400">
                            <span>Password</span>
                            <span className='cursor-pointer' onClick={() => setChangepassword(!changepassword)}><EditIcon className='text-white mr-10'/></span>
                        </label>
                        {
                            !changepassword ?
                                <div className="bg-gray-700 text-white p-2 rounded">{password}</div>
                                :
                                <>
                                    <input type="password" onChange={(e) => setNewpassword(e.target.value)} value={newpassword} className="bg-gray-700 text-white p-2 rounded w-full"/>
                                    <div className='cursor-pointer text-white mt-2' onClick={() => handleupdate("password", newpassword)}>Submit</div>
                                </>
                        }
                    </div>

                    <div>
                        <label className="flex justify-between text-gray-400">
                            <span>College</span>
                            <span className='cursor-pointer' onClick={() => {setChangecollege(!changecollege)}}><EditIcon className='text-white mr-10'/></span>
                        </label>
                        {
                            !changecollege ?
                                <div className="bg-gray-700 text-white p-2 rounded">{college}</div>
                                :
                                <>
                                    <input type="text" onChange={(e) => setNewcollege(e.target.value)} value={newcollege} className="bg-gray-700 text-white p-2 rounded w-full"/>
                                    <div className='cursor-pointer text-white mt-2' onClick={() => handleupdate("study", newcollege)}>Submit</div>
                                </>
                        }
                    </div>

                    <div>
                        <label className="flex justify-between text-gray-400">
                            <span>Year</span>
                            <span className='cursor-pointer' onClick={() => setChangeyear(!changeyear)}><EditIcon className='text-white mr-10'/></span>
                        </label>
                        {
                            !changeyear ?
                                <div className="bg-gray-700 text-white p-2 rounded">{year}</div>
                                :
                                <>
                                    <input type="text" onChange={(e) => setNewyear(e.target.value)} value={newyear} className="bg-gray-700 text-white p-2 rounded w-full"/>
                                    <div className='cursor-pointer text-white mt-2' onClick={() => handleupdate("year", newyear)}>Submit</div>
                                </>
                        }
                    </div>
                       
                    <div>
                        <label className="flex justify-between text-gray-400">
                            <span>Branch</span>
                            <span className='cursor-pointer' onClick={() => setChangebranch(!changebranch)}><EditIcon className='text-white mr-10'/></span>
                        </label>
                        {
                            !changebranch ?
                                <div className="bg-gray-700 text-white p-2 rounded">{branch}</div>
                                :
                                <>
                                    <input type="text" onChange={(e) => setNewbranch(e.target.value)} value={newbranch} className="bg-gray-700 text-white p-2 rounded w-full"/>
                                    <div className='cursor-pointer text-white mt-2' onClick={() => handleupdate("branch", newbranch)}>Submit</div>
                                </>
                        }
                    </div>

                    <div>
                        <label className="flex justify-between text-gray-400">
                            <span>Phone</span>
                            <span className='cursor-pointer' onClick={() => setChangephone(!changephone)}><EditIcon className='text-white mr-10'/></span>
                        </label>
                        {
                            !changephone ?
                                <div className="bg-gray-700 text-white p-2 rounded">{phone}</div>
                                :
                                <>
                                    <input type="text" onChange={(e) => setNewphone(e.target.value)} value={newphone} className="bg-gray-700 text-white p-2 rounded w-full"/>
                                    <div className='cursor-pointer text-white mt-2' onClick={() => handleupdate("phone", newphone)}>Submit</div>
                                </>
                        }
                    </div>
                </div>
            </div>
            <div className="mt-6 p-3 bg-red-600 text-white rounded cursor-pointer hover:bg-red-700 transition duration-300 ease-in-out" onClick={handleRemove}>Remove My Profile</div>
        </div>
    );
}

export default Profile;
