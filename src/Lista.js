import React, { Component } from 'react';
import api from './api';
import {Link} from 'react-router-dom';
import { Button, Table } from 'reactstrap';


  class Lista extends Component{

    state = {
      usuarios: [],
    }

  
    async componentDidMount(){
      const response = await api.get(' ');
      
      this.setState({usuarios: response.data});
    }
  
    render(){
      
     const {usuarios} =  this.state;
     
      return (
        <div>
        
          <h1> Lista de Usuários </h1>
            
          <Table responsive hover striped bordered size='sm'>
          <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Endereço</th>
              <th>ZIP</th>
              <th>Companhia</th>
        </tr>
      </thead>
            <tbody>
            
            {usuarios.map(usuario => (
             <tr key = {usuario.id}>
               <th scope="row"> {usuario.id}</th>
                <td>{usuario.name}</td>
                <td>{usuario.email}</td>
                <td>{usuario.phone}</td>
                <td>{usuario.address.city}, {usuario.address.street}</td>
                <td>{usuario.address.zipcode}</td>
                <td>{usuario.company.name}</td>
                
             </tr>
             ))}

            </tbody>
          </Table>
          
          <Link to="/Formulario ">
               <Button color="danger">Novo Usuário</Button>
          </Link>
        </div>
        
  
      );
    }
  }
  
  export default Lista;