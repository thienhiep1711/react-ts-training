import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function PageMain({ children }: Props) {
  return (
    <div className="min-h-[calc(100vh-184px)] md:min-h-[calc(100vh-136px)] py-8">
      <div className="container">
        <div className="flex flex-col">
          {children}
        </div>
      </div>
    </div>
  )
}

export default PageMain
