import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from './card/card'
import { nanoid } from '@reduxjs/toolkit';

export const CardContainer = () => {
  const {task} = useSelector((state) => state.todo)
  console.log(task);
  return (
    <div >
      {task?.map((item) => (
        <div >
          <Card key={nanoid()} {...item} />
        </div>
      ))}
    </div>
  );
}
