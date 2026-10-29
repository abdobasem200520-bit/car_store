import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthstore } from "../store/Authsotre";

const link = [{ titel: "Home", link: "/" },
{ titel: "Porduct", link: "/product" }
]

export default function Appnav() {
    const { isAuth, logout } = useAuthstore()
    const navgite = useNavigate()
    const log = () => {
        logout();
        navgite("/")
    }
    const location = useLocation();
    return (
        <>
            <div className="container w-full  bg-[#C5A059]   ">
                <div className="flex items-center  justify-between w-[90%] m-auto p-5 text-white">
                    <div className="left flex items-center gap-10">
                        <h1 className="text-[25px]  uppercase">Basuniny Car</h1>
                        <div className="lin flex items-center gap-5">
                            {
                                link.map((item) => (
                                    <Link key={item.link} to={item.link} className={`text-white p-2 text-[20px] rounded-lg ${location.pathname === item.link ? "bg-[#454545]" : "bg-[#C5A059]"}`}> {item.titel}</Link>
                                ))
                            }
                        </div>
                    </div>

                    {isAuth ? (<button className="btn btn-neurtal"> <Link onClick={() => { log() }} className="text-[20px]"> logout</Link></button>) : (<div className="ri gap-2 flex ">
                        <button className="btn btn-neurtal"> <Link to="/login" className="text-[20px]"> Login</Link></button>
                        <button className="btn btn-neurtal"> <Link to="/register" className="text-[20px]"> register</Link></button>
                    </div>)}


                </div>
            </div>
        </>
    );
}
