# ngx-hover-preload-v2

This package exports:

1. `PreloadingStrategy`, which will preload a lazy-loaded route on mouse over a corresponding router link.
2. `PreloadOnDemandService`, which can be used to directly load a module that contains a given route path.

## Example

Example is available [here](https://github.com/mgechev/ngx-hover-preload/tree/master/src).

## Usage

Install the module:
```
yarn add ngx-hover-preload
```

Import the `HoverPreloadModule`  in your `AppModule` *AND* your lazy-loaded modules to ensure the required directives are available:

```ts
// ...
import { HoverPreloadModule } from 'ngx-hover-preload';

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

**Make sure you import the `HoverPreloadModule` in all lazy-loaded modules in which you want to have this functionality available**

Don't forget to set the `HoverPreloadStrategy` as your `preloadStrategy`:

```ts
// ...
import { HoverPreloadStrategy } from 'ngx-hover-preload';

@NgModule({
  // ...
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: HoverPreloadStrategy })],
})
export class AppModule {} // or AppRoutingModule
```

## License

MIT
