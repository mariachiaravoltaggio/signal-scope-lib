
# SignalScope 🔬

Angular devtool per visualizzare e tracciare `signal`, `computed` ed `effect` in tempo reale. Supporta Angular zoneless ✅.

---

## ✅ Caratteristiche

- 🧠 Tracciamento automatico dei signal Angular
- 📊 Visualizzazione a grafo interattivo (con D3.js)
- 🧩 Componente standalone integrabile
- ⚡ Supporto completo per Angular **Zoneless**
- 🛠️ Comando `ng add signal-scope` per installazione rapida

---

## 🚀 Installazione

```bash
npm install signal-scope
```

Poi nel tuo `main.ts`:

```ts
import 'signal-scope/setup-signal-scope';
```

---

## 🧪 Uso (modalità normale)

```ts
import { SignalScopeComponent } from 'signal-scope';

@Component({
  standalone: true,
  imports: [SignalScopeComponent],
  template: '<app-signal-scope />'
})
export class AppComponent {}
```

---

## 🧪 Uso (modalità Zoneless)

```ts
import { SignalScopeZonelessComponent } from 'signal-scope';

@Component({
  standalone: true,
  imports: [SignalScopeZonelessComponent],
  template: '<app-signal-scope-zoneless />'
})
export class AppComponent {}
```

---

## 📦 Pubblicazione su GitHub

1. Crea una nuova repo su GitHub: `signal-scope`
2. Esegui:

```bash
git init
git remote add origin https://github.com/tuo-utente/signal-scope.git
git checkout -b main
git add .
git commit -m "Initial commit"
git push -u origin main
```

---

## 📚 Build e test

```bash
ng build signal-scope
```

Per usarla in altri progetti localmente:

```bash
cd dist/signal-scope
npm pack
cd /path/to/your-app
npm install ../path/to/dist/signal-scope/signal-scope-0.1.0.tgz
```

---

## 🧩 Comando automatico

```bash
ng add signal-scope
```

---

Enjoy 🧠⚡
