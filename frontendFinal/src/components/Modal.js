import React, {useState, useRef} from 'react';

export default function Modal(){
    const data=useRef();
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }
    const handleClick=()=>{
        console.log(data.current.value)
        toggleModal()
    }

    return(
        <>
        <button onClick={toggleModal} className="btn-modal"> select country</button>
        
        <div className='modal'>
            <div className='overlay'></div>
            <div className='modal-content'>
                <h1> please input your country</h1>
                <input ref={data}> input here</input>
                <button onClick={handleClick}>Confirm</button>
            </div>
        </div>
        
        </>
    )
}