import React, { Component } from 'react';
import './signIn.css'
import Logo from '../../img/padlock.svg'
import Checkbox from '@material-ui/core/Checkbox';
import Input from '../styled/input'
import Title from '../styled/title'
import Detail from '../styled/detail'
import Button from '../styled/button'
import { Link } from 'react-router-dom'

const VALID_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])[0-9a-z_-].{8,}$/;
const VALID_EMAIL =/^...+@..+\...+$/;

class SignIn extends Component{
    state={
        email:{
            value:'',
            border:'solid grey'
        },
        password:{
            value:'',
            border:'solid grey'
        },
        autocomplete:'off',
        checked:false
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
        if(this.state.checked){
            this.setState({
                autocomplete:'on'
            })
        }
    }
    pushData=()=>{
        let newArr=[];
        let result = {};
        let info=[];
        newArr.push(
            this.state.password.border,
            this.state.email.border
        )
        const isGreen=(element)=> element === 'solid green'; 

        if(newArr.every(isGreen)){
            result.email=this.state.email.value;
            result.password=this.state.password.value;
            console.log('Your data: ',result);
            info.push(result);
            this.setState({
                email:{
                    value:'',
                    border:'solid grey'
                },
                password:{
                    value:'',
                    border:'solid grey'
                },
                checked:false
            })
            if(localStorage.getItem(result.email+result.password)){
                console.log('Welcome :)')
            }else{
                console.log('No such a user in local storage!')
            }
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

                <Title> Sign in </Title>

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

                <Detail>
                    <div className='remember_me'>
                        <label>
                            <Checkbox checked={this.state.checked} style = {{ color:'grey'  }} onChange={this.chooseEvent}/>
                            Remember me
                        </label>
                    </div>
                </Detail>

                <Button onClick={this.pushData}> Sign in </Button>

                <Detail style={{textAlign:'right'}} >
                    <span className='password_forgot'> Forgot password? </span>
                    <span className='sign_in'>
                        <Link className='link' to="/">Already have an account? Sign in!</Link>
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
export default SignIn;