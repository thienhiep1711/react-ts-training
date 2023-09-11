import { FC, ReactNode, useState } from 'react'
import PageLayout from '../../components/core/PageLayout'
import setting from './setting'
import PageNav from '../../components/core/PageNav'

interface DashboardProps {
  children?: ReactNode
}

const Dashboard: FC<DashboardProps> = () => {
  const [inputValue, setInputValue] = useState('')

  const handleOnChange = (value: string) => {
    setInputValue(value)
  }
  return (
    <PageLayout setting={setting}>
      <div className='flex justify-center'>
        <div className='flex-col'>
          <div className='flex w-full max-w-[600px]'>
            <PageNav />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Dashboard
