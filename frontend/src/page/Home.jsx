import Appnav from "../component/Appnav";
import Back from "../assets/back.jpg"

export default function Home() {
    return (

        <>
            <Appnav />
            <section className="h-[calc(100vh-110px)] overflow-hidden">
                <img
                    src={Back}
                    alt="Background image"
                    className="w-full h-full object-cover block"
                />
            </section>
        </>
    )
}
