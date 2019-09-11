import React from 'react';

const Header = props => {
    let { title = "", subTitle = "",onBack=()=>{} } = props;
    return (
        <div className="app-header shadow bg-primary text-white">
            <div className="back" onClick={onBack}>
                <i className="fas fa-arrow-left"></i>
            </div>
            <div className="content">
                <h5 className="m-0"><b>{title}</b></h5>
                {subTitle !== '' && <div>{subTitle}</div>}
            </div>
        </div>
    )
}

export default Header;