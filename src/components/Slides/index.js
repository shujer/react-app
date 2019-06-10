import React, {useEffect} from 'react'
import LazyImg from '@components/LazyImg'
import EmptyImage from '@assets/icons/post/explore_post.png'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import './style.less'

export default props => {
  const {items} = props
  useEffect(() => {
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      autoplay: {
        disableOnInteraction: false
      }
    })
  })
  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {items.map((item, index) => (
          <div className="swiper-slide" key={item._id}>
            <a href={item.eventUrl} title="link">
              <LazyImg src={item.screenshot} alternate={EmptyImage} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
