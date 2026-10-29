import { Field, Form, Formik } from "formik";
import Appnav from "../component/Appnav";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Register() {
    const navgite = useNavigate()
    const getdata = async (value) => {
        try {
            const reso = await axios.post("http://localhost:1337/api/auth/local/register", value)
            navgite("/login")
            console.log(reso)
        } catch (error) {
            console.log(error.response?.data)

        }
    }
    return (
        <>
            <Appnav />
            <Formik initialValues={{ email: "", username: "", password: "" }} onSubmit={(value) => { getdata(value) }}>
                <Form>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 m-auto">
                        <legend className="fieldset-legend">Login</legend>

                        <label className="label">user name</label>
                        <Field type="text" className="input" placeholder="user name" name="username" />

                        <label className="label">Email</label>
                        <Field type="email" className="input" placeholder="Email" name="email" />

                        <label className="label">Password</label>
                        <Field type="password" className="input" placeholder="Password" name="password" />

                        <button className="btn btn-neutral mt-4" type="submit">register</button>
                    </fieldset>

                </Form>
            </Formik>
        </>
    )
}
