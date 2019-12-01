import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage';
import CanvasJSReact from './canvasjs-2.3.2/canvasjs.react';

class ReportFundingNeedsProjection extends Component {
    state = {
        waterFallOptions: {
			animationEnabled: true,
			//exportEnabled: true,
			title:{
                text: "Funding Needs Projection"
			},
			axisY: {
                title:'USD (Mn)',
                gridThickness: 0
            },
            
            data: 
            [
                {
                    type: "waterfall",
                    risingColor:'green',
                    lineDashType:'longDash',
                    indexLabelFontSize: 22,
                    indexLabel: '{y}',
                    dataPoints: [
                        { label: "Working Capital", y: 482, color: 'skyblue' },
                        { label: "CapEx", y: 64, color: 'darkBlue' },
                        { label: "Debt Obligation", y: 118, color: 'lightblue' },
                        { label: "Total Funding Needs", isCumulativeSum: true, color: 'blue'},
                        { label: "Cash", y: -129, color: 'lightgreen' },
                        { label: "Total FCF", y: -395, color: 'green' },
                        { label: "Funding Gap", y: -140, color: 'red' }
                    ]
                }
            ]
        }
    }



    next = () => {
        this.props.history.push('/report/debt_capacity');
    }

    home = () => {
        this.props.history.push('/report/cover');
    }

    render() {
        return (
            <div>
                <div>
                    <div className='col-5 text-content vertical-align-middle'>
                        Based on projection of funding<br/>
                        needs, FCF and current cash<br/>
                        position, there will be <span className='red'>140 mn</span><br/>
                        <span className='red'>USD</span> funding gap accumulated<br/>
                        in 3 years
                    </div>
                    <div className='col-10 vertical-align-middle'>
                        <CanvasJSReact.CanvasJSChart options = {this.state.waterFallOptions}/>
                    </div>
                </div>
                <div className='col-15 upper-margin-lg'>
                    <div className='align-right'>
                        <div className='display-inline-block right-margin'>
                            <button type="button" className="btn btn-primary btn-lg" onClick={this.home}>Home</button>
                        </div>

                        <div className='display-inline-block'>
                                <button type="button" className="btn btn-primary btn-lg" onClick={this.next}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ReportFundingNeedsProjection);