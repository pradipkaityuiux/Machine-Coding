import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const listStyle = {
    'padding': "12px",
    'border': '1px solid #a5a5a5',
    'margin': '6px 0',
    'listStyle': 'none',
    'borderRadius': '12px'
}

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments`, {
        params: { _page: page, _limit: 10 },
      });
      setPosts(prevPosts => [...prevPosts, ...response.data]);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) return;
    setPage(prevPage => prevPage + 1);
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div style={{ margin: '0 auto', maxWidth: '560px' }}>
        <h1>Infinite Scroll</h1>
      <ul style={{ padding: '0px' }}>
        {posts.map(post => (
          <li key={post.id} style={listStyle}>
            <h3>{post.name}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
