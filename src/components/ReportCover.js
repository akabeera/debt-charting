import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage';
import {MdStar} from 'react-icons/md';

class ReportCover extends Component {

    state = {
        companyInfo: {
            company: '',
            industry: ''
        }
    }

    componentDidMount(){
        let companyInfo = reactLocalStorage.getObject('company_info', true);
        if (companyInfo && Object.keys(companyInfo).length > 0){
            this.setState({...this.state, companyInfo:companyInfo});
        }
    }

    fundingNeedsProjection = () => {
        this.props.history.push('/report/funding_needs_projection');

    }

    debtCapacity = () => {
        this.props.history.push('/report/debt_capacity');
    }

    debtDuration = () => {
        this.props.history.push('/report/debt_duration');
    }

    render() {
        return (
            <div>
                <div className='text-header'>
                    Report
                </div>
                <div className='col-10 align-left'>
                    <div className='text-content text-green'>
                        <div className='bottom-margin-lg bold'>
                            Recommendation
                        </div>
                        <div className='bottom-margin-lg vertical-align-top'>
                            <MdStar/> Additional 178 Mn USD debt capacity for {this.state.companyInfo.company}
                        </div>
                        <div className='bottom-margin-lg'>
                            <MdStar/> Potential to lock in interest rate for longer term by issuing bond
                        </div>
                        <div className='bottom-margin-lg'>
                            <MdStar/> Opportunities to optimize and match duration of liabilities and assets
                        </div>
                    </div>
                    <div>
                        <div className='col-6'>
                            <button type="button" className="btn btn-primary btn-lg" onClick={this.fundingNeedsProjection}>Funding Needs<br/>Projection</button>
                        </div>

                        <div className='col-6'>
                            <button type="button" className="btn btn-primary btn-lg" onClick={this.debtCapacity}>Debt Capacity<br/>Estimation</button>
                        </div>

                        <div className='col-6'>
                            <button type="button" className="btn btn-primary btn-lg" onClick={this.debtDuration}>Debt Duration<br/>Optimization</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ReportCover);