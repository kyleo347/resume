import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../classes/job.class';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  @Input() job: Job;

  ngOnInit() {
  }

}
