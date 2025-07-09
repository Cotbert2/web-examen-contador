import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-velocimeter',
  imports: [CommonModule],
  templateUrl: './velocimeter.component.html',
  styleUrl: './velocimeter.component.scss'
})
export class VelocimeterComponent {
  velocity = signal(0);

  range = computed(() => {
    if (this.velocity() < 30) {
      return 'low';
    } else if (this.velocity() <= 70) {
      return 'medium';
    } else if (this.velocity() <= 120) {
      return 'high';
    } else {
      return 'very high';
    }
  });


  accelerate() {
    this.velocity.update(v => v + 5);
  }

  break() {
    this.velocity.update(v => (v-3 < 0 ? v : v - 3));
  }

  reset() {
    this.velocity.set(0);
  }

}
