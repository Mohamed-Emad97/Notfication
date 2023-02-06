import React from 'react';
import {  avatar_1, avatar_2, avatar_3, avatar_4, avatar_5, avatar_6, avatar_7, chess} from "../../Utilies/imgs";

export default function Items() {
  return (
    <>
    <section id="items" className="py-4">
      <div className="container">
        <div className="notfyCard rounded-2 d-flex gap-2 align-items-center p-3">
          <div className="img">
            <img src={avatar_5} alt="avatar-pc" className="w-100 rounded-circle" />
          </div>
          <div className="content">
            <p className='desc mb-0 d-flex align-items-center justify-content-center flex-lg-row flex-md-row flex-sm-row flex-column'>
              <span className='title fw-bolder'>Mark Webber</span>
              <span className="lightTxt mx-1">reacted to your recent post</span>
              <span className='txt fw-bold me-1'>My first tournament today  <span className="red rounded-circle ms-2 d-inline-block"></span></span>
            </p>
            <p className='time'>1m ago</p>
          </div>
        </div>

        <div className="notfyCard rounded-2 d-flex gap-2 align-items-center p-3 mt-2">
          <div className="img">
            <img src={avatar_1} alt="avatar-pc" className="w-100 rounded-circle" />
          </div>
          <div className="content">
            <p className='desc mb-0 d-flex align-items-center justify-content-center flex-lg-row flex-md-row flex-sm-row flex-column'>
              <span className='title fw-bolder'>Angela Grey</span>
              <span className="lightTxt mx-1">followed you  <span className="red rounded-circle ms-2 d-inline-block"></span></span>
            </p>
            <p className='time'>5m ago</p>
          </div>
        </div>

        <div className="notfyCard rounded-2 d-flex mt-2 gap-2 align-items-center p-3">
          <div className="img">
            <img src={avatar_3} alt="avatar-pic" className="w-100 rounded-circle" />
          </div>
          <div className="content">
            <p className='desc mb-0 d-flex align-items-center justify-content-center flex-lg-row flex-md-row flex-sm-row flex-column'>
              <span className='title fw-bolder'>Jacob Thompson</span>
              <span className="lightTxt mx-1">has join your group</span>
              <span className='txt fw-bold me-1'>Chess Club <span className="red rounded-circle ms-2 d-inline-block"></span></span>
            </p>
            <p className='time'>1day ago</p>
          </div>
        </div>

        <div className="notfyCard bg-transparent rounded-2 d-flex mt-2 gap-2 align-items-center p-3 mb-0">
          <div className="img align-self-start">
            <img src={avatar_7} alt="avatar-pic" className="w-100 rounded-circle" />
          </div>
          <div className="content d-flex flex-column">
            <p className='desc mb-0 d-flex align-items-center flex-lg-row flex-md-row flex-sm-row flex-column'>
              <span className='title fw-bolder'>Rizky Hassanuddin</span>
              <span className="lightTxt mx-1">sent you a private message</span>
            </p>
            <p className='time'>5 day ago</p>
            <p className='msg p-3 bg-transparent rounded-2'>
              Hello, thanks for setting up the Chess Club. i've been member for a <br/>
              few weeks now and i'm already having lots of fun and improving my <br/>
              game.
            </p>
          </div>
        </div>

        <div className="notfyCard bg-transparent rounded-2 d-flex mt-2 gap-2 align-items-center p-3">
          <div className="img">
            <img src={avatar_4} alt="avatar-pic" className="w-100 rounded-circle" />
          </div>
          <div className="content">
            <p className='desc mb-0 d-flex align-items-center justify-content-center flex-lg-row flex-md-row flex-sm-row flex-column'>
              <span className='title fw-bolder'>Kimberly Smith</span>
              <span className="lightTxt mx-1">commented on your picture</span>
            </p>
            <p className='time'>1 week ago</p>
          </div>
          <img src={chess} alt="chess-pic" className='chessImg rounded-2' />
        </div>

        <div className="notfyCard bg-transparent rounded-2 d-flex mt-2 gap-2 align-items-center p-3">
          <div className="img">
            <img src={avatar_6} alt="avatar-pic" className="w-100 rounded-circle" />
          </div>
          <div className="content">
            <p className='desc mb-0 d-flex align-items-center justify-content-center flex-lg-row flex-md-row flex-sm-row flex-column'>
              <span className='title fw-bolder'>Nathan Peterson</span>
              <span className="lightTxt mx-1">reacted to your post</span>
              <span className='txt fw-bold me-1'>5 end-game strategies to increase your win rate</span>
            </p>
            <p className='time'>2 week ago</p>
          </div>
        </div>

        <div className="notfyCard bg-transparent rounded-2 d-flex mt-2 gap-2 align-items-center p-3">
          <div className="img">
            <img src={avatar_2} alt="avatar-pic" className="w-100 rounded-circle" />
          </div>
          <div className="content">
            <p className='desc mb-0 d-flex align-items-center justify-content-center flex-lg-row flex-md-row flex-sm-row flex-column'>
              <span className='title fw-bolder'>Anna Kim</span>
              <span className="lightTxt mx-1">left the group</span>
              <span className='txt me-1'>Chess Club</span>
            </p>
            <p className='time'>2 week ago</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
