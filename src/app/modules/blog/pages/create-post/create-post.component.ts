import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { MultiSelectComponent } from '../../../../shared/components/multi-select/multi-select.component';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-post',
  standalone: true,
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
  imports: [
    ButtonComponent,
    MultiSelectComponent,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CreatePostComponent {
  public Editor: any = Editor;
  editorData = '<p>Hello, world!</p>';
  options: string[] = ['option1', 'option2', 'option3'];
  fb = inject(FormBuilder);

  postForm = this.fb.group({
    title: this.fb.control('', [Validators.required, Validators.minLength(5)]),
    excerpt: this.fb.control('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(255),
    ]),
    content: this.fb.control('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  tagChange(option: string) {
    console.log(option);
  }

  public model = {
    editorData: '<p>Hello, world!</p>',
  };

  createPost() {
    console.log(this.postForm.value);
  }
}
