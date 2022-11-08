import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { API_URL } from '../util/API';

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.desc || '');
  const [title, setTitle] = useState(state?.title || '');
  const [cat, setCat] = useState(state?.category || '');
  const [previewSource, setPreviewSource] = useState(null);
  const navigate = useNavigate();

  const handleFile = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!previewSource) return;
    const imgUrl = await uploadImage(previewSource);
    console.log(imgUrl);
    try {
      state
        ? await axios.put(`${API_URL}/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: previewSource ? imgUrl : '',
          })
        : await axios.post(`${API_URL}/posts/`, {
            title,
            desc: value,
            cat,
            img: previewSource ? imgUrl : '',
            date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
          });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (base64Image) => {
    try {
      const data = JSON.stringify(base64Image);
      const res = await axios.post('/uploadCloud', { data });
      return res.data;
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className='writeContainer'>
      <div className='content'>
        <input
          type='text'
          placeholder='Title'
          value={title}
          name='title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className='editorContainer'>
          <ReactQuill
            className='editor'
            theme='snow'
            value={value}
            onChange={setValue}
          />
        </div>
      </div>

      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            type='file'
            id='file'
            style={{ display: 'none' }}
            name='file'
            onChange={handleFile}
          />
          {previewSource && <img src={previewSource} alt='' />}
          <label className='file' htmlFor='file'>
            Upload Image
          </label>
          <div className='buttons'>
            <button>Save as a draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>

        <div className='item'>
          <h1>Category</h1>
          <div className='radioButton'>
            <input
              type='radio'
              checked={cat === 'art'}
              name='cat'
              value='art'
              id='art'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='art'>Art</label>
          </div>
          <div className='radioButton'>
            <input
              type='radio'
              checked={cat === 'technology'}
              name='cat'
              value='technology'
              id='technology'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='technology'>Technology</label>
          </div>
          <div className='radioButton'>
            <input
              type='radio'
              checked={cat === 'science'}
              name='cat'
              value='science'
              id='science'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='science'>Science</label>
          </div>
          <div className='radioButton'>
            <input
              type='radio'
              checked={cat === 'cinema'}
              name='cat'
              value='cinema'
              id='cinema'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='cinema'>Cinema</label>
          </div>
          <div className='radioButton'>
            <input
              type='radio'
              checked={cat === 'design'}
              name='cat'
              value='design'
              id='design'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='design'>Design</label>
          </div>
          <div className='radioButton'>
            <input
              type='radio'
              checked={cat === 'food'}
              name='cat'
              value='food'
              id='food'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='food'>Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
