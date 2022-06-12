import Head from 'next/head'
import signuppic from '../public/pic2.png'
import styles from'./css/SignupStyle.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Register(){
  const router = useRouter()

  return (
    <div className={styles.body}>
  <div className={styles.area} >
              <ul className={styles.circles}>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
              </ul>
      </div >

      <section className={styles.section}>
        <div className={styles.container}>

          <div className={styles.img}>
            <Image src={signuppic} alt="Illustration"  width={510} height={540} quality={100} />
          </div>

          <div className={styles.form_div}>
            <h1>Sign Up</h1>

            <form action="#">
              <div className={styles.inputs}>

                <div className={styles.field}>
                  <label>
                    <input type="text" placeholder=" "/>
                    <p>Name</p>
                  </label>
                </div>

                <div className={styles.field}>
                  <label>
                    <input type="text" placeholder=" "/>
                    <p>Username</p>
                  </label>
                </div>

                <div className={styles.field}>
                  <label>
                    <input type="email" placeholder=" " required/>
                    <p>Email</p>
                  </label>
                </div>

                <div className={styles.field}>
                  <label>
                    <input type="password" placeholder=" "/>
                    <p>Password</p>
                  </label>
                </div>

                <div className={styles.field}>
                  <label>
                    <input type="password" placeholder=" " required/>
                    <p>Retype Password</p>
                  </label>
                </div>

              </div>


              <div className={styles.buttons_center}>
                <button className={` ${styles.btn} ${styles.bg_purple} `} type="submit">Sign UP</button>

                <p>Already have an account ?</p>
                <button type="button" onClick={()=> router.push('/login')} className={` ${styles.btn} ${styles.bg_purple} `}>Login</button>
              </div>

            </form>
          </div>

        </div>
      </section>
</div>
  )
}
