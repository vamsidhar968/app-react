import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Buttoncount() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div>
      <IconButton className='likebtn' aria-label="Like" onClick={() => setLike(like + 1)}>
      <Badge badgeContent={like} color="primary"> 
      👍
      </Badge>
      </IconButton>

      <IconButton className='Dislikebtn' aria-label="DisLike" onClick={() => setDislike(dislike + 1)}>
      <Badge badgeContent={dislike} color="error"> 
      👎
      </Badge>
      </IconButton>
    </div>
  );
}
