import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/category';
import { addCategory } from 'src/app/store/category/category.actions';
import { isPendingSelector } from 'src/app/store/category/category.selectors';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  categoryForm!: FormGroup;
  image!: File;
  imagePreview: ArrayBuffer | string | null | undefined = '';
  pending$ = new Observable<boolean>();

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required]],
    });

    this.pending$ = this.store.pipe(select(isPendingSelector));
  }

  getInputName(inputname: string): FormControl {
    return this.categoryForm.get(inputname) as FormControl;
  }

  onImageSelect(event: any): void {
    const file = event.target.files[0];
    this.image = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };

    reader.readAsDataURL(file);
  }

  onSubmit(): void {
    this.store.dispatch(
      addCategory({ name: this.categoryForm.value.name, img: this.image })
    );
  }
}
