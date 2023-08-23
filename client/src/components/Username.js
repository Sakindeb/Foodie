import React from "react";
import Avatar from "../assets/user.png"
import { Link } from "react-router-dom";
import styles from '../styles/Username.module.css'
import { Toast } from 'react-hot-toast'
import { useFormik} from 'formik'
//login UI
export default function Username(){
    const formik = useFormik({
        initialValues : {
            username: ''
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit : async values => {
            console.log(values)
        }
    })
    

    return(
        <div className="container mx-auto">
            <div className="flex justify-center items-center h-screen">
                <div className={styles.glass}>
                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold">Karibu Rafiki</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                            Lets Join in
                        </span>
                        <form className="py-1" onSubmit={formik.handleSubmit}>
                            <div className="profile flex justify-center py-4">
                                <img src= {Avatar} className={styles.profile_img} alt="Avatar"/>
                            </div>

                            <div className="textbox flex flex-col items-center gap-6">
                                <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder="Username"/>
                                <button className={styles.btn} type="submit">Login</button>
                            </div>

                            
                            <div className="text-center py-4">
                                <span className="text-gray-500">
                                    Not a member?<Link className="text-green-500" to="/register">Register Now</Link>
                                </span>
                            </div>

                            

                        </form>

                    </div>
                </div>

            </div>

        </div>
    )
}