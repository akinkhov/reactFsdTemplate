import React from 'react'
import cls from './SearchBar.module.scss'

const SearchBar = () => {
  return <input className={cls.searchInput} type="text" placeholder="Поиск..." />
}

export default SearchBar
