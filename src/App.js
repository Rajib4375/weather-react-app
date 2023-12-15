import cold from "../src/assets/cold.jpg";
function App() {
  return (
    <div
      className="w-full h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${cold})` }}
    >
      <div className="w-full h-screen bg-[#00000033]">
        <div className="max-w-900 mx-auto h-full flex items-center justify-between flex-col p-4">
          <div className="flex items-center justify-between bg-[#000000B3] w-full p-4 rounded-xl text-white">
            <input
              className="border-0.8 border-solid border-white rounded-0.4 bg-transparent text-white p-0.5 text-20 font-light"
              type="text"
              name="city"
              id=""
              placeholder="Enter city ..."
            />
            <button className="border bg-white text-black px-8 py-30 border-none rounded-0.4rem text-xl font-medium hover:bg-gray-300 cursor-pointer">
              °F
            </button>
          </div>
          <div className="flex items-center justify-between bg-[#000000B3] w-full p-4 rounded-xl text-white">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-xl font-medium">Bangladesh, BD</h3>
              <img
                style={{ width: 40 }}
                src="https://i.ibb.co/HYdBKRG/weatherlogo.png"
                alt=""
              />
              <h3>cloudy</h3>
            </div>
            <div className="temperature">
              <h1 className="text-5xl">34 °C</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
