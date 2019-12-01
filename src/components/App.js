import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class App extends Component {

    state = {
        dataAvailable: true
    };

    componentDidMount(){

    }

    startWizard = () => {
        this.props.history.push('/wizard');
    }

    showReport = () => {
        this.props.history.push('/report/cover');
    }

    render() {
		return (
            this.state.dataAvailable ? 
            (
                <div>
                    <button type="button" className="btn btn-primary btn-lg right-margin" onClick={this.showReport}>Show Report</button>
                    <button type="button" className="btn btn-primary btn-lg" onClick={this.startWizard}>Restart</button>
                </div>
            ) :
            (
                <div>
                    <button type="button" className="btn btn-primary btn-lg" onClick={this.startWizard}>Start Wizard</button>
                </div>
            )
		)
	}
}


export default withRouter(App);