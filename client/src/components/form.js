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

            console.log(id, friendId, password, photo);

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
        <div>
        <div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <label htmlFor="id">ID</label>
                    <input
                        type="text"
                        name="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="friendId">Friend ID</label>
                    <input
                        type="text"
                        name="friendId"
                        value={friendId}
                        onChange={(e) => setFriendId(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="photo">photo</label>
                    <input
                        type="file"
                        name="photo"
                        onChange={(e) => setphoto(e.target.files[0])}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div>
            {similarity !== '' && <h1>Similarity: {similarity}</h1> }
        </div>
        </div>
    );
};

export default Form;
