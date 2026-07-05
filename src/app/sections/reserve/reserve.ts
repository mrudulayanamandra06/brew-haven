import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reserve',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reserve.html',
  styleUrl: './reserve.css'
})
export class ReserveComponent {

  submitForm() {
    alert("Table Reserved Successfully ☕");
  }

}