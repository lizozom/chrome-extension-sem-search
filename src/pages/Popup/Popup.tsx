import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Popup.css';
import SearchBar from './SearchBar';

const Popup = () => {
  const search = (searchTerm: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(searchTerm);
      }, 1000);
    });
  };

  return (
    <div className="App">
      <SearchBar search={search} />
    </div>
  );
};

export default Popup;
