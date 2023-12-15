import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [id, setId] = useState('');
    const [friendId, setFriendId] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setphoto] = useState(null);
    const [similarity, setSimilarity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();

            if (!id || !friendId || !password || !photo) {
                alert('Please fill out all fields');
            }

            formData.append('id', id);
            formData.append('friendId', friendId);
            formData.append('password', password);
            formData.append('photo', photo);

            const reponse = await axios.post('http://localhost:5000/upload', formData);

            setSimilarity(reponse.data.similarity);
        } catch (error) {
            console.log('Error submitting form: ', error);
        }
    }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label htmlFor="id" className="block text-gray-700">ID</label>
            <input
              type="text"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="friendId" className="block text-gray-700">Friend ID</label>
            <input
              type="text"
              name="friendId"
              value={friendId}
              onChange={(e) => setFriendId(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photo" className="block text-gray-700">Photo</label>
            <input
              type="file"
              name="photo"
              onChange={(e) => setphoto(e.target.files[0])}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
            />
          </div>
          <div className='flex justify-center w-full'>
            <button type="submit" className="p-2 text-white bg-blue-500 rounded hover:bg-blue-700">Submit</button>
          </div>
        </form>
        <h1 className={`mt-4 text-lg ${similarity ? '': 'invisible'}`}>Similarity: {similarity}</h1>
      </div>
    </div>
  );
};

export default Form;
