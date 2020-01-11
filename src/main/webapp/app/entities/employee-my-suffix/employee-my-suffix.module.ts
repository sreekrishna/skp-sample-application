import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SkpDynamicApplicationSharedModule } from 'app/shared/shared.module';
import { EmployeeMySuffixComponent } from './employee-my-suffix.component';
import { EmployeeMySuffixDetailComponent } from './employee-my-suffix-detail.component';
import { EmployeeMySuffixUpdateComponent } from './employee-my-suffix-update.component';
import { EmployeeMySuffixDeleteDialogComponent } from './employee-my-suffix-delete-dialog.component';
import { employeeRoute } from './employee-my-suffix.route';

@NgModule({
  imports: [SkpDynamicApplicationSharedModule, RouterModule.forChild(employeeRoute)],
  declarations: [
    EmployeeMySuffixComponent,
    EmployeeMySuffixDetailComponent,
    EmployeeMySuffixUpdateComponent,
    EmployeeMySuffixDeleteDialogComponent
  ],
  entryComponents: [EmployeeMySuffixDeleteDialogComponent]
})
export class SkpDynamicApplicationEmployeeMySuffixModule {}
