import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SvgIconComponent } from 'angular-svg-icon';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [FormsModule, SvgIconComponent, ClickOutsideDirective],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.css',
})
export class MultiSelectComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() label: string = '';
  @Input() options: string[] = [];
  @Input() isMultipleTag: boolean = false;
  @Input() formControl: string = '';

  @ViewChild('tagDropdownMenu') dropdownMenu!: ElementRef;
  @ViewChild('tagDropdownContainer', { static: true })
  dropdownContainer!: ElementRef;

  open: boolean = false;
  selectedOptions: string[] = [];
  filteredOptions: string[] = this.options;
  selectedOptionChange = output<string[]>();
  clearOptionChange = output();
  searchText: string = '';

  ngOnInit(): void {
    this.filteredOptions = this.options;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['options']) {
      this.filteredOptions = this.options.filter((opt) =>
        opt.toLowerCase().includes(this.searchText.toLowerCase()),
      );
    }
  }

  ngAfterViewInit(): void {
    this.calculateDropdownPosition();
  }

  onSearchChange() {
    if (!this.searchText || this.searchText === '') {
      this.filteredOptions = this.options;
    } else {
      this.filteredOptions = this.options.filter((opt) =>
        opt.toLowerCase().includes(this.searchText.toLowerCase()),
      );
    }
  }

  toggle() {
    this.calculateDropdownPosition();
    this.open = !this.open;
  }

  toggleOption(option: string) {
    if (this.isMultipleTag) {
      if (this.selectedOptions.includes(option)) {
        this.selectedOptions = this.selectedOptions.filter(
          (value) => value !== option,
        );
        this.filteredOptions.push(option);
      } else {
        this.selectedOptions.push(option);
        this.filteredOptions = this.filteredOptions.filter(
          (value) => value !== option,
        );
      }
    } else {
      this.selectedOptions = [option];
      this.filteredOptions = this.options.filter((value) => value !== option);
    }

    this.selectedOptionChange.emit(this.selectedOptions);
  }

  clearOption() {
    this.filteredOptions = this.filteredOptions.concat(this.selectedOptions);
    this.selectedOptions = [];
    this.selectedOptionChange.emit(this.selectedOptions);
  }

  calculateDropdownPosition() {
    const dropdownList = this.dropdownMenu.nativeElement;
    const containerRect =
      this.dropdownContainer.nativeElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (viewportHeight - containerRect.top < containerRect.bottom) {
      dropdownList.style.bottom = '100%';
      dropdownList.style.top = 'auto';
    } else {
      dropdownList.style.bottom = 'auto';
      dropdownList.style.top = '100%';
    }
  }
}
