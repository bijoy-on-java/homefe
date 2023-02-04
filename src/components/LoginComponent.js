import React from 'react';
import LoginService from '../services/LoginService';

class LoginComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        LoginService.getLoginUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Users List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Id</td>
                            <td> User Name</td>
                            <td> Password</td>
                            <td> Date Created</td>
                            <td> Last Updated</td>
                            <td> Remarks</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.id}>
                                     <td> {user.id}</td>   
                                     <td> {user.userName}</td>   
                                     <td> {user.password}</td>   
                                     <td> {user.dateCreated}</td> 
                                     <td> {user.lastUpdated}</td>
                                     <td> {user.remarks}</td>  
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default LoginComponent