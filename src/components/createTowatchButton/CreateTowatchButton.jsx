import "./createTowatchButton.scss";

function CreateTowatchButton() {
  return (
     <button 
     className="createTowatchButton"
     onClick={() =>{
         console.log('click')
        }
      } 
    > + Add new film</button>
);
}

export { CreateTowatchButton };
