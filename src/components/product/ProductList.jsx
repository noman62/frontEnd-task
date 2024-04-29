import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import ProductsData from '../ProductsData/ProductsData';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
        <Button
          onClick={() => setSelectedProduct({})}
          variant="contained"
          color="primary"
          className='mb-4'
        >
          <FontAwesomeIcon className='mr-2' icon={faPlus} />
          Add New Item
        </Button>
        <div className='grid gap-5 lg:grid-cols-5 sm:max-w-sm sm:mx-auto lg:max-w-full'>
          {products.map(medicine => (
            <Card key={medicine.id} className='overflow-hidden rounded bg-white'>
              <CardContent className='p-3 flex justify-between items-center'>
                <img
                  src={medicine.Image}
                  className='object-cover w-full h-64 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                  style={{ width: '100%', height: '150px' }} // Set a fixed size for the image
                  alt=''
                />
              </CardContent>
              <CardContent className='px-3'>
                <Typography variant="h5" component="h2" className='text-2xl font-bold leading-5'>{medicine.name}</Typography>
                <div className='flex justify-between items-center'>
                  <Typography variant="body1">${medicine.price}</Typography>
                  <div className='flex space-x-3'>
                    <Button
                      onClick={() => deleteProduct(medicine.id)}
                      variant="contained"
                      color="error"
                      size="small" // Set size to small
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                    <Button
                      onClick={() => editProduct(medicine)}
                      variant="contained"
                      color="warning"
                      size="small" // Set size to small
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
          <div className='relative w-auto max-w-3xl mx-auto my-6'>
            <div className='relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none'>
              <div className='flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200'>
                <h3 className='text-3xl font-semibold'>{selectedProduct.id ? 'Edit Item' : 'Add New Item'}</h3>
                <Button
                  onClick={() => setSelectedProduct(null)}
                  className='p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                >
                  <span className='text-xl'>×</span>
                </Button>
              </div>
              <div className='relative p-6 flex-auto'>
                <form onSubmit={e => { e.preventDefault(); selectedProduct.id ? handleEdit(selectedProduct) : handleAddNewSubmit(selectedProduct); }}>
                  <div className='mb-4'>
                    <TextField
                      label="Name"
                      variant="outlined"
                      value={selectedProduct.name || ''}
                      onChange={e => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
                      fullWidth
                    />
                  </div>
                  <div className='mb-4'>
                    <TextField
                      label="Price"
                      variant="outlined"
                      type="number"
                      value={selectedProduct.price || ''}
                      onChange={e => setSelectedProduct({ ...selectedProduct, price: e.target.value })}
                      fullWidth
                    />
                  </div>
                  <div className='mb-4'>
                    <TextField
                      label="Image URL"
                      variant="outlined"
                      type="url"
                      value={selectedProduct.Image || ''}
                      onChange={e => setSelectedProduct({ ...selectedProduct, Image: e.target.value })}
                      fullWidth
                    />
                  </div>
                  <div className='flex justify-end'>
                    <Button
                      onClick={() => setSelectedProduct(null)}
                      variant="contained"
                      color="error"
                      className='mr-2'
                    >
                      Cancel
                    </Button>
                    <Button
                      type='submit'
                      variant="contained"
                      color="primary"
                    >
                      {selectedProduct.id ? 'Save Changes' : 'Add Item'}
                    </Button>
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
