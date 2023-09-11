import React from 'react'

type Props = {
  author: String
  completedDate: String
  startDate: String
}

function PageFooter({ author, completedDate, startDate }: Props) {
  return (
    <div className='flex items-center justify-between bg-primary px-6 py-4 text-white'>
      <strong>{author}</strong>
      <div>
        {startDate} - {completedDate}
      </div>
    </div>
  )
}

export default PageFooter
