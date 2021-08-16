import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-note',
  templateUrl: './overview-note.component.html',
  styleUrls: ['./overview-note.component.scss'],
})
export class OverviewNoteComponent implements OnInit {
  @Input() noteStatus = false;

  constructor() {}

  ngOnInit(): void {}
}
