import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() label = '';
  @Input() id = '';
  @Input() type = 'text';
  @Input() control: FormControl = new FormControl();

  constructor() {}

  ngOnInit(): void {}
}
