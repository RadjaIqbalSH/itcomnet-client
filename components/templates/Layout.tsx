import React, { FC, ReactNode } from 'react'
import Navbar from '../organisms/Navbar';

export interface ITemplateLayout {
  children: ReactNode;
  categories: any;
}

const TemplateLayout:FC<ITemplateLayout> = (props) => {
  return (
    <div id='home' className='h-full relative'>
      <Navbar categories={props.categories}/>
      <div className='pt-10'>
      {props.children}
      </div>
    </div>
  )
}

export default TemplateLayout