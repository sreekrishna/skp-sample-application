import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { JhiResolvePagingParams } from 'ng-jhipster';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IJobMySuffix, JobMySuffix } from 'app/shared/model/job-my-suffix.model';
import { JobMySuffixService } from './job-my-suffix.service';
import { JobMySuffixComponent } from './job-my-suffix.component';
import { JobMySuffixDetailComponent } from './job-my-suffix-detail.component';
import { JobMySuffixUpdateComponent } from './job-my-suffix-update.component';

@Injectable({ providedIn: 'root' })
export class JobMySuffixResolve implements Resolve<IJobMySuffix> {
  constructor(private service: JobMySuffixService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IJobMySuffix> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((job: HttpResponse<JobMySuffix>) => {
          if (job.body) {
            return of(job.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new JobMySuffix());
  }
}

export const jobRoute: Routes = [
  {
    path: '',
    component: JobMySuffixComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'Jobs'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: JobMySuffixDetailComponent,
    resolve: {
      job: JobMySuffixResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Jobs'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: JobMySuffixUpdateComponent,
    resolve: {
      job: JobMySuffixResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Jobs'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: JobMySuffixUpdateComponent,
    resolve: {
      job: JobMySuffixResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Jobs'
    },
    canActivate: [UserRouteAccessService]
  }
];
