const LogInView = (props: any) => {
  const { logIn, loading } = props
  const onClickButtonHandler = () => {
    const divUser: any = document.getElementById("user")
    const divPass: any = document.getElementById("pass")

    const email = divUser.value
    const password = divPass.value
    logIn({ email, password })
  }
  return (
    <div>
      <div>User</div>
      <input id="user" />
      <div>Pass</div>
      <input id="pass" />
      <br></br>
      <button onClick={onClickButtonHandler}>Login</button>
      {loading && <div>Loading...</div>}
    </div>
  )
}

export { LogInView }
export default LogInView
