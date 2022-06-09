import { getCsrfToken } from "next-auth/client"

export default function SignIn({ csrfToken }) {
  return (
    <>
<form action="./api/auth/callback/credentials" method="POST">

<input name="csrfToken" type="hidden" defaultValue={csrfToken} />

<label>username</label>

<input name="username" id="input-username-for-credentials-provider" type="text" placeholder="Your Username"/>
<label>password</label>
<input name="password" id="input-password-for-credentials-provider" type="password" placeholder=""/>

<button type="submit">Sign in with Custom Provider</button>
</form>
    </>
  )
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken },
  }
}
