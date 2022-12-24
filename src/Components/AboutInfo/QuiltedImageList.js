import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
    return (
        <PhotoProvider>
            
    <ImageList
      sx={{ width: 500, height: 450, overflow:'hidden'}}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <PhotoView src={item.img}><ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem></PhotoView>
      ))}
                </ImageList>
                
            </PhotoProvider>
  );
}

const itemData = [
  {
    id:'01',
    img: 'https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    id:'02',
    img: 'https://images.unsplash.com/photo-1618914059174-40767c46f838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzJTIwY29jYWNvbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    title: 'Burger',
  },
  {
    id:'03',
    img: 'https://images.unsplash.com/photo-1559742811-822873691df8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Camera',
  },
  {
    id:'04',
    img: 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b25pb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    title: 'Coffee',
    cols: 2,
  },
  {
    id:'05',
    img: 'https://images.unsplash.com/photo-1603431777782-912e3b76f60d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2luZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Hats',
    cols: 2,
  },
  {
    id:'06',
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    id:'07',
    img: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Basketball',
  },
  {
    id:'08',
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  
];