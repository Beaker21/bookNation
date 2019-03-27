import React, { Component } from 'react';

export default class AdminAccount extends Component {
    constructor(props) {
        super(props);
                
    }

    render() {
        return (
            <div className="account-page-wrapper">

                <div className="account-details-wrapper">
                    <div>
                        <h1>This is the Admin Account Page</h1>
                    </div>
                </div>
                <div className="account-details-wrapper">
                    <div>
                        Name:
                    </div>
                    <div className="update-book">
                        Update Book:
                        <div>
                            Cover Photo:
                        </div>
                        <div>
                            Title:
                        </div>
                        <div>
                            Author:
                        </div>
                        <div>
                            Cost:
                        </div>
                        <div>
                            Genre:
                        </div>
                        <div>
                            Summary:
                        </div>
                    </div>
                    <div>
                        <button>Update Account</button>
                    </div>

                </div>
            </div>
        );
    }
}