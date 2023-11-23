import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const navigete = useNavigate();

    const handleMenuToggle = () => {
        const event = new Event('menuToggle');
        window.dispatchEvent(event);
    };

    const handleSearch = () => {
        // console.log(searchKeyword);
        if (searchKeyword) {
            navigete(`/search/${searchKeyword}`);
            setSearchKeyword('');
        }
    }

    return (
        <div id='search'>
            <div className="mobile__menu" onClick={handleMenuToggle}>
                <div>
                    <span></span>
                </div>
            </div>
            <div className="search__inner">
                <label htmlFor="searchInput">검색</label>
                <input
                    type="search"
                    className="search__input"
                    placeholder='검색어를 입력해주세요'
                    onChange={e => setSearchKeyword(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default Search;
