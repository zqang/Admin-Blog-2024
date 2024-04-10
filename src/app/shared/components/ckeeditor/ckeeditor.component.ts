import { Component, Input, Output, output } from '@angular/core';
import Editor from './ckeditor';
import { CKEditorModule, ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorConfig } from '@ckeditor/ckeditor5-core';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';

@Component({
  standalone: true,
  imports: [CKEditorModule, ReactiveFormsModule],
  selector: 'app-ckeeditor',
  templateUrl: './ckeeditor.component.html',
})
export class CkeeditorComponent {
  @Input() fControlName: any;
  editorDataChange = output<string>();

  htmlEditorConfig: EditorConfig = {
    // plugins: [MediaEmbed],
    // mediaEmbed: {
    //   previewsInData: true,
    // },
  };

  constructor() {}

  public Editor: any = Editor;

  public onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    this.editorDataChange.emit(data);
  }
}
