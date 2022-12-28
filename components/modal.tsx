import React from "react";
import Popup from 'reactjs-popup';
import { Button } from '@material-tailwind/react';


const Modal = () => (

    <Popup 
        trigger={<Button size='sm' color='purple'> Open Modal .... </Button>} 
        position='top center'
        modal
        >
        <span> 
            <div className='border-2'>
                <div className='h-48 w-64'>
                    Upload your .har file here!
                </div>
                <div className="flex justify-items-center">
                    <div className="mb-3 w-96">
                        <input className="form-control
                        block
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile">
                        </input>
                        <div className='flex justify-items-center'>
                            <Button fullWidth onClick={() => {close()}}> Close</Button>
                            <Button fullWidth> Upload</Button>
                        </div>

                    </div>
                    </div>
            </div>
        </span>        
    </Popup>


  );

export default Modal;