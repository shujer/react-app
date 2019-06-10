import React, {useEffect, useState} from 'react'

export default props => {
  let [style, setStyle] = useState({
    width: '100%',
    height: '100%',
    backgroundSize: '100% auto',
    backgroundPosition: '50% 50%',
    backgroundColor: '#fff',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${props.alternate})`
  })

  useEffect(() => {
    let isCancelled = false
    try {
      let image = document.createElement('img')
      image.onload = () => {
        if (!isCancelled) {
          setStyle({...style, backgroundImage: `url(${props.src})`})
        }
      }
      image.onerror = () => {}
      image.src = props.src
    } catch (err) {}

    return () => {
      isCancelled = true
    }
  })
  return <div style={{...style, ...props.style}} />
}
