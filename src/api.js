import axios from 'axios'

// Single place to call the public JSON.
// Keeps room for interceptors/logging later if needed.
export const fetchProducts = () => axios.get('/products.json')
