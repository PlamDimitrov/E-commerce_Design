import route from './apiRoutes'

const call = (route, method, data) => {
    const headers = {
        method: method, // *GET, POST, PUT, DELETE, etc.
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    }
    if (data) {
        headers.body = data ? JSON.stringify(data) : '' // body data type must match "Content-Type" header
    }
    return fetch(route, headers)
}

const post = (route, data) => {
    return call(route, 'POST', data)
}
const get = (route) => {
    return call(route, 'GET')
}
const put = (route, data) => {
    return call(route, 'PUT', data)
}
const _delete = (route, data) => {
    return call(route, 'DELETE', data)
}
// Services

// Admin
const registerAdmin = (admin) => {
    return post(route.adminRegister, admin)
}
const logInAdmin = (admin) => {
    return post(route.adminLogIn, admin)
}
const logOutAdmin = () => {
    return get(route.adminLogOut)
}

// User
const registerUser = (user) => {
    return post(route.userRegister, user)
}
const logInUser = (user) => {
    return post(route.userLogIn, user)
}
const logOutUser = () => {
    return get(route.userLogOut)
}

// Product
const createProduct = (product) => {
    return post(route.productCreate, product)
}
const editProduct = (product) => {
    return put(route.productEditOne, product)
}
const deleteProduct = (product) => {
    return _delete(route.productDeleteOne, product)
}
const getAllProducts = () => {
    return get(route.productGetAll).then(res => res.json())
}
const getOneProduct = (product) => {
    return post(route.productGetOne, product).then(res => res.json())
}

// Category
const createCategory = (category) => {
    return post(route.categoryCreate, category)
}
const editCategory = (category) => {
    return put(route.categoryEditOne, category)
}
const deleteCategory = (category) => {
    return _delete(route.categoryDeleteOne, category)
}
const getAllCategories = () => {
    return get(route.categoryGetAll).then(res => res.json())
}
const getOneCategory = (category) => {
    return post(route.categoryGetOne, category).then(res => res.json())
}

// Brand
const createBrand = (brand) => {
    return post(route.brandCreate, brand)
}
const editBrand = (brand) => {
    return put(route.brandEditOne, brand)
}
const deleteBrand = (brand) => {
    return _delete(route.brandDeleteOne, brand)
}
const getAllBrands = () => {
    return get(route.brandGetAll).then(res => res.json())
}
const getOneBrand = (brand) => {
    return post(route.brandGetOne, brand).then(res => res.json())
}

const api = {
    registerAdmin,
    logInAdmin,
    logOutAdmin,
    registerUser,
    logInUser,
    createProduct,
    getAllProducts,
    getOneProduct,
    createCategory,
    getAllCategories,
    getOneCategory,
    createBrand,
    getAllBrands,
    getOneBrand,
    editProduct,
    deleteProduct,
    editCategory,
    deleteCategory,
    editBrand,
    deleteBrand,
    logOutUser,
}

export default api;