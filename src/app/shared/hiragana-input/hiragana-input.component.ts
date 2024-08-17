import { CommonModule } from '@angular/common';
import { Component, OnInit, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as wanakana from 'wanakana';

@Component({
  selector: 'app-hiragana-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hiragana-input.component.html',
  styleUrl: './hiragana-input.component.scss'
})
export class HiraganaInputComponent implements OnInit {

  favoriteColor = '';
  submittedValue = output<string>();

  ngOnInit(): void {
    const test = document.getElementById('wanakana-input') as HTMLInputElement;
    wanakana.bind(test);
  }

  submit(): void {
    this.submittedValue.emit(wanakana.toHiragana(this.favoriteColor));
  }
}
