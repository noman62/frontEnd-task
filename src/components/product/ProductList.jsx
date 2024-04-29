import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import ProductsData from '../ProductsData/ProductsData';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
 

  useEffect(() => {
    setProducts(ProductsData);
  }, []);



  const deleteProduct = id => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  const editProduct = product => {
    setSelectedProduct(product);
  };

  const handleEdit = updatedProduct => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === updatedProduct.id ? { ...product, ...updatedProduct } : product
      )
    );
    setSelectedProduct(null);
  };

  const handleAddNewSubmit = newItem => {
    setProducts(prevProducts => [...prevProducts, newItem]);
    setSelectedProduct(null);
  };

  return (
    <div className='bg-gray-50'>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <button
          onClick={() => setSelectedProduct({})}
          className='mb-4 px-4 py-2 text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 rounded-md'
        >
          <FontAwesomeIcon className='mr-2' icon={faPlus} />
          Add New Item
        </button>
        <div className='grid gap-5 lg:grid-cols-5 sm:max-w-sm sm:mx-auto lg:max-w-full'>
          {products.map(medicine => (
            <div key={medicine.id} className='overflow-hidden rounded bg-white'>
              <div className='p-3 flex justify-between items-center'>
                <img
                  src={medicine.Image}
                  className='object-cover w-full h-64 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                  alt=''
                />
              </div>

              <div className='px-3'>
                <p className='text-2xl font-bold leading-5'>{medicine.name}</p>
                <div className=' flex justify-between items-center'>
                  <h5>${medicine.price}</h5>
                  <div className='flex space-x-3'>
                 
                    <button
                      onClick={() => deleteProduct(medicine.id)}
                      className='rounded-full flex items-center justify-center bg-red-500 text-white p-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    <button
                      onClick={() => editProduct(medicine)}
                      className='rounded-full flex items-center justify-center bg-yellow-500 text-white p-2 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
          <div className='relative w-auto max-w-3xl mx-auto my-6'>
            <div className='relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none'>
              <div className='flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200'>
                <h3 className='text-3xl font-semibold'>{selectedProduct.id ? 'Edit Item' : 'Add New Item'}</h3>
                <button
                  className='p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                  onClick={() => setSelectedProduct(null)}
                >
                  <span className='text-xl'>×</span>
                </button>
              </div>
              <div className='relative p-6 flex-auto'>
                <form onSubmit={e => { e.preventDefault(); selectedProduct.id ? handleEdit(selectedProduct) : handleAddNewSubmit(selectedProduct); }}>
                  <div className='mb-4'>
                    <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={selectedProduct.name || ''}
                      onChange={e => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
                      className='mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='price' className='block text-sm font-medium text-gray-700'>
                      Price
                    </label>
                    <input
                      type='number'
                      id='price'
                      name='price'
                      value={selectedProduct.price || ''}
                      onChange={e => setSelectedProduct({ ...selectedProduct, price: e.target.value })}
                      className='mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='image' className='block text-sm font-medium text-gray-700'>
                      Image URL
                    </label>
                    <input
                      type='url'
                      id='image'
                      name='image'
                      value={selectedProduct.Image || ''}
                      onChange={e => setSelectedProduct({ ...selectedProduct, Image: e.target.value })}
                      className='mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                    />
                  </div>
                  <div className='flex justify-end'>
                    <button
                      type='button'
                      className='mr-2 px-4 py-2 text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded-md'
                      onClick={() => setSelectedProduct(null)}
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md'
                    >
                      {selectedProduct.id ? 'Save Changes' : 'Add Item'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
