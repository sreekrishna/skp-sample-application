import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption, Search } from 'app/shared/util/request-util';
import { IRegionMySuffix } from 'app/shared/model/region-my-suffix.model';

type EntityResponseType = HttpResponse<IRegionMySuffix>;
type EntityArrayResponseType = HttpResponse<IRegionMySuffix[]>;

@Injectable({ providedIn: 'root' })
export class RegionMySuffixService {
  public resourceUrl = SERVER_API_URL + 'api/regions';
  public resourceSearchUrl = SERVER_API_URL + 'api/_search/regions';

  constructor(protected http: HttpClient) {}

  create(region: IRegionMySuffix): Observable<EntityResponseType> {
    return this.http.post<IRegionMySuffix>(this.resourceUrl, region, { observe: 'response' });
  }

  update(region: IRegionMySuffix): Observable<EntityResponseType> {
    return this.http.put<IRegionMySuffix>(this.resourceUrl, region, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IRegionMySuffix>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IRegionMySuffix[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req: Search): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IRegionMySuffix[]>(this.resourceSearchUrl, { params: options, observe: 'response' });
  }
}
