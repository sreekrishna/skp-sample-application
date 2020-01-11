import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ILocationMySuffix } from 'app/shared/model/location-my-suffix.model';
import { LocationMySuffixService } from './location-my-suffix.service';

@Component({
  templateUrl: './location-my-suffix-delete-dialog.component.html'
})
export class LocationMySuffixDeleteDialogComponent {
  location?: ILocationMySuffix;

  constructor(
    protected locationService: LocationMySuffixService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  clear(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.locationService.delete(id).subscribe(() => {
      this.eventManager.broadcast('locationListModification');
      this.activeModal.close();
    });
  }
}
