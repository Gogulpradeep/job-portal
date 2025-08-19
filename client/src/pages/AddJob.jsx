import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { JobCategories, JobLocations } from '../assets/assets'; // Make sure JobLocations exists

const AddJob = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('Bangalore');
  const [category, setCategory] = useState('programming');
  const [level, setLevel] = useState('Beginner level');
  const [salary, setSalary] = useState('');

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const description = quillRef.current.root.innerHTML;

    console.log({
      title,
      description,
      category,
      location,
      level,
      salary
    });

    // You can send this data to backend or localStorage here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container p-4 flex flex-col w-full items-start gap-4"
    >
      {/* Job Title */}
      <div className="w-full max-w-lg">
        <p className="mb-2 font-medium">Job Title</p>
        <input
          type="text"
          placeholder="Type here"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          className="w-full px-3 py-2 border-2 border-gray-300 rounded"
        />
      </div>

      {/* Job Description */}
      <div className="w-full max-w-lg">
        <p className="mb-2 font-medium">Job Description</p>
        <div
          ref={editorRef}
          className="bg-white border border-gray-300 rounded min-h-[150px]"
        ></div>
      </div>

      {/* Job Category */}
      <div className="w-full max-w-lg">
        <p className="mb-2 font-medium">Job Category</p>
        <select
          className="w-full px-3 py-2 border-2 border-gray-300 rounded"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          {JobCategories.map((cate, index) => (
            <option key={index} value={cate}>
              {cate}
            </option>
          ))}
        </select>
      </div>

      {/* Job Location */}
      <div className="w-full max-w-lg">
        <p className="mb-2 font-medium">Job Location</p>
        <select
          className="w-full px-3 py-2 border-2 border-gray-300 rounded"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        >
          {JobLocations.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Job Level */}
      <div className="w-full max-w-lg">
        <p className="mb-2 font-medium">Job Level</p>
        <select
          className="w-full px-3 py-2 border-2 border-gray-300 rounded"
          onChange={(e) => setLevel(e.target.value)}
          value={level}
        >
          <option value="Beginner level">Beginner level</option>
          <option value="Intermediate level">Intermediate level</option>
          <option value="Senior level">Senior level</option>
        </select>
      </div>

      {/* Job Salary */}
      <div className="w-full max-w-lg">
        <p className="mb-2 font-medium">Job Salary</p>
        <input
          className="w-[120px] px-3 py-2 border-2 border-gray-300 rounded"
          onChange={(e) => setSalary(e.target.value)}
          type="number"
          placeholder="2500"
          value={salary}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-28 py-3 mt-4 bg-black text-white rounded"
      >
        ADD
      </button>
    </form>
  );
};

export default AddJob;
