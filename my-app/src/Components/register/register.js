import React, { Component } from 'react';
import './register.css'
import Logo from '../../img/padlock.svg'
import Checkbox from '@material-ui/core/Checkbox';
import Input from '../styled/input'
import Title from '../styled/title'
import Detail from '../styled/detail'
import Button from '../styled/button'
import {Link} from 'react-router-dom'

const VALID_NAME = /^[a-zA-Z-]{3,}$/;
const VALID_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z_-].{8,}$/;
const VALID_EMAIL =/^...+@..+\...+$/;

class Register extends Component{
    state={
            name:{
                value:'',
                border:'solid grey'
            },
            lastName:{
                value:'',
                border:'solid grey'
            },
            email:{
                value:'',
                border:'solid grey'
            },
            password:{
                value:'',
                border:'solid grey'
            },
            checked:false
        }

    changeName=async(e)=>{
        await this.setState({
            name:{
                value:e.target.value
            }
        })
        if(VALID_NAME.test(this.state.name.value)){
            this.setState({
                name: { 
                    value:this.state.name.value,
                    border: 'solid green' 
                }
            })
        }else if(this.state.name.value.length===0){
            this.setState({
                name: { 
                    value:this.state.name.value,
                    border: 'solid grey' 
                }
            })
        }else{
            this.setState({
                name: { 
                    value:this.state.name.value,
                    border: 'solid red' 
                }
            })
        }
    }
   
   
    changeLastName=async(e)=>{
        await this.setState({
            lastName:{
                value:e.target.value,
            }
        })
        if(VALID_NAME.test(this.state.lastName.value)){
            this.setState({
                lastName: { 
                    value:this.state.lastName.value,
                    border: 'solid green' 
                }            
            })
        }else if(this.state.lastName.value.length===0){
            this.setState({
                lastName: { 
                    value:this.state.lastName.value,
                    border: 'solid grey' 
                }   
            })
        }else{
            this.setState({
                lastName: { 
                    value:this.state.lastName.value,
                    border: 'solid red' 
                }              
            })
        }
    }
    changeEmail=async(e)=>{
        await this.setState({
            email:{
                value:e.target.value,
            }
        })
        if(VALID_EMAIL.test(this.state.email.value)){
            this.setState({
                email: { 
                    value:this.state.email.value,
                    border: 'solid green' 
                }               
            })
        }else if(this.state.email.value.length===0){
            this.setState({
                email: { 
                    value:this.state.email.value,
                    border: 'solid grey' 
                }  
            })
        }else{
            this.setState({
                email: { 
                    value:this.state.email.value,
                    border: 'solid red' 
                }  
            })
        }
    }
    changePassword=async(e)=>{
        await this.setState({
            password:{
                value:e.target.value,
            }
        })
        if(VALID_PASSWORD.test(this.state.password.value)){
            this.setState({
                password: { 
                    value:this.state.password.value,
                    border: 'solid green' 
                }  
            })
        }else if(this.state.password.value.length===0){
            this.setState({
                password: { 
                    value:this.state.password.value,
                    border: 'solid grey' 
                } 
            })
        }else{
            this.setState({
                password: { 
                    value:this.state.password.value,
                    border: 'solid red' 
                } 
            })
        }

    }
    chooseEvent=async()=>{
        await this.setState({
            checked:!this.state.checked
        })
    }
    pushData=()=>{
        let newArr=[];
        let result = {};
        let info =[];
        newArr.push(
            this.state.password.border,
            this.state.email.border,
            this.state.name.border,
            this.state.lastName.border,
        )
        const isGreen=(element)=> element === 'solid green'; 

        if(newArr.every(isGreen)){
            localStorage.clear();
            result.name=this.state.name.value;
            result.lastName=this.state.lastName.value;
            result.email=this.state.email.value;
            result.password=this.state.password.value;
            console.log('Your data: ',result);
            info.push(result)
            localStorage.setItem(result.email+result.password,JSON.stringify(info));
            console.log(localStorage)
             this.setState({
                name:{
                    value:'',
                    border:'solid grey'
                },
                lastName:{
                    value:'',
                    border:'solid grey'
                },
                email:{
                    value:'',
                    border:'solid grey'
                },
                password:{
                    value:'',
                    border:'solid grey'
                }
            })
        }else{
            console.log('Incorrect data!')
        }
       
    }
    render(){

        return(
            <>
                <div className='logoHelp'>
                    <img id='padlock' src={Logo}/> 
                </div>

                <Title> Sign up </Title>

                <Detail>
                    <Input 
                        value={this.state.name.value} 
                        style={{border:this.state.name.border}}
                        onChange={ this.changeName} 
                        placeholder='First Name *'
                    />
                    <Input 
                        value={this.state.lastName.value} 
                        onChange={ this.changeLastName} 
                        style={{'margin-left':'30px', border:this.state.lastName.border}}
                        placeholder='Last Name *'
                    />
                </Detail>

                <Detail>
                    <Input 
                        value={this.state.email.value} 
                        onChange={ this.changeEmail}  
                        style={{ 'width':'470px', border:this.state.email.border}} 
                        placeholder='Email Address *'
                    />
                </Detail> 

                <Detail>
                    <Input 
                        value={this.state.password.value} 
                        onChange={ this.changePassword} 
                        style={{ 'width':'470px', border:this.state.password.border}} 
                        placeholder='Password *' 
                        type='password'
                    />
                </Detail>

                <Detail style={{textAlign:'left'}}>
                    <div className='checkbox'>
                        <label>
                            <Checkbox checked={this.state.checked} style = {{ color:'grey'  }} onChange={this.chooseEvent} />
                            I want to recieve inspiration, marketing promotions and updates via email
                        </label>
                    </div>
                </Detail>

                <Button onClick={this.pushData} > Sign up </Button>

                <Detail style={{textAlign:'right'}} >
                    <span className='sign_in'>
                        <Link className='link' to="/sign-in">Already have an account? Sign in!</Link>     
                    </span>
                </Detail>

                <Detail style={{ paddingTop:'30px'}}>
                    <span style={{ color:'grey'}}>
                        Copyright @ Your Website 2020
                    </span>
                </Detail>

            </>
        )
    }
}
export default Register;