import GambarLaptop from '../images/kelompok-3.jpeg';

function Hero() {
  return (
    <>
      <div className="hero bg-blue-950 min-h-screen">
        <div className="hero-content flex-col">
          <img
            src={GambarLaptop}
            className="rounded-lg shadow-2xl object-cover"
            style={{ width: '500px', height: '200px' }}
            alt="Laptop"
          />
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">Kelompok-3 Store</h1>
            <p className="py-6 text-white">
              Tempat jual beli laptop yang murah dan terpercaya hanya ada di kelompok-3
            </p>
            <button className="btn btn-primary">CLICK HERE</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
