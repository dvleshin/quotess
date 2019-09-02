import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';


const HomePage  = () => {
    useEffect(() => {
        document.title = "Quote of the day"
    }, [])

    return (
         <section className="flex items-center column main-page">
            <div className="flex items-center column"><span className="logo">quotess</span><span className="slogan fs18">Quote of the day</span></div>
            <div className="categories-container">
                <ul className="grid categories">
                    <li><Link to='category/inspire'>Inspire</Link></li>
                    <li><Link to='category/management'>Management</Link></li>
                    <li><Link to='category/sports'>Sports</Link></li>
                    <li><Link to='category/life'>Life</Link></li>
                    <li><Link to='category/funny'>Funny</Link></li>
                    <li><Link to='category/love'>Love</Link></li>
                    <li><Link to='category/art'>Art</Link></li>
                    <li><Link to='category/students'>Students</Link></li>
                </ul>
            </div>
        </section>
    )
}

export default HomePage;