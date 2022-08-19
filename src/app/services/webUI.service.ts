import { EntidadStatusResponse } from './../models/responses/entidadStatusResponse.model';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCooperativaRequest } from '../models/request/addCooperativasRequest.model';
import { AddPartnersRequest } from '../models/request/addPartnersRequest.model';
import { AddUserRequest } from '../models/request/addUserRequest.model';
import { AuthenticateRequest } from '../models/request/authenticateRequest.model';
import { ConsultarTransaccionRequest } from '../models/request/consultarTransaccionRequest.model';
import { GetPartnersRequest } from '../models/request/getPartnersRequest.model';
import { AddPartnersResponse } from '../models/responses/addPartnersResponse.model';
import { AuthenticateResponse } from '../models/responses/authenticateResponse.model';
import { ConsultarTransaccionResponse } from '../models/responses/consultarTransaccionResponse.model';
import { CooperativaResponse } from '../models/responses/cooperativaResponse.model';
import { GetPartnersResponse } from '../models/responses/getPartnersResponse.model';
import { MaeCooperativaResponse } from '../models/responses/maeCooperativaResponse.model';
import { UserResponse } from '../models/responses/userResponse.model';
import { BaseService } from './base.service';
import { UpdatePartnersRequest } from '../models/request/updatePartnersRequest.model';
import { UpdateCooperativaRequest } from '../models/request/updateCooperativasRequest.model';
import { UpdateUserRequest } from '../models/request/updateUserRequest.model';
import { ConsultarUsuariosRequest } from '../models/request/consultarUsuariosRequest.model';
import { UpdateCooperativasResponse } from '../models/responses/updateCooperativasResponse.model';

@Injectable({
  providedIn: 'root'
})
export class WebUIService extends BaseService {

  constructor(http: HttpClient) {
    super(http)
  }

  updatePartners(req: UpdatePartnersRequest) {
    let url = this.baseUrl + "updateacsocio";
    const _headers = new HttpHeaders();
    const headers = _headers.append('Content-Type', 'application/json')
    return super._post(url, req, { headers: headers }, AddPartnersResponse, false);
  }

  addPartners(req: AddPartnersRequest) {
    let url = this.baseUrl + "registrarsocio";
    const _headers = new HttpHeaders();
    const headers = _headers.append('Content-Type', 'application/json')
    return super._post(url, req, { headers: headers }, AddPartnersResponse, false);
  }

  importPartners(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}importarSocios`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  getPartners(req: GetPartnersRequest) {
    let url = this.baseUrl + "consultarsocios";
    const _headers = new HttpHeaders();
    const headers = _headers.append('Content-Type', 'application/json')
    return super._post(url, req, { headers: headers }, GetPartnersResponse, false);
  }

  addCooperativa(coop: AddCooperativaRequest) {
    let url = this.baseUrl + "addCooperativa";
    const _headers = new HttpHeaders();
    const headers = _headers.append('Content-Type', 'application/json')
    return super._post(url, coop, { headers: headers }, CooperativaResponse, false);
  }

  updateCooperativa(coop: UpdateCooperativaRequest) {
    let url = this.baseUrl + "updateCooperativa";
    const _headers = new HttpHeaders();
    const headers = _headers.append('Content-Type', 'application/json')
    return super._post(url, coop, { headers: headers }, UpdateCooperativasResponse, false);
  }

  addUser(user: AddUserRequest) {
    let url = this.baseUrl + "addUser";
    const _headers = new HttpHeaders();
    const headers = _headers.append('Content-Type', 'application/json')
    return super._post(url, user, { headers: headers }, UserResponse, false);
  }

  updateUser(user: UpdateUserRequest) {
    let url = this.baseUrl + "updateUser";
    const _headers = new HttpHeaders();
    const headers = _headers.append('Content-Type', 'application/json')
    return super._post(url, user, { headers: headers }, UserResponse, false);
  }

  getUsers(req: ConsultarUsuariosRequest = new ConsultarUsuariosRequest()) {
    let url = this.baseUrl + "getUsers";
    const _headers = new HttpHeaders();
    const headers = _headers.append('Content-Type', 'application/json')
    return super._post(url, req, { headers: headers }, UserResponse, false);
  }

  getEntidadStatus() {
    let url = this.baseUrl + "getEntidadStatus";
    return super._get(url, EntidadStatusResponse, true);
  }

  getCooperativas() {
    let url = this.baseUrl + "cooperativas";
    return super._get(url, CooperativaResponse, true);
  }

  getMaeCooperativas() {
    let url = this.baseUrl + "getMaeCooperativas";
    return super._get(url, MaeCooperativaResponse, true);
  }

  getTransactions(req: ConsultarTransaccionRequest) {
    let url = this.baseUrl + "consultartransacciones";
    const _headers = new HttpHeaders();
    const headers = _headers.append('Content-Type', 'application/json')
    return super._post(url, req, { headers: headers }, ConsultarTransaccionResponse, false);
  }
}
