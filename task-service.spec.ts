import { async, TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { TaskService } from './task.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { getAllTasks } from './unit-test/mockTest'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';

const TASKS=getAllTasks();

describe('TaskService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let taskService: TaskService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        HttpModule
      ],
      providers: [TaskService]
    });
    httpClient=TestBed.get(HttpClient);
    httpTestingController=TestBed.get(HttpTestingController);
    taskService=TestBed.get(TaskService);

  });

  

  it('should be created', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));

  it('should track that the spy was called', inject([TaskService], (service: TaskService) => {
    spyOn(service,'setCurrentTaskDetails').and.returnValue(
      Observable.empty);
    // const spy= spyOn(service,'getTasks').and.returnValue(
    //    Observable.from([TASKS]));
    service.setCurrentTaskDetails(TASKS[1]);
    
       expect(service.setCurrentTaskDetails).toHaveBeenCalled();
    })
   // expect(spy).toHaveBeenCalled();
  );
  describe('#getParentTasks', () => {
    let expectedTasks: String[];
    let tasksUrl: any;

    beforeEach(() => {
      taskService = TestBed.get(TaskService);
      tasksUrl = taskService.taskURL + 'getParentTasks'
      expectedTasks =
        [
          'JUMP','WALK','RUN'
        ] as String[];
    });

    it('should return expected parent tasks (called once)', () => {
      taskService.getParentTasks().subscribe(
        tasks => expect(tasks).toEqual(expectedTasks, 'should return expected parent tasks'), fail
      );

      const req = httpTestingController.expectOne(tasksUrl);
      expect(req.request.method).toEqual('GET');

      // Respond with the mock tasks
      req.flush(expectedTasks);
    });
 
  });

});
