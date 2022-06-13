import Head from 'next/head'
import signuppic from '../public/pic2.png'
import styles from'../lib/Css/SignupStyle.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import Error from "../lib/components/error"

export default function Register(){
  const router = useRouter()
  const { register, handleSubmit ,formState: { errors }} = useForm();

  const onSubmit = (data)=>{
    createUser(data)
    
  }

  async function createUser(data) {
    const response = await fetch(`/api/register`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({data})
      }).then(res => {console.log(res)})
    .catch(error=> console.error(error))
    
    return true;
}

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
            <Image src={signuppic} alt="Illustration"  width={550} height={580} quality={100} />
          </div>

          <div className={styles.form_div}>
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputs}>

                <div className={styles.field}>
                  <label>
                    <input type="text" placeholder=" " {...register("name",{required: true})}/>
                    <p>Name</p>
                  </label>
                  { errors.name?.type == "required" && <Error errmsg={"You need to enter your name"} />}
                </div>

                <div className={styles.field}>
                  <label>
                    <input type="text" placeholder=" " {...register("username",{required: true})}/>
                    <p>Username</p>
                  </label>
                  { errors.username?.type == "required" && <Error errmsg={"Username is required"} />}

                  
                </div>

                <div className={styles.field}>
                  <label>
                    <input type="email" placeholder=" " required {...register("email",{required: true})}/>
                    <p>Email</p>
                  </label>
                  { errors.email?.type == "required" && <Error errmsg={"Email is required"} />}
                </div>

                <div className={styles.field}>
                  <label>
                    <input type="password" placeholder=" " {...register("password", {required: true, minLength: 6})}/>
                    <p>Password</p>
                  </label>
                  { errors.password?.type == "required" && <Error errmsg={"This field is required"} />}
                  { errors.password?.type == "minLength" && <Error errmsg={"Password Minimum length is 6 characters"} />}
                </div>

                <div className={styles.field}>
                  <label>
                    <input type="password" placeholder=" " required {...register("password2", {required:true})}/>
                    <p>Retype Password</p>
                  </label>
                 { errors.password2?.type == "required" && <Error errmsg={"You need to retype the password"} />}

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
