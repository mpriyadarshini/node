import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <a  href ="#top" className="left brand-logo">Emaily</a>
                    <ul  className="right hide-on-med-and-down">
                        <li><a href="#top" >Login with google</a></li>
                        
                    </ul>
                </div>
            </nav>
        );
    }
}
function mapStateToProps({ auth }) {
    return {auth };
}
export default connect(mapStateToProps) (Header);