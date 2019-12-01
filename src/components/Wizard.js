import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage';

class Wizard extends Component {

    state = {
        company: '',
        industry: ''
    }

    setCompany = (evt) => {
        this.setState({...this.state, company:evt.target.value});
    }

    selectIndustry = (evt) => {
        this.setState({...this.state, industry:evt.target.value});
    }

    next = () => {
        reactLocalStorage.setObject('company_info', this.state);
        this.props.history.push('/wizard/financial_data')
    }

    home = () => {
        this.props.history.push('/');
    }

    componentDidMount() {
        let companyInfo = reactLocalStorage.getObject('company_info', true);
        if (companyInfo && Object.keys(companyInfo).length > 0){
            this.setState({...this.state, company:companyInfo.company, industry:companyInfo.industry});
        }
    }

    render() {
        return (
            <div>
                <div className='text-header'>
                    General Information
                </div>
                <div>
                    <div className='col-5 text-content align-left'>
                        Company
                    </div>
                    <div className='col-10'>
                        <input type='text' className='form-control' value={this.state.company} onChange={this.setCompany}/>
                    </div>
                </div>
                <div>
                    <div className='col-5 text-content align-left'>
                        Industry
                    </div>
                    <div className='col-10'>
                        <select  className='col-20 text-content align-left' value={this.state.industry} onChange={(e) => this.selectIndustry(e)}>
                            <option value='mining_exploration'>Mining &amp; Exploration</option>
                            <option value='manufacturer'>Manufacturer</option>
                            <option value='infrastructure'>Infrastructure</option>
                            <option value='trading'>Trading</option>
                            <option value='service'>Service</option>
                        </select>
                    </div>
                </div>
                <div className='col-15 align-right'>
                    <button type="button" className="btn btn-primary btn-lg right-margin" onClick={this.home}>Home</button>
                    <button type="button" className="btn btn-primary btn-lg" onClick={this.next}>Next</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Wizard);