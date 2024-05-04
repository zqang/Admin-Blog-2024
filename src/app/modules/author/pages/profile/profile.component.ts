import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MultiSelectComponent } from '../../../../shared/components/multi-select/multi-select.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, MultiSelectComponent, ButtonComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  fb = inject(FormBuilder);

  profileForm = this.fb.group({
    userName: this.fb.control('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    authorName: this.fb.control('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    bio: this.fb.control('', [Validators.maxLength(2048)]),
  });

  createProfile() {
    console.log(this.profileForm.value);
  }
}
