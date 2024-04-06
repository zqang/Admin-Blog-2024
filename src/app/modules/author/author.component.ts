import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css',
})
export class AuthorComponent {}
