import React, { FC, ReactNode, useState } from 'react'
import Button from '../button/button'

interface ModalProps {
  children: ReactNode
  heading: string | ReactNode
}

const Modal: FC<ModalProps> = ({ children, heading }) => {
  const [isDisplayed, setIsDisplayed] = useState(false)


  const onClose = () => {
    setIsDisplayed(false) 
  }

  const onOpen = () => {
    setIsDisplayed(true)
  }

  return (
    <>
      <Button type="button" className="button-primary" onClick={onOpen}>Open modal</Button>
      {
        isDisplayed && (
          <div className="fit bg-dark-overlay flex justify-center items-center" onClick={onClose}>
            <div className='relative flex flex-col bg-white w-[500px] h-[500px] rounded'>
              <div className='p-4 flex items-center justify-between border-b'>
                <div className='h4'>
                  {heading}
                </div>
                <Button type='button' className='button-secondary' onClick={onClose}>Close</Button>
              </div>
              <div className='p-4'>
                {children}  
              </div>
            </div>
          </div>
        )
      }
    </>
    
  )
}

export default Modal
