import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region-my-suffix',
        loadChildren: () => import('./region-my-suffix/region-my-suffix.module').then(m => m.SkpDynamicApplicationRegionMySuffixModule)
      },
      {
        path: 'country-my-suffix',
        loadChildren: () => import('./country-my-suffix/country-my-suffix.module').then(m => m.SkpDynamicApplicationCountryMySuffixModule)
      },
      {
        path: 'location-my-suffix',
        loadChildren: () =>
          import('./location-my-suffix/location-my-suffix.module').then(m => m.SkpDynamicApplicationLocationMySuffixModule)
      },
      {
        path: 'department-my-suffix',
        loadChildren: () =>
          import('./department-my-suffix/department-my-suffix.module').then(m => m.SkpDynamicApplicationDepartmentMySuffixModule)
      },
      {
        path: 'task-my-suffix',
        loadChildren: () => import('./task-my-suffix/task-my-suffix.module').then(m => m.SkpDynamicApplicationTaskMySuffixModule)
      },
      {
        path: 'employee-my-suffix',
        loadChildren: () =>
          import('./employee-my-suffix/employee-my-suffix.module').then(m => m.SkpDynamicApplicationEmployeeMySuffixModule)
      },
      {
        path: 'job-my-suffix',
        loadChildren: () => import('./job-my-suffix/job-my-suffix.module').then(m => m.SkpDynamicApplicationJobMySuffixModule)
      },
      {
        path: 'job-history-my-suffix',
        loadChildren: () =>
          import('./job-history-my-suffix/job-history-my-suffix.module').then(m => m.SkpDynamicApplicationJobHistoryMySuffixModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class SkpDynamicApplicationEntityModule {}
