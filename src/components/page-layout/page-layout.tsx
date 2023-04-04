import React, { ReactNode } from 'react'
import PageHeader from '../../components/page-header/page-header'
import PageMain from '../../components/page-main/page-main'
import PageFooter from '../../components/page-footer/page-footer'

type Props = {
  children: ReactNode
  title: String
  author: String
  startDate: String
  completedDate: String
}

function PageLayout({ children, title, author, startDate, completedDate }: Props) {
  return (
    <>
      <PageHeader title={title}></PageHeader>
      <PageMain>{children}</PageMain>
      <PageFooter author={author} completedDate={completedDate} startDate={startDate}></PageFooter>
    </>
  )
}

export default PageLayout
