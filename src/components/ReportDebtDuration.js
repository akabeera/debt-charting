import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage';
import CanvasJSReact from './canvasjs-2.3.2/canvasjs.react';

class ReportDebtDuration extends Component {
    state = {
        companyInfo: {
            company: '',
            industry: ''
        },
        stackedBarChart100: {
            title:{
                text: "Debt Duration"
            },
            toolTip: {
                shared: true
            },          
            data:
            [
                {
                    type: "stackedBar100",
                    showInLegend: true,
                    indexLabel: "{y}",
                    indexLabelFontSize: 22,
                    indexLabelFontWeight: 'bold',
                    name: "Short Term",
                    color: 'lightgreen',
                    dataPoints: 
                    [
                        {y: 33, label: "GEMS" },
                        {y: 20, label: "Mining & Exploration" },
                        {y: 20, label: "Infrastructure" },
                        {y: 0, label: "Trading" },
                        {y: 10, label: "Service" },
                        {y: 25, label: "Manufacturer" }   
                    ]
                },
                {
                    type: "stackedBar100",
                    showInLegend: true,
                    indexLabel: "{y}",
                    indexLabelFontSize: 22,
                    indexLabelFontWeight: 'bold',
                    name: "Long Term",
                    color:'green',
                    dataPoints: 
                    [
                        {y: 67, label: "GEMS" },
                        {y: 80, label: "Mining & Exploration" },
                        {y: 80, label: "Infrastructure" },
                        {y: 100, label: "Trading" },
                        {y: 90, label: "Service" },
                        {y: 75, label: "Manufacturer" }
                    ]
                }
            ]
        }
    };

    back = () => {
        this.props.history.push('/report/debt_capacity');
    }

    home = () => {
        this.props.history.push('/report/cover');
    }

    componentDidMount() {
        let companyInfo = reactLocalStorage.getObject('company_info', true);
        if (companyInfo && Object.keys(companyInfo).length > 0){
            this.setState({...this.state, companyInfo:companyInfo});
        }
    }

    render() {
        return (
            <div>
                <div className='col-5 text-content vertical-align-middle'>
                    {this.state.companyInfo.company} has a below sector average LT<br/>
                    to ST debt ratio (2x vs 4x); showing<br/>
                    showing opportunities to optimize debt<br/>
                    structure and duration by adjusting<br/>
                    the LT/ST ratio, structure of bond vs<br/>
                    bank loan<br/>
                    Find more about optimizing your<br/>
                    debt structure and duration<br/>
                    optimization on the smart Rating &amp;<br/>
                    Recommendation platform at<br/>
                    www.aldira.com/smartrating
                </div>
                <div className='col-10 vertical-align-middle'>
                    <CanvasJSReact.CanvasJSChart options = {this.state.stackedBarChart100}/>
                </div>
                <div className='col-15 upper-margin-lg'>
                    <div className='align-right'>
                        <div className='display-inline-block right-margin'>
                            <button type="button" className="btn btn-primary btn-lg" onClick={this.home}>Home</button>
                        </div>

                        <div className='display-inline-block'>
                                <button type="button" className="btn btn-primary btn-lg" onClick={this.back}>Back</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ReportDebtDuration);