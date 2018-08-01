import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AddTaskCompnentComponent } from './add-task-compnent.component';

describe('AddTaskCompnentComponent', () => {
  let component: AddTaskCompnentComponent;
  let fixture: ComponentFixture<AddTaskCompnentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ,
        NgSelectModule,
        HttpClientTestingModule],
      declarations: [ AddTaskCompnentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
