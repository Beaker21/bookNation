import React, { Component } from 'react';
import AdminAccount from "./admin-account" 


export default class Account extends Component {
    constructor(props) {
        super(props);
                
    }

    render() {
        return (
            <div className="account-page-wrapper">

                <div className="account-details-wrapper">
                    <div>
                        <h1>This is the Account Page</h1>
                    </div>
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
                    <div>
                        <button>Update Account</button>
                    </div>
                    <div>
                        <button>Return to Shopping</button>
                    </div>
                </div>
                <div>
                    <br></br>
                    <br></br>
                    <AdminAccount />
                </div>
            </div>
        );
        // return (
        //     <div className="auth-page-wrapper">
        //         <div
        //             className="left-column" 
        //             style={{
        //                 backgroundImage: `url(${loginImg})`
        //             }}
        //         />
        //                 {/* // style expects JS (1st {}) and an object (2nd {}) */}
        //         <div className="right-column">
        //             <Login
        //                 handleSuccessfulAuth={this.handleSuccessfulAuth}
        //                 handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
        //             />

        //         </div>


        //     </div>
        // )
    }
}