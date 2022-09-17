import routes from './apiRoutes'

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
    return post(routes.adminRegister, admin)
}
const logInAdmin = (admin) => {
    return post(routes.adminLogIn, admin)
}
const logOutAdmin = () => {
    return post(routes.adminLogOut)
}
const getCurrentAdmin = (id) => {
    return get(routes.admins + `/${id}`)
}

// User
const registerUser = (user) => {
    return post(routes.userRegister, user)
}
const logInUser = (user) => {
    return post(routes.userLogIn, user)
}
const logOutUser = () => {
    return post(routes.userLogOut)
}
const getCurrentUser = (id) => {
    return get(routes.user + `/${id}`)
}

// Menu
const createMenu = (menu) => {
    return post(routes.creteMenu, menu)
}
const editMenu = (id, data) => {
    return put(routes.editMenu + `/${id}`, data)
}
const deleteMenu = (data) => {
    return _delete(routes.deleteMenu, data)
}
const getAllMenus = () => {
    return get(routes.allMenus)
}



// Product
const createProduct = (product) => {
    return post(routes.productCreate, product)
}
const editProduct = (product) => {
    return put(routes.productEditOne, product)
}
const deleteProduct = (product) => {
    return _delete(routes.productDeleteOne, product)
}
const getAllProducts = () => {
    return get(routes.productGetAll).then(res => res.json())
}
const getOneProduct = (product) => {
    return post(routes.productGetOne, product).then(res => res.json())
}

// Category
const createCategory = (category) => {
    return post(routes.categoryCreate, category)
}
const editCategory = (category) => {
    return put(routes.categoryEditOne, category)
}
const deleteCategory = (category) => {
    return _delete(routes.categoryDeleteOne, category)
}
const getAllCategories = () => {
    return get(routes.categoryGetAll).then(res => res.json())
}
const getOneCategory = (category) => {
    return post(routes.categoryGetOne, category).then(res => res.json())
}

// Brand
const createBrand = (brand) => {
    return post(routes.brandCreate, brand)
}
const editBrand = (brand) => {
    return put(routes.brandEditOne, brand)
}
const deleteBrand = (brand) => {
    return _delete(routes.brandDeleteOne, brand)
}
const getAllBrands = () => {
    return get(routes.brandGetAll).then(res => res.json())
}
const getOneBrand = (brand) => {
    return post(routes.brandGetOne, brand).then(res => res.json())
}

const api = {
    // Admin
    registerAdmin,
    logInAdmin,
    logOutAdmin,
    getCurrentAdmin,
    //User
    registerUser,
    logInUser,
    logOutUser,
    getCurrentUser,
    //Menu
    createMenu,
    editMenu,
    deleteMenu,
    getAllMenus,
    //Product
    createProduct,
    getAllProducts,
    getOneProduct,
    editProduct,
    deleteProduct,
    //Category
    createCategory,
    getAllCategories,
    getOneCategory,
    editCategory,
    deleteCategory,
    //Brand
    createBrand,
    getAllBrands,
    getOneBrand,
    editBrand,
    deleteBrand,
}

export default api;