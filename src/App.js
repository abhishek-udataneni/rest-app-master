import React from 'react';
import {connect} from "react-redux";
import {getUsersRequest} from './actions';
import { Button } from 'reactstrap';
import './App.css';
import TableComponent from './components/TableComponent';

const App = (props) => {
    const handleClick = ()=>{
        props.getUsersRequest()
    }

    // add the json details here
    let data = [
        {
            testSuiteName: "Sincere@april.biz",
            testCaseName: 1,
            status: "Leanne Graham",
            dateTime: "1-770-736-8031 x56442",
            testCaseLogs: "Bret"
        },
    ]

    // console.log(props.usersList)
//     if(!props.usersList){
//         return( 
//         <div> <Button onClick={handleClick}> Hi there </Button>
//         Hello there, Click on the button gto get the users list.
//         </div>   
//  )
//     }
    return (
        <div className="container">
            <TableComponent data={data}/>
        </div>
    );
}
const mapStateToProps = (state) => ({
    usersList: state.users.usersList
})
export default connect(mapStateToProps,{getUsersRequest})(App);