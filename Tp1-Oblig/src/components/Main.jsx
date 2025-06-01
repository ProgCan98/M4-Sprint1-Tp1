import { useState } from 'react';
import { services } from '../utils/services';

const Main = () => {
  const [showDetails, setShowDetails] = useState(null);

  const handleToggleDetails = (id) => {
    setShowDetails(showDetails === id ? null : id);
  };

  return (
    <main className=" container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Bienvenidos a Nuestra Landing Page
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              onClick={() => handleToggleDetails(service.id)}
            >
              {showDetails === service.id ? 'Ocultar' : 'Ver más'}
            </button>
            {showDetails === service.id && (
              <p className="mt-4 text-gray-600">{service.description}</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
