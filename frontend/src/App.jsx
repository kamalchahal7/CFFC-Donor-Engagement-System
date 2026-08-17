function App() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white text-center py-10 px- relative">
        <h1 className="text-3xl font-bold text-black-600 text-center py-4">
          CFFC Donation Page
        </h1>
        <h3 className="text-xl font-medium text-gray-300 py-1 text-center mb-7 md:mb-0">
          Feeding the poorest of the poor in developing countries since 1983
        </h3>
        <a href="https://https://www.canadahelps.org/en/dn/4714" 
           className="relative md:absolute md:right-10 md:top-1/2 md:-translate-y-1/2 mt-4 md:mt-0 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-300"
        >Donate Now
        </a>
      </section>
      {/* Impact Section */}
      <section>
        <h3 className="text-xl font-medium py-1 text-center">
          Over the last decade, we have delivered roughly:
        </h3>
        <div className=" flex justify-center gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold">2,800+</p>
            <p className="text-gray-500">Shipments</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">40,000+</p>
            <p className="text-gray-500">Metric Tonnes</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">20+</p>
            <p className="text-gray-500">Countries</p>
          </div>
        </div>
        <h3 className="text-xl font-light py-1 text-center">
          These shipments would not be possible without our generous donors as:
        </h3>
        <h3 className="text-xl font-medium py-1 text-center">
          97% of our donations go directly towards shipments with the remaining funding administrative costs.
        </h3>
        {/* Change below to a interactive pie chart */}
        {/* <p className="text-xl font-medium py-1 text-center">
          Our latest shipments (2025) include the following countries:
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-10">Angola</span>
          <span className="px-10">Cameroon</span>
          <span className="px-10">El Salvador</span>
          <span className="px-10">Ghana</span>
          <span className="px-10">Honduras</span>
          <span className="px-10">Jamaica</span>
          <span className="px-10">Liberia</span>
          <span className="px-10">Malawi</span>
          <span className="px-10">Peru</span>
          <span className="px-10">Sierra Leone</span>
          <span className="px-10">Tanzania</span>
          <span className="px-10">Zambia</span>
        </div> */}
      </section>
        
      <section className="flex flex-col md:flex-row gap-8 px-8 py-6 md:py-10">
        <div className="flex-1">
          {/* What's Needed Section */}
          <h3 className="text-xl font-medium py-1 text-center">
            We are currently in need of the following items:
          </h3>
          <h3 className="text-xl font-medium py-1 text-center">
            Stuff we always need:
          </h3>
          <p className="py-1 text-center">Cooking Oil</p>
          <p className="py-1 text-center">Table Salt</p>
          <p className="py-1 text-center">Beans</p>
          <p className="py-1 text-center">Canned Tomatoes</p>
          <p className="py-1 text-center">Rice</p>
          <h3 className="text-xl font-medium py-1 text-center">
            Urgent items needed now:
          </h3>
          <p className="py-1 text-center">Fishing Equipment</p>
          <p className="py-1 text-center">Blankets</p>
          <p className="py-1 text-center">Hoodies</p>
          <p className="py-1 text-center">Books</p>
          <p className="py-1 text-center">Electronics</p>
        </div>

        {/* Monetary Donation Section */}
        <div className="flex-1">
          <h3 className="text-xl font-medium py-1 text-center">
            You can also support us through monetary donations via the following methods:
          </h3>
          <div className="grid grid-cols-2 gap-6 mt-4">
            {/* Credit Card/Paypal - Top Left */}
            <div className="text-center p-4 border rounded-lg">
              <h3 className="text-lg font-bold">
                Credit Card/Paypal
              </h3>
              <a href="https://https://www.canadahelps.org/en/dn/4714" 
              className = "inline-block mt-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-300"
              >Donate Now
              </a>
            </div>

            {/* E-Transfer - Top Right */}
            <div className="text-center p-4 border rounded-lg">
              <h3 className="text-lg font-bold">
                E-Transfer to:
              </h3>
              <p className="mt-2">Send to: <a href="mailto:cffc.aasimone@yahoo.ca"
                  className="text-blue-600 underline hover:text-blue-800">
                    cffc.aasimone@yahoo.ca
                  </a>
              </p>
            </div>
            
            {/* Cheque - Bottom Left */}
            <div className="text-center p-4 border rounded-lg">
              <h3 className="text-lg font-bold">
                Cheque
              </h3>
              <p>Payable to Canadian Food for Children</p>
              <p>Address: 1258 Lakeshore Rd E, Mississauga, ON L5E 1E9</p>
            </div>

            {/* Securities/Mutual Funds - Bottom Right */}
            <div className="text-center p-4 border rounded-lg">
              <h3 className="text-lg font-bold">
                Securities/Mutual Funds
              </h3>
              <a href="https://www.canadahelps.org/en/dn/45754" 
                className = "inline-block mt-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-300"
                >Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>

      
      
      {/* Footer Section */}  
      <section>
        <h3 className="text-xl font-medium py-1 text-center bg-gray-500">
          1258 Lakeshore Rd E, Mississauga, ON L5E 1E9
        </h3>
      </section>
    </div>
  )
}

export default App