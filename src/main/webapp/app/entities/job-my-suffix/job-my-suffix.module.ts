import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SkpDynamicApplicationSharedModule } from 'app/shared/shared.module';
import { JobMySuffixComponent } from './job-my-suffix.component';
import { JobMySuffixDetailComponent } from './job-my-suffix-detail.component';
import { JobMySuffixUpdateComponent } from './job-my-suffix-update.component';
import { JobMySuffixDeleteDialogComponent } from './job-my-suffix-delete-dialog.component';
import { jobRoute } from './job-my-suffix.route';

@NgModule({
  imports: [SkpDynamicApplicationSharedModule, RouterModule.forChild(jobRoute)],
  declarations: [JobMySuffixComponent, JobMySuffixDetailComponent, JobMySuffixUpdateComponent, JobMySuffixDeleteDialogComponent],
  entryComponents: [JobMySuffixDeleteDialogComponent]
})
export class SkpDynamicApplicationJobMySuffixModule {}
