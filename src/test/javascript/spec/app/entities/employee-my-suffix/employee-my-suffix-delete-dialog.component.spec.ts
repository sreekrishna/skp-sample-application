import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { SkpDynamicApplicationTestModule } from '../../../test.module';
import { MockEventManager } from '../../../helpers/mock-event-manager.service';
import { MockActiveModal } from '../../../helpers/mock-active-modal.service';
import { EmployeeMySuffixDeleteDialogComponent } from 'app/entities/employee-my-suffix/employee-my-suffix-delete-dialog.component';
import { EmployeeMySuffixService } from 'app/entities/employee-my-suffix/employee-my-suffix.service';

describe('Component Tests', () => {
  describe('EmployeeMySuffix Management Delete Component', () => {
    let comp: EmployeeMySuffixDeleteDialogComponent;
    let fixture: ComponentFixture<EmployeeMySuffixDeleteDialogComponent>;
    let service: EmployeeMySuffixService;
    let mockEventManager: MockEventManager;
    let mockActiveModal: MockActiveModal;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SkpDynamicApplicationTestModule],
        declarations: [EmployeeMySuffixDeleteDialogComponent]
      })
        .overrideTemplate(EmployeeMySuffixDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(EmployeeMySuffixDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(EmployeeMySuffixService);
      mockEventManager = TestBed.get(JhiEventManager);
      mockActiveModal = TestBed.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.closeSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));
      it('Should not call delete service on clear', () => {
        // GIVEN
        spyOn(service, 'delete');

        // WHEN
        comp.clear();

        // THEN
        expect(service.delete).not.toHaveBeenCalled();
        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
      });
    });
  });
});
