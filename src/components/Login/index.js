import React, {useEffect, useRef, useState} from "react";

const Login = () => {

    const [allUsers, setAllUsers] = useState([]);
    const loginInput = useRef(null);
    const passwordInput = useRef(null);
    let   reloadStorageValue = localStorage.getItem('isAuthorized');
    if(reloadStorageValue === null) reloadStorageValue = false;
    const [userIsAuthorizedState, setUserIsAuthorizedState] = useState(reloadStorageValue);



    useEffect(() => {
        fetch('/users.json')
            .then(res => res.json())
            .then(response => setAllUsers(response.users))
    }, [])

    const userCheck = () => {
        let loginValue = loginInput.current.value;
        let passwordValue = passwordInput.current.value;

        allUsers.map((item, index) => {
            if (loginValue === allUsers[index].login && passwordValue === allUsers[index].password) {
                localStorage.setItem('isAuthorized', true);
                localStorage.setItem('userName', allUsers[index].username );
                setUserIsAuthorizedState(true)
            }
        })
    }

    const logOut = () => {
        localStorage.removeItem('isAuthorized');
        localStorage.removeItem('userName');
        setUserIsAuthorizedState(false);
    }


    return (
        <>

            <div className="container-fluid">

                {userIsAuthorizedState === false ?

                    <div className="row mt-4">
                        <div className="col-12">
                            <div className="col-4 m-auto">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text"
                                          id="basic-addon1">&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;</span>
                                    </div>
                                    <input ref={loginInput} type="text" className="form-control" placeholder="Username"
                                           aria-label="Username"
                                           aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mt-2">
                            <div className="col-4 m-auto">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Password</span>
                                    </div>
                                    <input ref={passwordInput} type="password" className="form-control"
                                           placeholder="Username"
                                           aria-label="Username"
                                           aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 m-auto mt-3">
                            <button type="button" className="btn login-btn display-flex w-100" onClick={userCheck}>
                                Log In
                            </button>
                        </div>
                    </div>


                    :
                    <div className="row">
                        <h2 className="text-success text-center mt-4">{localStorage.getItem('userName') !== null ? localStorage.getItem('userName'):""} are already logged in </h2>
                        <h4 className="text-danger text-center mt-5">If you want to log out of your account, click the button</h4>
                        <button onClick={logOut} type="button" className="btn btn-danger col-1 m-auto">Log Out
                        </button>
                    </div>
                }
            </div>

        </>
    )
}

export default Login
