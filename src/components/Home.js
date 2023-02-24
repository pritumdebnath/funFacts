import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <div>
                <nav class="navMenu">
                    <Link to='/FactOne' className='a'>Fact One</Link>
                    <Link to='/FactTwo' className='a'>Fact Two</Link>
                    <Link to='/FactThree' className='a'>Fact Three</Link>
                </nav>
            </div>
        </div>
    )
}

export default withRouter(Home)