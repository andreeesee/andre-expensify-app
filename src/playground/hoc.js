//HOC HIGH ORDER COMPONENT

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>TEST INFO TAG</h1>
        <p>info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>

            ) : ( 
                <p>Please login to view</p>
            )
        }
        </div>
    );
};

//requireAuthentication
const AdminInfo = withAdminWarning(Info);
const AuthInf = requireAuthentication(Info);


//ReactDOM.render(<AdminInfo isAdmin={true} info='andre'/>, document.getElementById('app'));
ReactDOM.render(<AuthInf isAuthenticated={true} info='andre'/>, document.getElementById('app'));