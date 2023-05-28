import "./createTowatchButton.scss";

function CreateTowatchButton({setOpenModal}) {
  return (
     <button 
     className="createTowatchButton"
     onClick={() =>{
        setOpenModal(state => !state);
        }
      } 
    > + Add new film</button>
);
}

export { CreateTowatchButton };
