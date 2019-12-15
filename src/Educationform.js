import React, { Component } from 'react'
import './Educationform.css'
import { Col, Row, Button, Form, FormGroup, Label, Input ,Card, CardImg, CardText, CardBody,Collapse,
    CardTitle, CardSubtitle, CardFooter} from 'reactstrap'

 class Educationform extends Component {
     constructor(props) {
         super(props)

         this.state = {

           row :[
                   {degree:'',university:'',state1:'',year:'',subjects:'',marks:'',division:''}

             ]

         }
     }
     myfunction(){

     }

    render() {

        return (
            <div className="Main">
                <Card className="card1"body inverse style={{ backgroundColor: 'greenyellow', borderColor: '#333' }}>
                    <CardBody>
                        <label>NAME OF THE USER</label><br></br>
                        <label>EMAIL ID</label><br></br>
                </CardBody>
                </Card>
                <CardTitle  className="heading">EDUCATIONAL QUALIFICATION</CardTitle>

                <Card className="card2">
                    <CardBody>
                        <tr id="table">
                   <td><input type="text" placeholder="Degree/couse"  id="deg"></input></td>
                   <td><input type="text" placeholder="university board"id ="uni"></input></td>
                   <td>  <input type="text" placeholder="state" id="state1"></input> </td>
                   <td><input type="text" placeholder="year" id="year"></input></td>
                     <td>  <input type="text" placeholder="Main subjects" id="sub"></input></td>
                     <td>  <input type="text" placeholder="% of marks" id="marks"></input></td>
                     <td> <input type="text" placeholder="division" id="division"></input></td> </tr>
                       <br></br><br></br>

                       <button className="button1" onClick={()=>this.myfunction()}>+</button>


                  </CardBody>
                </Card>
                <button>CANCEL</button>
              
            </div>
        )
    }
}

export default Educationform
