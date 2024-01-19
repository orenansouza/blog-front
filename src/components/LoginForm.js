import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const body = JSON.stringify({ email, password })

    const apiUrl = process.env.NEXT_API_BASE_URL
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const requestInfo = {
      body,
      headers,
      method: 'POST',
    }

    const response = await fetch(`${apiUrl}/auth/login`, requestInfo)
    if (response.status === 201) {
      const responseSerialized = await response.json()
      saveAccessToken(responseSerialized.access_token)

      saveUserId(responseSerialized.id)
      router.push('/')
    }
  };

  function saveAccessToken(token) {
    localStorage.setItem('access_token', token);
  };
  function saveUserId(userId) {
    localStorage.setItem('user_id', userId);
  };

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className="p-20 border-2 border-solid border-gray-300 text-white rounded-[20px]">
        <h2 className="text-2xl font-bold flex justify-center items-center flex-col mb-5">Realizar Login</h2>
        <form className="flex justify-center items-center">
          <div className='flex flex-col'>
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
            <button className="bg-blue-500 text-white mb-6 px-4 py-2 rounded-full hover:bg-blue-700" type="button" onClick={handleLogin}>
              Login
            </button>
            <Link className='bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700 text-center' href="/sign-up">Realizar Cadastro</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
