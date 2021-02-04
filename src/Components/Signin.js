export default function Signin () {
    return (
        <div id="sign-in">
            <form id="sign-in-form">
                <label>Email</label>
                <input type="text" name="email" placeholder="example@example.com" />

                <label>Password</label>
                <input type="password" name="password" placeholder="••••••••" />

                <input type="submit" value="Sign In" id="sign-in-button" />
            </form>
        </div>
    )
}