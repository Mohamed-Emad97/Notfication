import React from 'react';

export default function Head() {
  return (
    <>
        <header className='d-flex justify-content-between align-items-center gap-5'>
            <div className="title">
                <span className='fw-bolder h4'>Notfication</span>
                <span className="num ms-2 d-inline-block text-center px-2 rounded-2">3</span>
            </div>
            <div className="allRead">
                <p className='m-0 p-0 txt'>Mark All As Read</p>
            </div>
        </header>
    </>
  )
}
