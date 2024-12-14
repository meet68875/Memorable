import React, { useState, useEffect } from 'react';

const LandingPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;
  const apiKey = 'f8c23c9d3cf0405db8abd7ad16a62ac2';

  // Fetch blogs from News API
  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=travel&apiKey=${apiKey}&pageSize=100`)
      .then((res) => res.json())
      .then((data) => {
        if (data.articles) {
          setBlogs(data.articles);
        } else {
          setBlogs([]);
        }
      })
      .catch((err) => {
        console.error(err);
        setBlogs([]);
      });
  }, []);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Travel Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentBlogs.length > 0 ? (
            currentBlogs.map((blog) => (
              <div key={blog.url} className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={blog.urlToImage || 'default-image-url.jpg'}
                  alt={blog.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{blog.title}</h3>
                  <p 
                    className="mt-2 text-gray-600"
                    dangerouslySetInnerHTML={{ __html: blog.description || blog.content?.substr(0, 100) + '...' }}
                  />
                  <a href={blog.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block">Read more</a>
                </div>
              </div>
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </div>
        {blogs.length > blogsPerPage && (
          <div className="flex justify-center mt-8">
            {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default LandingPage;
