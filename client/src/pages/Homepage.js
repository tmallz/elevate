​​import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import './home.css';
 
function Homepage() {
 
 function loadApp(e){
   document.location.replace('/elevate');
   //window.open('/html/map.html');
 }
 
 function loadLogin(e){
   document.location.replace('/login');
   //window.open('/html/login.html');
 }
 
   return (
     <Container fluid>
       <Row>
         <Col size="md-12">
           <Jumbotron>
             <h1>Welcome to ELEVATE</h1>
 
             <div className="col text-center">
             <button
               type="button"
               className="btn"
               onClick={()=> loadLogin()}>
                 Log in</button>
             <button
               type="button"
               className="btn"
               onClick={()=> loadApp()}>
                 Go to App</button>
           </div>
           </Jumbotron>
         
         </Col>
       </Row>
     </Container>
   );
 }
 
 
export default Homepage;