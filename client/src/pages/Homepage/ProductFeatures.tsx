import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const ProductFeatures = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FontAwesomeIcon
            icon={faDroplet}
            size="2xl"
            style={{ color: '#4e8eca' }}
          />
          <h3 className="text-xl font-semibold mb-4 mt-4">Log Fluids</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
            justo vel ligula consectetur tristique.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FontAwesomeIcon
            icon={faPenToSquare}
            size="2xl"
            style={{ color: '#4e8eca' }}
          />
          <h3 className="text-xl font-semibold mb-4 mt-4">Group By Days</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
            justo vel ligula consectetur tristique.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FontAwesomeIcon
            icon={faPenToSquare}
            size="2xl"
            style={{ color: '#4e8eca' }}
          />
          <h3 className="text-xl font-semibold mb-4 mt-4">Update Goal</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
            justo vel ligula consectetur tristique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;