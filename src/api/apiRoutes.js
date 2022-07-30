const main = `https://localhost:7044/api/`;

const routes = {

    // Admin
    admin: `${main}Admins`,
    adminRegister: `${main}Admins/register`,
    adminLogIn: `${main}Admins/login`,
    adminLogOut: `${main}Admins/logout`,

    // User
    user: `${main}Users`,
    userRegister: `${main}Users/register`,
    userLogIn: `${main}Users/login`,
    userLogOut: `${main}Users/logout`,

    //Product
    productCreate: `${main}Products/create`,
    productGetAll: `${main}Products/getAll`,
    productGetOne: `${main}Products/getOne`,
    productEditOne: `${main}Products/edit`,
    productDeleteOne: `${main}Products/delete`,

    //Category
    categoryCreate: `${main}Categories/create`,
    categoryGetAll: `${main}Categories/getAll`,
    categoryGetOne: `${main}Categories/getOne`,
    categoryEditOne: `${main}Categories/edit`,
    categoryDeleteOne: `${main}Categories/delete`,

    //Brand
    brandCreate: `${main}Brands/create`,
    brandGetAll: `${main}Brands/getAll`,
    brandGetOne: `${main}Brands/getOne`,
    brandEditOne: `${main}Brands/edit`,
    brandDeleteOne: `${main}Brands/delete`,
}


export default routes;
