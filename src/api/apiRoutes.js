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
    editMenu: `${main}Menus/edit`,
    deleteMenu: `${main}Menus/delete`,
    allMenus: `${main}Menus/getAll`,

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
    categoryPicture: `${main}Categories/uploadProfilePicture`,

    //Brand
    brandCreate: `${main}Brands/create`,
    brandGetAll: `${main}Brands/getAll`,
    brandGetOne: `${main}Brands/getOne`,
    brandEditOne: `${main}Brands/edit`,
    brandDeleteOne: `${main}Brands/delete`,
}


export default routes;
