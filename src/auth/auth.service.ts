import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
    signup(){
        return {msg:  'here is signup'}
    }
    signin(){
        return {msg: 'here is signin'}
    }
}