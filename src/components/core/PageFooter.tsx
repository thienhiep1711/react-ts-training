import React from 'react'

type Props = {
  author: String
  completedDate: String
  startDate: String
}

function PageFooter({ author, completedDate, startDate }: Props) {
  return <div className="bg-primary text-white px-6 py-4 flex justify-between items-center">
    <strong>{author}</strong>
    <div>
      {startDate} - {completedDate}
    </div>
  </div>
}

export default PageFooter
