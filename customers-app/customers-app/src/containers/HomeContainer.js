import React, {Component} from 'react';
import AppFrame from './../components/AppFrame';
import { withRouter } from 'react-router-dom';
import CustomersActions from './../components/CustomersActions';


class HomeContainer extends Component {

    handleOnClick = () => {
        console.log("Handle on click");
        this.props.history.push('/customers');
    }

    render(){
        return (
            <div>
                <AppFrame
                    header="Home"
                    body={
                        <div>
                            <CustomersActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>
                            </CustomersActions>
                        </div>
                    }
                >
                </AppFrame>   
            </div>
        );
    }
}


export default withRouter(HomeContainer);

