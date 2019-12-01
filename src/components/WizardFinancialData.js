import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import CanvasJSReact from './canvasjs-2.3.2/canvasjs.react';

class WizardFinancialData extends Component {
    render() {
        return (
            <div className='text-header'>
                Financial Data
            </div>
        )
    }
}

export default withRouter(WizardFinancialData);