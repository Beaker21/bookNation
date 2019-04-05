import React, { Component } from 'react';
import AdminAccount from "./admin-account" 


export default class Account extends Component {
    constructor(props) {
        super(props);
                
    }

    render() {
        return (
            <div className="account-page-wrapper">

                <div>
                    <h1>This is the Account Page</h1>
                </div>
                <div className="account-details-wrapper">
                    <div>
                        Name:
                    </div>
                    <div>
                        Email:
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
                {/* <div>
                    <br></br>
                    <br></br>
                    <AdminAccount /> */}
                {/* </div> */}
            </div>
        );
    }
}