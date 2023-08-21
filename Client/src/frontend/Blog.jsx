import React from 'react';
import "./ui/style.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Blog = () => {
  const containerStyle = {
    backgroundImage: `url(/imgs/default-image.jpeg)`, // Replace 'your-background-image.jpg' with the actual image file path
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Set the height as needed
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle} id='coming_soon'>
      <h2>Coming Soon</h2>
      <Stack spacing={2} direction="row">
        <Button href='/' className='btn_contained' variant="contained">Home</Button>
        <Button href='/inventions' className='btn_outline' variant="outlined">Inventions</Button>
      </Stack>
    </div>
  );
}

export default Blog;
