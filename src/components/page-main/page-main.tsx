import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function PageMain({ children }: Props) {
  return <div className="container min-h-[calc(100vh-136px)] py-8">{children}</div>
}

export default PageMain
