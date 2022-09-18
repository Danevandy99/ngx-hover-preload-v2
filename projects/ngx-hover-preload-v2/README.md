# ngx-hover-preload-v2

*Based on [ngx-hover-preload](https://www.npmjs.com/package/ngx-hover-preload)*

---

This package exports:

1. `PreloadingStrategy`, which will preload a lazy-loaded route on mouse over a corresponding router link.
2. `PreloadOnDemandService`, which can be used to directly load a module that contains a given route path.

## Example

[Example code available here](https://github.com/Danevandy99/ngx-hover-preload-v2/tree/main/src).

## Usage

1. Install the package:
```
npm install --save ngx-hover-preload-v2
```

2. Import the `HoverPreloadModule` into your `AppModule` **AND** your lazy-loaded modules to ensure the link hover directive is available:

```ts
// ...
import { HoverPreloadModule } from 'ngx-hover-preload-v2';

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...
    HoverPreloadModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

3. Set your `RouteModule` preload strategy to `HoverPreloadStrategy`:

```ts
// ...
import { HoverPreloadStrategy } from 'ngx-hover-preload-v2';

@NgModule({
  // ...
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: HoverPreloadStrategy })],
})
export class AppModule {} // or AppRoutingModule
```

## License

MIT
