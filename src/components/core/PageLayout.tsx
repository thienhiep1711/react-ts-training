import React, { ReactNode } from 'react'
import PageHeader from './PageHeader'
import PageMain from './PageMain'
import PageFooter from './PageFooter'

type Props = {
  children: ReactNode
  setting: object
}

function PageLayout({ children, setting }: Props) {
  return (
    <>
      <PageHeader title={setting.title} techs={setting.techs}></PageHeader>
      <PageMain>{children}</PageMain>
      <PageFooter author={setting.author} completedDate={setting.endDate} startDate={setting.startDate}></PageFooter>
    </>
  )
}

export default PageLayout
