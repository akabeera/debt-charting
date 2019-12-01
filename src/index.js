import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';
import {HashRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Header from './components/Header';
import Wizard from './components/Wizard';
import WizardFinancialData from './components/WizardFinancialData';
import ReportCover from './components/ReportCover';
import ReportFundingNeedsProjection from './components/ReportFundingNeedsProjection';
import ReportDebtCapacity from './components/ReportDebtCapacity';
import ReportDebtDuration from './components/ReportDebtDuration';

import './index.css';

//ReactDOM.render(<App/>, document.getElementById('root'));

const history = createBrowserHistory();

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path='/' render={()=> <Header><App/></Header>}/>
            <Route exact path='/wizard' render={()=> <Header><Wizard/></Header>}/>
            <Route exact path='/wizard/financial_data' render={()=> <Header><WizardFinancialData/></Header>}/>
            <Route exact path='/report/cover' render={()=> <Header><ReportCover/></Header>}/>
            <Route exact path='/report/funding_needs_projection' render={()=> <Header><ReportFundingNeedsProjection/></Header>}/>
            <Route exact path='/report/debt_capacity' render={()=> <Header><ReportDebtCapacity/></Header>}/>
            <Route exact path='/report/debt_duration' render={() => <Header><ReportDebtDuration/></Header>}/>
        </Switch>
    </HashRouter>
    , document.getElementById('root')
);