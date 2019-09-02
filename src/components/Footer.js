import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends Component {

    render(){
        return <section className="flex space-around footer">
            <NavLink exact to="/" activeClassName="active" className="flex items-center column nav"><i className="fas fa-home"></i>Home</NavLink>
            <NavLink to="/favorite" activeClassName="active" className="flex items-center column nav"><i className="fas fa-heart"></i>My favorite</NavLink>
            <NavLink to="/top10" activeClassName="active" className="flex items-center column nav"><i className="fas fa-medal"></i>Top 10</NavLink>
        </section>
    }
}

export default Footer;