import React from 'react';

const search = () => {
    return (
        <div id='search'>
            <div className="search__inner">
                <label htmlFor="searchInput">검색</label>
                <input
                    type="search"
                    className="search__input"
                    placeholder='검색어를 입력해주세요'
                />
            </div>
        </div>
    )
}

export default search