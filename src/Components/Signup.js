export default function Signup() {
    return (
    <div id="signup">
        <form id="signup-form">
            <label>First Name</label>
            <input type="text" name="first-name" placeholder="First Name"/>

            <label>Last Name</label>
            <input type="text" name="last-name" placeholder="Last Name"/>

            <label>Email</label>
            <input type="text" name="email" placeholder="example@example.com" />

            <label>Password</label>
            <input type="password" name="password" placeholder="••••••••" />

            <label>Verify Password</label>
            <input type="password" name="password-verification" placeholder="••••••••" />

            <input type="submit" value="Sign Up" id="sign-up-button" />
        </form>
    </div>
    )
}
