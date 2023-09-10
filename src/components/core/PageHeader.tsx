import React from 'react'
import PageNav from './PageNav'

type Props = {
  title: String
  techs: Array<string>
}

function PageHeader({ title, techs }: Props) {
  return (
    <div className="flex flex-col items-start bg-primary py-4 px-6 text-white md:flex-row md:items-center">
      <div className="flex flex-1 items-center">
        <span className="mr-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-hover bg-white text-xl font-bold uppercase text-primary">
          HN
        </span>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <PageNav />
      <div className="mt-4 flex justify-center md:mt-0">
        {techs.map((tech, index) => {
          return (
            <span key={index} className="ml-2 rounded bg-white px-3 py-1 text-primary">
              {tech}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default PageHeader
