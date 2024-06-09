
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';



const Questions = ({title , description}) => {
  const [open,setOpen]=useState(false);

  const buttonHandler=()=>{
    setOpen(!open)
  }
  return (
    <div className='question'>
        <header>
            <h4>{title}</h4>
            <button onClick={buttonHandler}>
              {open ?<RemoveIcon/>:<AddIcon/>}
            </button>
        </header>
        { open && <p> {description}</p>}
      
    </div>
  );
}

export default Questions;