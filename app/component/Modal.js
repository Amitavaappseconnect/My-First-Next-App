import React from 'react'

const modal = ({ isVisible, onClose, children }) => {
    if ( !isVisible) return null;

    const handelClose = (e) => {
        if(e.target.id === 'wrapper' ) onClose();
    }

  return (
    <>
    
        <div className='fixed bg-black inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center' onClick={() => onClose()}>
            
        </div>
        
        <div className='w-[750px] max-h-[500px] overflow-y-auto bg-white rounded-md fixed top-0 bottom-0 left-0 right-0 m-auto z-50'>            
               <div className='relative'>
               <button className=' bg-blue-50 px-3 py-[6px] bg text-blue-600 rounded absolute right-1 top-4' onClick={() => onClose(handelClose)}>x</button>
                    {children}
                </div>                
            </div>

    </>
  )
}

export default modal
