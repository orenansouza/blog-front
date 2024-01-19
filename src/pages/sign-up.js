import { useRouter } from 'next/router';
import { useState } from 'react';

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async () => {
    if (email && password) {
      const apiUrl = process.env.NEXT_API_BASE_URL

      const body = JSON.stringify({ name, email, password })

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const requestInfo = {
        body,
        headers,
        method: 'POST',
      }

      const response = await fetch(`${apiUrl}/users`, requestInfo)
      if (response.status === 201) {
        router.push('/login')
      }
    }
  };

  return (
    <div className='w-full h-screen flex justify-center items-center bg-black'>
      <div className="p-20 border-2 border-solid border-gray-300 text-white rounded-[20px]">
        <h2 className="text-2xl font-bold flex justify-center items-center flex-col mb-5">Criar usuário</h2>
        <form className="flex justify-center items-center">
          <div className='flex flex-col'>
            <label className="mb-2 justify-center items-center">
              Nome:
              <input
                className="p-2 mb-4 ml-4 rounded-full text-black"
                type="text"
                name="name"
                value={name}
                onChange={handleNameChange}
              />
            </label>
            <label className="mb-2 justify-center items-center">
              Email:
              <input
                className="p-2 mb-4 ml-4 rounded-full text-black"
                type="text"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
            </label>
            <label className="mb-2 justify-center items-center">
              Senha:
              <input
                className="p-2 mb-4 ml-4 rounded-full text-black"
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
            <button className="bg-blue-500 text-white mb-6 px-4 py-2 rounded-full hover:bg-blue-700" type="button" onClick={handleSignUp}>
              Criar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;