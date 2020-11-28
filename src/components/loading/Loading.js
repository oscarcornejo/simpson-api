import React from 'react';

import './Loading.css';

const Loading = () => {
  return (
    <div style={{ padding: '50px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className='loader'></div>
    </div>
  );
};

export default Loading;
