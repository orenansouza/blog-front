import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ProfilePage = () => {
  const router = useRouter();

  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    getUserId()
    getPosts()
  }, [])

  async function getUserId() {
    const apiUrl = process.env.NEXT_API_BASE_URL
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const requestInfo = {
      headers,
      method: 'GET',
    }

    const userId = getStorageUserId()
    const response = await fetch(`${apiUrl}/users/${userId}`, requestInfo)
    console.log('aqui', userId)
    if (response.status === 200) {
      const responseSerialized = await response.json()
      setUser(responseSerialized)
    }
  }

  async function getPosts() {
    const apiUrl = process.env.NEXT_API_BASE_URL
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const requestInfo = {
      headers,
      method: 'GET',
    }

    const userId = getStorageUserId()
    const response = await fetch(`${apiUrl}/posts/user/${userId}`, requestInfo)
    if (response.status === 200) {
      const responseSerialized = await response.json()
      setPosts(responseSerialized)
    }
  }

  function getStorageUserId() {
    return localStorage.getItem('user_id');
  };

  return (
    <div className='bg-black w-full h-screen text-white flex justify-center pt-10'>
      <h1>Perfil de {user?.name}</h1>
      <ul>
        {console.log(posts)}
        {posts?.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;