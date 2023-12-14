import React, { useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { TbShare } from "react-icons/tb";

const posts = [
  { id: 1, username: 'John Doe', text: 'Post 1', imageUrl: 'https://placekitten.com/400/600' },
  { id: 2, username: 'Jane Smith', text: 'Post 2', imageUrl: 'https://placekitten.com/400/400' },
  { id: 3, username: 'Bob Johnson', text: 'Post 3', imageUrl: 'https://placekitten.com/600/400' },
  // Add more posts as needed
];

const PostList = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div style={{ overflowY: 'auto', maxHeight: '600px', border: '1px solid #ccc',background:'white' ,width:'40vw'}}>
      {posts.map(post => (
        <div key={post.id} style={{ position: 'relative', padding: '20px', borderBottom: '5px solid rgb(255, 228, 228)' }}>
          <button
            onClick={toggleDropdown}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '20px',
            }}
          >
            ⋮
          </button>
          {showDropdown && (
            <div
              style={{
                position: 'absolute',
                top: '30px',
                right: '10px',
                background: '#fff',
                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
                borderRadius: '4px',
                padding: '10px',
                zIndex: 1,
              }}
            >
              <p>Delete</p>
              <p>Edit</p>
              {/* Add more dropdown items as needed */}
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={`https://placekitten.com/100/100`}  // Replace with the actual URL for the profile picture
              alt={`Profile Pic of ${post.username}`}
              style={{ borderRadius: '50%', marginRight: '20px', width: '50px', height: '50px' }}
            />
            <p style={{ fontWeight: 'bold', fontSize: '18px', margin: 0 }}>{post.username}</p>
          </div>
          <p style={{ fontSize: '16px', margin: '10px 0' }}>{post.text}</p>
          {post.imageUrl && <img src={post.imageUrl} alt={`Post ${post.id}`} style={{ maxWidth: '100%', marginBottom: '0.5vh' }} />}
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div style={{ display: 'flex', gap: '1rem',margin:'1vh 1vw' }}>
            <div onClick={handleLikeClick} style={{ cursor: 'pointer' }}>
                {liked ? (
                <MdFavorite style={{ color: 'red', fontSize: '1.8rem' }} />
                ) : (
                <MdFavoriteBorder style={{ color: 'black', fontSize: '1.8rem' }} />
                )}
            </div>
            <FaRegComment style={{fontSize:'1.5rem'}}/>
            <TbShare style={{fontSize:'1.5rem'}}/>
          </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
