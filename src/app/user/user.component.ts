import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';

interface User {
  id: string;
  name: string;
  avatar: string;
};


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();




  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // Signal based approach
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });


  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
