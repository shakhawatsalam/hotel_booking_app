import React from "react";
import './featured.css'

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1554357475-accb8a88a330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                <div className="featuredTitles">
                    <h1>Jordan</h1>
                    <h2>562 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80" alt="" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
      
        </div>
    );
};

export default Featured;
