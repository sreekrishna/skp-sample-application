import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption, Search } from 'app/shared/util/request-util';
import { IDepartmentMySuffix } from 'app/shared/model/department-my-suffix.model';

type EntityResponseType = HttpResponse<IDepartmentMySuffix>;
type EntityArrayResponseType = HttpResponse<IDepartmentMySuffix[]>;

@Injectable({ providedIn: 'root' })
export class DepartmentMySuffixService {
  public resourceUrl = SERVER_API_URL + 'api/departments';
  public resourceSearchUrl = SERVER_API_URL + 'api/_search/departments';

  constructor(protected http: HttpClient) {}

  create(department: IDepartmentMySuffix): Observable<EntityResponseType> {
    return this.http.post<IDepartmentMySuffix>(this.resourceUrl, department, { observe: 'response' });
  }

  update(department: IDepartmentMySuffix): Observable<EntityResponseType> {
    return this.http.put<IDepartmentMySuffix>(this.resourceUrl, department, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IDepartmentMySuffix>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IDepartmentMySuffix[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req: Search): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IDepartmentMySuffix[]>(this.resourceSearchUrl, { params: options, observe: 'response' });
  }
}
