import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>  
                <div className='toolbar'>
                    Debt Optimization Tool
                </div>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(Header);