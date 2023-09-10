import React, { ReactNode } from 'react'
import PageHeader from './PageHeader'
import PageMain from './PageMain'
import PageFooter from './PageFooter'

type Setting = {
  title: string
  techs: Array<string>
  startDate: string
  endDate: string
  author: string
}

type PageLayoutProps = {
  children: ReactNode
  setting: Setting
}

function PageLayout({ children, setting }: PageLayoutProps) {
  return (
    <>
      <PageHeader title={setting.title} techs={setting.techs}></PageHeader>
      <PageMain>{children}</PageMain>
      <PageFooter author={setting.author} completedDate={setting.endDate} startDate={setting.startDate}></PageFooter>
    </>
  )
}

export default PageLayout
