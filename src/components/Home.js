import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import Tweet from '@/components/Tweet';
import Post from '@/components/Post';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllPosts()
  }, []);

  async function getAllPosts() {
    const apiUrl = process.env.NEXT_API_BASE_URL;

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const requestInfo = {
      method: 'GET',
      headers: headers,

    }

    const response = await fetch(`${apiUrl}/posts`, requestInfo)
    if (response.status === 200) {
      const responseSerialized = await response.json()
      setData(responseSerialized)
    }
  }

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="w-full flex justify-center">
        <div className="m-10 flex flex-col justify-between text-white">
          <Link className='text-white' href="/profile">Profile</Link>
          <Link href="/login">Login</Link>
        </div>
        <div className="overflow-y-scroll w-[600px] h-[800px] max-h-[800px] pr-10">
          <Post />
          {data.length > 0 ? data.map((tweet, index) => (
            <Tweet key={index} {...tweet} />
          )) : (
            <div className='flex justify-center items-center overflow-hidden'>
              <label className='text-white'>
                Nenhum Tweet encontrado!
              </label>
            </div>
          )
          }
        </div>
      </div>
    </main >
  );
};

export default Home;