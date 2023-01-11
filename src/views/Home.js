import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import ToDoList from '../component/toDoList'

function Home() {
  return (
    <div>
        <Navbar/>
        <ToDoList/>
        <Footer />
        </div>
  );
}

export default Home