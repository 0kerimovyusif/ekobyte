export default function Services() {
    return (
        <section className="services flex flex-column">

            <div className="l-service flex flex-row">
                <div className="w-[40px] h-[2px] bg-[#317EFE]"></div>
                <h6>Latest service</h6>
                <div className="w-[40px] h-[2px] bg-[#317EFE]"></div>
            </div>
            <h1>Explore Our Best Premium Quality Service</h1>
            <div className="service-cards">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4 bg-white rounded-xl shadow"></div>
                    <div className="p-4 bg-white rounded-xl shadow"><div className="service-card"></div></div>
                    <div className="p-4 bg-white rounded-xl shadow"><div className="service-card"></div></div>
                    <div className="p-4 bg-white rounded-xl shadow"><div className="service-card"></div></div>
                    <div className="p-4 bg-white rounded-xl shadow"><div className="service-card"></div></div>
                    <div className="p-4 bg-white rounded-xl shadow"><div className="service-card"></div></div>
                </div>
            </div>
        </section>
    )
};