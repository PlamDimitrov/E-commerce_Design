const main = `http://localhost:8080/api/`;

const routes = {

    // User
    user: `${main}user`,
    userRegister: `${main}user/register`,
    userLogIn: `${main}user/login`,
    userLogOut: `${main}user/logout`,

    //Product
    productCreate: `${main}products/create`,
    productGetAll: `${main}products/getAll`,
    productGetOne: `${main}products/getOne`,
    productEditOne: `${main}products/edit`,
    productDeleteOne: `${main}products/delete`,

    //Category
    categoryCreate: `${main}categories/create`,
    categoryGetAll: `${main}categories/getAll`,
    categoryGetOne: `${main}categories/getOne`,
    categoryEditOne: `${main}categories/edit`,
    categoryDeleteOne: `${main}categories/delete`,

    //Brand
    brandCreate: `${main}brands/create`,
    brandGetAll: `${main}brands/getAll`,
    brandGetOne: `${main}brands/getOne`,
    brandEditOne: `${main}brands/edit`,
    brandDeleteOne: `${main}brands/delete`,
}


export default routes;
