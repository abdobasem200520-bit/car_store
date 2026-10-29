import axios from "axios";
import { useEffect, useState } from "react"


export default function Getproduct() {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        try {
            const getproduct = async () => {
                const reso = await axios.get("http://localhost:1337/api/cars?populate=*")
                console.log(reso.data.data)
                setproducts(reso.data.data)
            }
            getproduct();
        } catch (error) {
            console.log(error)

        }

    }, [])
    return (
        <>

            <div className="container grid gap-3 w-[90%] m-auto mt-4 grid-cols-3">
                {
                    products.map((product) => (
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure >
                                <img
                                    src={`http://localhost:1337${product.car_img[0].url}  `}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.car_name}</h2>
                                <p>{product.car_discaration}</p>
                                <p className="text-[20px]">{product.car_price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

        </>
    )
}
