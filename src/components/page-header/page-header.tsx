import React from 'react'

type Props = {
  title: String
}

function PageHeader({ title }: Props) {
  return (
    <div className="flex flex-col items-start bg-primary py-4 px-6 text-white md:flex-row md:items-center">
      <div className="flex flex-1 items-center">
        <span className="mr-3 inline-block h-12 w-12 rounded-full border-2 border-primary-hover bg-white"></span>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="mt-4 flex justify-center md:mt-0">
        <span className="ml-2 rounded bg-white px-3 py-1 text-primary">React</span>
        <span className="ml-2 rounded bg-white px-3 py-1 text-primary">Typescript</span>
        <span className="ml-2 rounded bg-white px-3 py-1 text-primary">React router</span>
      </div>
    </div>
  )
}

export default PageHeader
