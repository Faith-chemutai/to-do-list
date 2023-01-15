import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import ToDoList from '../component/toDoList'
import User from '../component/User'
import Hobbies from '../component/Hobbies'
import Stylesheet from '../component/stylesheet'
import toDoAnalytics from './toDoAnalytics'
function Home() {
  return (
    <div>
        <Navbar/>
        <ToDoList/>
        <Footer />
        <User/>
        <Hobbies/>
    <Stylesheet/>
    <toDoAnalytics/>
        </div>
  );
}

export default Home