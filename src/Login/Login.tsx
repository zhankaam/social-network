import React from 'react'

export const Login = (props: any) => {
    return <div>
        <h1>Login</h1>
        <form >
            <div>
                <input placeholder={"Login"}/>
            </div>
            <div>
                <input placeholder={"Password"}/>
            </div>
            <div>
                <input type="checkbox"/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}