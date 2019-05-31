import React from 'react'
import './style.less'

export default props => {
  return (
    <div className="searchbar" onClick={props.handleSearch}>
      <div className="search-content">
          <i className="juejin-icon-md juejin-tab_home-find-search"></i>
          <span>搜索文章、用户、标签</span>
      </div>
    </div>
  )
}
