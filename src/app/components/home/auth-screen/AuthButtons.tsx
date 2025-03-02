import { Butterfly_Kids } from 'next/font/google'
import React from 'react'
import {Button} from '@/components/ui/button'
const AuthButtons = () => {
  return (
    <div className='flex gap-3 flex-1 md:flex-row flex-col'>
      <Button className='w-50' variant={'outline'}>
        Đăng Ký
      </Button>
      <Button className='w-50'>
        Đăng Nhập
      </Button>
    </div>
  )
}

export default AuthButtons
