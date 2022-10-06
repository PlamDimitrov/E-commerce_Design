const main = `https://localhost:7044/api/`;

const routes = {

    // Admin
    admins: `${main}Admins`,
    adminRegister: `${main}Admins/register`,
    adminLogIn: `${main}Admins/login`,
    adminLogOut: `${main}Admins/logout`,
    adminProfilePicture: `${main}Admins/uploadProfilePicture`,
    adminAuthenticate: `${main}Admins/auth`,

    // User
    users: `${main}Users`,
    userRegister: `${main}Users/register`,
    userLogIn: `${main}Users/login`,
    userLogOut: `${main}Users/logout`,
    userProfilePicture: `${main}Users/uploadProfilePicture`,
    userAuthenticate: `${main}Users/auth`,

    // Menu
    menu: `${main}Menus`,
    creteMenu: `${main}Menus/create`,
    deleteMenu: `${main}Menus/delete`,
    allMenus: `${main}Menus/getAll`,

    //Product
    productCreate: `${main}Products/create`,
    productGetAll: `${main}Products/getAll`,
    productGetOne: `${main}Products/getOne`,
    productEditOne: `${main}Products/edit`,
    productDeleteOne: `${main}Products/delete`,
    productPicture: `${main}Categories/uploadProfilePicture`,

    //Category
    category: `${main}Categories`,
    categoryCreate: `${main}Categories/create`,
    categoryGetAll: `${main}Categories/getAll`,
    categoryGetOne: `${main}Categories/getOne`,
    categoryDeleteOne: `${main}Categories/delete`,
    categoryPicture: `${main}Categories/uploadProfilePicture`,

    //Brand
    brand: `${main}Brands`,
    brandCreate: `${main}Brands/create`,
    brandGetAll: `${main}Brands/getAll`,
    brandGetOne: `${main}Brands/getOne`,
    brandDeleteOne: `${main}Brands/delete`,
    brandPicture: `${main}Brands/uploadProfilePicture`,
}


export default routes;
