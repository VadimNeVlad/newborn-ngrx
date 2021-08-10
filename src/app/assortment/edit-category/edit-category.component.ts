import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { MaterialService } from 'src/app/shared/services/material.service';
import {
  deleteCategory,
  getCategory,
  updateCategory,
} from 'src/app/store/category/category.actions';
import {
  currentCategorySelector,
  isLoadingSelector,
  isPendingSelector,
} from 'src/app/store/category/category.selectors';
import { modalClose, modalOpen } from 'src/app/store/modal/modal.actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit, OnDestroy {
  categoryForm!: FormGroup;
  categoryId = '';
  image!: File;
  isImagePrestine = true;

  imagePreview: ArrayBuffer | string | null | undefined = '';
  loading$ = new Observable<boolean>();
  isPending$ = new Observable<boolean>();
  subs = new Subscription();

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required]],
    });

    this.categoryId = this.route.snapshot.paramMap.get('id') || '';
    this.loading$ = this.store.pipe(select(isLoadingSelector));
    this.isPending$ = this.store.pipe(select(isPendingSelector));

    this.getCategoryById();
    this.getCategoryValues();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getCategoryById(): void {
    this.store.dispatch(getCategory({ slug: this.categoryId }));
  }

  getCategoryValues(): void {
    this.subs = this.store
      .pipe(select(currentCategorySelector))
      .subscribe((category) => {
        this.categoryForm.patchValue({
          name: category?.name,
        });

        if (category?.imageSrc) {
          this.imagePreview = environment.apiUrl + '/' + category?.imageSrc;
        }

        MaterialService.updateTextInput();
      });
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
      this.isImagePrestine = false;
    };

    reader.readAsDataURL(file);
  }

  openModal(modalType: string): void {
    this.store.dispatch(modalOpen({ modalOpen: modalType }));
  }

  closeModal(): void {
    this.store.dispatch(modalClose());
  }

  onDelete(): void {
    this.store.dispatch(deleteCategory({ id: this.categoryId }));
  }

  onSubmit(): void {
    this.store.dispatch(
      updateCategory({
        name: this.categoryForm.value.name,
        id: this.categoryId,
        img: this.image,
      })
    );
  }
}
