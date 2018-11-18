import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public cols: Observable<number>;
  public areHeadersVisible = true;
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private observableMedia: ObservableMedia) {}
  ngOnInit(): void {
    const grid = new Map([
      ['xs', 1],
      ['sm', 2],
      ['md', 2],
      ['lg', 2],
      ['xl', 2]
    ]);
    let start: number;
    grid.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start = cols;
      }
    });
    this.cols = this.observableMedia.asObservable().pipe(
      map(change => {
        return grid.get(change.mqAlias);
      }),
      startWith(start),
      takeUntil(this.onDestroy$)
    );
    this.cols.pipe(takeUntil(this.onDestroy$)).subscribe(col => {
      this.areHeadersVisible = col > 1;
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
