import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage';
import CanvasJSReact from './canvasjs-2.3.2/canvasjs.react';

class ReportDebtCapacity extends Component {

    state = {
        companyInfo:{
            company:'',
            industry:''
        },
        stackedBarChartOptions:
        {
            title:{
                text: "Debt Capacity Estimation"
            },
            
            axisY:{
                gridThickness: 0
            },
            
            data: 
            [
                {
                    type: "stackedColumn",
                    //legendText: "Anthracite & Bituminous",
                    indexLabelPlacement: "inside",
                    indexLabel: '{y}',
                    dataPoints: [
                        {  y: 112, label: "Current Debt"},
                        {  y: 176, label: "Debt Capacity" }
                    ]
                },  
                {
                    type: "stackedColumn",
                    //legendText: "SubBituminous & Lignite",
                    //showInLegend: "true",
                    //indexLabel: "#total bn",
                    //yValueFormatString: "#0.#,.",
                    indexLabelPlacement: "inside",
                    indexLabel: '{y}',
                    dataPoints: [
                        {  y: '' , label: "Current Debt"},
                        {  y: 290, label: "Debt Capacity" }
                    ]
                }
            ]
        }
    }

    next = () => {
        this.props.history.push('/report/debt_duration');
    }

    home = () => {
        this.props.history.push('/report/cover');
    }

    back = () => {
        this.props.history.push('/report/funding_needs_projection');
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
                <div>
                    <div className='col-5 text-content vertical-align-middle'>
                        Based on current debt and<br/>
                        financial profile, {this.state.companyInfo.company} can take<br/>
                        advantage of an extra debt of <span className='red'>178 Mn</span><br/>
                        <span className='red'>USD</span> to maximize ROE. Find<br/>
                        more about your debt capacity on the smart Rating &amp;<br/>
                        Recommendation platform at<br/>
                        www.aldira.com/smartrating
                    </div>
                    <div className='col-10 vertical-align-middle'>
                        <CanvasJSReact.CanvasJSChart options = {this.state.stackedBarChartOptions}/>
                    </div>
                </div>
                <div className='col-15 upper-margin-lg'>
                    <div className='align-right'>
                        <div className='display-inline-block right-margin'>
                            <button type="button" className="btn btn-primary btn-lg" onClick={this.back}>Back</button>
                        </div>
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

export default withRouter(ReportDebtCapacity);