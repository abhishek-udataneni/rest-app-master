import React from 'react';
import {connect} from "react-redux";
import {getUsersRequest} from './actions';
import { Button } from 'reactstrap';

const App = (props) => {
    const handleClick = ()=>{
        props.getUsersRequest()
    }
    console.log(props.usersList)
    return (
        <div className="container">
            <Button onClick={handleClick}> Hi there </Button>
            Hello there, Click on the button gto get the users list.
            {JSON.stringify(props.usersList)}
        </div>
    );
}
const mapStateToProps = (state) => ({
    usersList: state.users.usersList
})
export default connect(mapStateToProps,{getUsersRequest})(App);