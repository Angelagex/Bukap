import React from 'react'
import { 
    HashRouter as Router,
    Routes,
    Route 
} from 'react-router-dom'
import { AddBook } from '../components/AddBook'
import { Books } from '../components/Books'

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Routes>
                    <Route
                        path="/"
                        index element={<Books />}
                    />
                    <Route
                        path="/AddBook"
                        element={<AddBook />}
                    />
                </Routes>
            </div>
        </Router>
    )   
}
