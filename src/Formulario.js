import React, { Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Area} from './styled'

function ClickMe(){
    alert('Salvo com sucesso!')
}

class Formulario extends Component{

    render(){
       
        return(

            <Area className='container-fluid' > 
            <h2>Cadastro</h2>
                
                <Form > 
                <FormGroup >
                    <Label for="name" sm={2}>Nome </Label>  
                    <Input sm={2} type="text" name="name" id="name" placeholder="Nome Completo" bsSize="sm" style={{borderColor: 'black' }}  />
                </FormGroup>

                <Row form>
                    <Col sm={3}>
                        <FormGroup>
                            <Label for="cpf" sm={2}>CPF</Label>
                            <Input sm={2} type="text" name="cpf" id="cpf" placeholder="xxx.xxx.xxx-xx" bsSize="sm" style={{borderColor: 'black' }}/>
                        </FormGroup>
                     </Col>

                    <Col sm={3}>
                        <FormGroup>
                            <Label for="idade" sm={2}>Idade</Label>
                            <Input  type="text" name="idade" id="idade" placeholder="xx" bsSize="sm" style={{borderColor: 'black' }} />
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup >
                    <Label for="endereco" sm={2}>Endereço</Label> 
                    <Input type="text"  name="endereco" id="endereco" placeholder="Endereço"  bsSize="sm" style={{borderColor: 'black' }}/>
                </FormGroup>

                <Button onClick={ClickMe} color="secondary">Salvar</Button>

                <Link to="/ ">
                     <Button color="danger" >Cancelar</Button>
                </Link>

                </Form>
                
            </Area>

            
        )
    }

}

export default Formulario;