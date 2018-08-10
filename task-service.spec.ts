package com.fsd.taskmanager;

import static org.junit.Assert.assertNotNull;
import static org.mockito.Matchers.anyObject;
import static org.mockito.Mockito.doNothing;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.powermock.modules.junit4.PowerMockRunner;
import org.springframework.http.ResponseEntity;
import org.springframework.web.util.UriComponentsBuilder;

import com.fsd.taskmanager.controller.TaskManagerController;
import com.fsd.taskmanager.model.TaskDetails;
import com.fsd.taskmanager.service.TaskMangerService;

@RunWith(PowerMockRunner.class)
public class TaskManagerControllerTest {
	
	@Mock 
	TaskMangerService taskManagerService;
	
	@InjectMocks
	TaskManagerController taskManagerController;
	
	TaskDetails taskDetails;
	
	@Before
	public void setUp() {
		MockitoAnnotations.initMocks(this);
		
	}
	
	@Test
	public void testAllTasks() {
		List<TaskDetails>  details = new ArrayList<>();
		TaskDetails taskDetails = new TaskDetails();
		taskDetails.setTask("task");;
		details.add(taskDetails);
		Mockito.when(taskManagerService.getAllTasks()).thenReturn(details);
		ResponseEntity<List<TaskDetails>>  taskDetails2 = taskManagerController.getTaskDetails();
		assertNotNull(taskDetails2.getBody());
	}
	
	@Test
	public void testSaveTaskDetails() {
		List<TaskDetails>  details = new ArrayList<>();
		TaskDetails taskDetails = new TaskDetails();
		taskDetails.setTask("task");;
		details.add(taskDetails);
		doNothing().when(taskManagerService).addTask(anyObject());
		ResponseEntity<Void>  taskDetails2 = taskManagerController.saveTaskDetails(taskDetails, UriComponentsBuilder.newInstance());
		assertNotNull(taskDetails2);
	}
}
