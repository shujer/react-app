import React from 'react'
import './style.less'

let Entry = props => {
  let {book} = props
  return (
    <div className="bookEntry">
      <div className="left">
        <div className="bookCover">
          <img src={book.img} alt="xiaoce" />
        </div>
        <div className="detail">
          <h4>{book.title}</h4>
          <div>{book.author}</div>
          <small>
            {book.lastSectionCount}
            {'小节 · '}
            {book.buyCount}
            {'人已购买'}
          </small>
        </div>
      </div>
      <div className="right" >
      {
          book.isBuy ? '已购':'未购'
      }
      </div>
    </div>
  )
}

export default Entry
