import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'item-skeleton',
  templateUrl: 'item-skeleton.component.html',
  styleUrls: ['item-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemSkeletonComponent {}