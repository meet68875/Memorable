import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

// Component to load and display hotels based on state code
const HotelComponent = () => {
  const [stateList, setStateList] = useState([]); // List of states
  const [selectedStateCode, setSelectedStateCode] = useState(''); // Selected state code
  const [hotels, setHotels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 10;

  // Read and parse the CSV file (from public folder)
  useEffect(() => {
    const fetchStateData = () => {
      Papa.parse('/data.csv', {
        download: true,
        header: true,
        complete: (result) => {
          const states = result.data.map((row) => ({
            state: row['State'], // Adjust according to CSV columns
            code: row['StateCode'], // Adjust according to CSV columns
          }));
          setStateList(states);
        },
        error: (error) => {
          console.error('Error parsing CSV file:', error);
        },
      });
    };

    fetchStateData();
  }, []);

  // Fetch hotel data when a state is selected
  useEffect(() => {
    if (selectedStateCode) {
      fetch(`https://api.amadeus.com/v2/shopping/hotel-offers?cityCode=${selectedStateCode}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Host': 'amadeus-api2.p.rapidapi.com',
          'X-RapidAPI-Key': 'eb0beffe91msh6f8dd2a08e47185p10e527jsn0543fbe6d3bd',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const limitedHotels = data.data.slice(0, 50).map((hotel) => ({
            id: hotel.hotel.hotelId,
            name: hotel.hotel.name,
            city: hotel.hotel.address.cityName,
            description: hotel.hotel.description?.text || "No description available",
            photoUrl: hotel.hotel.media ? hotel.hotel.media[0].uri : 'default-image-url.jpg',
            price: hotel.offers[0].price.total,
            reviews: hotel.hotel.rating || "No rating",
          }));
          setHotels(limitedHotels);
        })
        .catch((err) => {
          console.error(err);
          setHotels([]);
        });
    }
  }, [selectedStateCode]);
  

  // Pagination logic
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Dropdown for State Code */}
      <section className="container mx-auto py-6 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Select State Code</h2>
        <select
          onChange={(e) => setSelectedStateCode(e.target.value)}
          className="p-2 rounded border border-gray-300"
        >
          <option value="">Select State</option>
          {stateList.map((state) => (
            <option key={state.code} value={state.code}>
              {state.state}
            </option>
          ))}
        </select>
      </section>

      {/* Hotel Cards Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Hotels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentHotels.length > 0 ? (
            currentHotels.map((hotel) => (
              <div key={hotel.id} className="bg-white shadow-lg rounded-md overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={hotel.photoUrl || 'default-image-url.jpg'}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{hotel.name}</h3>
                  <p className="text-gray-600 mt-2">{hotel.description}</p>
                  <p className="text-gray-500 mt-2">{hotel.city}</p>
                  <p className="text-blue-600 mt-2">${hotel.price}</p>
                  <p className="text-gray-400 mt-2">
                    {hotel.reviews} reviews ({hotel.reviewCount} reviews)
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No hotels available for the selected state code.</p>
          )}
        </div>
        {hotels.length > hotelsPerPage && (
          <div className="flex justify-center mt-8">
            {Array.from({ length: Math.ceil(hotels.length / hotelsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default HotelComponent;
