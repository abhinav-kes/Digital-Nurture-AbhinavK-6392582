import React, { useState } from 'react';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';

const App = () => {
  const showCourse = useState(true);
  const showBook = useState(true);
  const showBlog = useState(true);

  return (
    <div className="container">
      {showCourse && <CourseDetails />}
      {showBook ? <BookDetails /> : <p>Book section is hidden</p>}
      {showBlog && <BlogDetails />}
    </div>
  );
};

export default App;
