import { Field, Form, Formik } from "formik";
import Appnav from "../component/Appnav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthstore } from "../store/Authsotre";


export default function Login() {
    const { login } = useAuthstore();
    const navigate = useNavigate()
    const handle = async (value) => {
        try {
            const reso = await axios.post("http://localhost:1337/api/auth/local", {
                identifier: value.identifier, password: value.password
            })
            login(reso.data.jwt, true)
            navigate("/")
            console.log(reso.data)

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>

            <Appnav />
            <Formik initialValues={{ identifier: "", password: "" }} onSubmit={(value) => { handle(value) }}>
                <Form>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 m-auto">
                        <legend className="fieldset-legend">Login</legend>

                        <label className="label">Email</label>
                        <Field type="email" className="input" placeholder="Email" name="identifier" />

                        <label className="label">Password</label>
                        <Field type="password" className="input" placeholder="Password" name="password" />

                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </Form>
            </Formik>
        </>
    )
}
