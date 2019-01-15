import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login with google</a></li>
                );
            default:
                return <li><a href="#top">Logout</a></li>;
        }
    }
    render() {
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <a  href ="#top" className="left brand-logo">Emaily</a>
                    <ul  className="right hide-on-med-and-down">
                        { this.renderContent()}
                        
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