import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Library } from '../models/library';
@Injectable({
  providedIn: 'root'
})
export class LibraryLocatorDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public getLibraries(): Promise<Library[]> {
    const lng: number = 0;
    const lat: number = 0;
    const maxDistance: number = 20;
    const url: string = `${this.apiBaseUrl}/libraries?lng=${lng}&lat=${lat}&maxDistance=${maxDistance}`;
    return this.http.get(url).toPromise().then(response => response as Library[]).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
