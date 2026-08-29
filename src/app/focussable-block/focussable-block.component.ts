import { AsyncPipe, NgClass } from '@angular/common';
import { Component, computed, ElementRef, HostListener, signal, viewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  imports: [NgClass, AsyncPipe],
  selector: 'app-focussable-block',
  styleUrl: './focussable-block.component.css',
  templateUrl: './focussable-block.component.html',
  host: {
    '(focusin)': 'onFocusIn($event, $event.target)',
    '(focusout)': 'onFocusOut($event)'
  }
})
export class FocussableBlockComponent {
  hasFocus$ = new Subject<boolean>();

  focussableBlock = viewChild<ElementRef<HTMLDivElement>>('focussableBlock');
  
  // List of focusable elements within the block
  focusableElements = computed<HTMLElement[]>(() => {
    const block = this.focussableBlock()?.nativeElement;
    if (!block) return [];
    return Array.from(block.querySelectorAll('input, button, select, textarea, [tabindex]'))
    .filter((el): el is HTMLElement => !!el);
  });
  
  // FocusIn and FocusOut event handlers inside focussable block
  focussedElementName = signal<string | null>(null);

  onFocusIn(event: FocusEvent, target: EventTarget | null) {
    event.preventDefault();
    if (target !== null && this.focusableElements().includes(target as HTMLElement)) {
      this.hasFocus$.next(true);
      this.focussedElementName.set((target as HTMLElement).tagName);
    }
  }

  onFocusOut(event: FocusEvent) {
    event.preventDefault();
    this.hasFocus$.next(false);
    this.focussedElementName.set(null);
  }
}
