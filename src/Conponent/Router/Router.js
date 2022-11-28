
import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import Deshboard from "../Pages/Deshboard/Deshboard";
import DeshboardLayout from "../Pages/Deshboard/DeshboardLayout/DeshboardLayout";
import Add_product from "../Pages/Deshboard/DeshboardLayout/Deshboard_pages/Add_product/Add_product";
import Buyer_seller from "../Pages/Deshboard/DeshboardLayout/Deshboard_pages/Admin/Buyer_seller";
import DefaultDeshboard from "../Pages/Deshboard/DeshboardLayout/Deshboard_pages/DefaultDeshboard/DefaultDeshboard";
import MyOrder from "../Pages/Deshboard/DeshboardLayout/Deshboard_pages/My_order/MyOrder";
import SellerAddProduct from "../Pages/Deshboard/DeshboardLayout/Seller/SellerAddProduct";

import Error_page from "../Pages/Error_page/Error_page";
import Faq_question from "../Pages/Faq_question/Faq_question";
import Home from "../Pages/Home/Home";
import Layout from "../Pages/Layout/Layout";
import Login from "../Pages/Login/Login";
import Product_details from "../Pages/Show_category/Product_details";
import Show_category from "../Pages/Show_category/Show_category";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error_page />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/home/:category",
                element: <PrivateRoute><Show_category /></PrivateRoute>
            },
            {
                path: "/question",
                element: <Faq_question />
            },
            {
                path: "/single_product/:id",
                element: <PrivateRoute><Product_details /></PrivateRoute>

            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: '/deshboard',
                element: <DeshboardLayout />,
                children: [
                    {
                        path: '/deshboard',
                        element: <PrivateRoute><DefaultDeshboard /></PrivateRoute>
                    },
                    {
                        path: '/deshboard',
                        element: <PrivateRoute><MyOrder /></PrivateRoute>
                    },
                    {
                        path: '/deshboard/myorder',
                        element: <PrivateRoute><MyOrder /></PrivateRoute>
                    },
                    {
                        path: '/deshboard/add_product',
                        element: <Add_product />
                    },
                    {
                        path: '/deshboard/sellerProduct',
                        element: <SellerAddProduct />
                    },

                    {
                        path: `/deshboard/admin_user/:role`,
                        element: <Buyer_seller />
                    },
                ]
            }
        ]
    }

])

export default router