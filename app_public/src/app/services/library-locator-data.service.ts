import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Library } from '../models/library';
@Injectable({
  providedIn: 'root'
})
export class LibraryLocatorDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public getLibraries(lng: number, lat: number, maxDistance: number): Promise<Library[]> {
    const url = `${this.apiBaseUrl}/libraries?lng=${lng}&lat=${lat}&maxDistance=${maxDistance}`;
    return this.http.get(url).toPromise().then(response => response as Library[]).catch(this.handleError);
  }

  public getLibraryById(libraryId: string): Promise<Library> {
    const url = `${this.apiBaseUrl}/library/${libraryId}`;
    return this.http.get(url).toPromise().then(response => response as Library).catch(this.handleError);
  }
  public getCoordsById(libraryId: string): Promise<number[]> {
    const url = `${this.apiBaseUrl}/coords/${libraryId}`;
    return this.http.get(url).toPromise().then(response => response as number[]).catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
