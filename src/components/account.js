import React, { Component } from 'react';
import AdminAccount from "./admin-account";
import Cookie from "js-cookie";



export default class Account extends Component {
    constructor(props) {
        super(props);

        this.state ={
            usertype: "",
            userdata: []
        }
        this.handleAccountData = this.handleAccountData.bind(this)  
    }

    handleAccountData() {
        let email = Cookie.get("session")

        if (email) {
            fetch (`https://book-nation.herokuapp.com//single/email/user/${email}`, {
            method: 'GET',
            headers: {
                "accepts": "application/json",
                "Content-Type": "application/json"
            }
            })
            .then(response => {return response.json();})
            .then(data => {this.setState({data: data})})
            .then(data => {this.setState({usertype: data[4]}), console.log(this.state.usertype)})
            .catch(err => {console.log("Fetch Error" + err)})
        }

    }
    

    componentDidMount() {
        this.handleAccountData();
    }

    

    render() {
        return (
            <div className="account-page-wrapper">
                { this.state.usertype == "admin" ? <AdminAccount /> : <div>
                <div>

                        <div>
                            <h1>This is the Account Page</h1>
                        </div>
                    </div>
                    <div className="account-details-wrapper">
                        <div>
                            Name: { this.state.userdata[1] }
                        </div>
                        <div>
                            Email: { this.state.userdata[2] }
                        </div>
                        <div className="order-history-wrapper">
                            Order History:
                            <div>
                                Title:
                            </div>
                            <div>
                                Date:
                            </div>
                            <div>
                                Cost:
                            </div>
                        </div>
                        <div className="btn">
                            <button>Update Account</button>
                        </div>
                        <div className="btn">
                            <button>Return to Shopping</button>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}