import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IRegionMySuffix } from 'app/shared/model/region-my-suffix.model';
import { RegionMySuffixService } from './region-my-suffix.service';

@Component({
  templateUrl: './region-my-suffix-delete-dialog.component.html'
})
export class RegionMySuffixDeleteDialogComponent {
  region?: IRegionMySuffix;

  constructor(
    protected regionService: RegionMySuffixService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  clear(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.regionService.delete(id).subscribe(() => {
      this.eventManager.broadcast('regionListModification');
      this.activeModal.close();
    });
  }
}
