import React, {useEffect, useState, useRef} from "react";

const Login = () => {

    const [allUsers, setAllUsers] = useState([]);
    const loginInput = useRef(null);
    const passwordInput = useRef(null);
    const [userIsAuthorized, setUserIsAuthorized] = useState(false);


    useEffect(() => {
        fetch('/users.json')
            .then(res => res.json())
            .then(res => setAllUsers(res.users))
    }, [])

    const userCheck = () => {
        let loginValue = loginInput.current.value;
        let passwordValue = passwordInput.current.value;

        allUsers.map((item, index) => {
            if (loginValue === allUsers[index].login && passwordValue === allUsers[index].password) {
                setUserIsAuthorized(true)
            }
        })

    }



    return (
        <>


            { !userIsAuthorized === true ? <div className="container-fluid">
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
                            <button type="button" className="btn login-btn display-flex w-100" onClick={userCheck}>Log In
                            </button>
                        </div>
                    </div>
                </div>


                :

                <div className="authorized-succes">
                    <h2 className="text-success text-center mt-4">You are already logged in</h2>
                </div>  }
        </>
    )
}

export default Login
