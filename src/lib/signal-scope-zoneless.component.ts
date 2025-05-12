
import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signal-scope-zoneless',
  standalone: true,
  template: \`
    <div style="position: fixed; right: 0; top: 0; background: #111; color: white; width: 300px; height: 100%; padding: 1rem; font-family: monospace; overflow: auto; z-index: 999;">
      <h3>SignalScope (Zoneless)</h3>
      <div *ngFor="let node of graph()">
        <strong>{{ node.id }}</strong> ({{ node.type }})<br />
        Value: {{ node.value | json }}<br />
        Deps: {{ node.deps.join(', ') || 'none' }}
        <hr />
      </div>
    </div>
  \`
})
export class SignalScopeZonelessComponent {
  private graphSignal = signal((globalThis as any).ngSignalScope?.graph ?? []);
  graph = this.graphSignal;

  constructor() {
    setInterval(() => {
      this.graphSignal.set((globalThis as any).ngSignalScope?.graph ?? []);
    }, 300);
  }
}
