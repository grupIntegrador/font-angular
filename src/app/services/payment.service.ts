import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const cabecera = {headers: new HttpHeaders({'Content-Type':'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  stripeUrl = 'https://plastic-antonys.herokuapp.com/stripe/'

  constructor(private httpClient:HttpClient) { }

  public confirmar(id:string):Observable<string>{
    return this.httpClient.post<string>(this.stripeUrl+`confirm/${id}`,{},cabecera)
  }

  public cancelar(id:string):Observable<string>{
    return this.httpClient.post<string>(this.stripeUrl+`cancel/${id}`,{},cabecera)
  }

}
