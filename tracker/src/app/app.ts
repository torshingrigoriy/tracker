import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PlannerPageComponent} from './features/tasks/pages/planner-page/planner-page.component';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    PlannerPageComponent,
    MatIcon,
    MatButton
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {

}
