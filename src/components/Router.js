import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import Books from "./Books";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Root from "./Root";
import BookDetails from './BookDetails';
import Book from "./Book";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/books',
                loader: async () => {
                    return fetch('https://api.itbook.store/1.0/new')
                },
                element: <Books></Books>
            }
            ,
            {
                path: '/about',
                element: <About></About>
            },
            {
                path:'/book/:id',
                loader:async({params})=>{
                    return fetch(`https://api.itbook.store/1.0/books/${params.id}`)
                },
                element: <BookDetails></BookDetails>
            }
        ]
    }

])

export default router
