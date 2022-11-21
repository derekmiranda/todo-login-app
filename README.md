# Todo Login App

## Instructions

```
npm install && npm start
// app runs off http://localhost:1234
```

## Notes

- uses Parcel as low-setup bundler. I didn't feel like tearing down boilerplate from Create React App
- uses SCSS with BEM styling (block, element, modifier)

  - usually in BEM, elements are denoted w/ `__` and modifiers w/ `--`. however, Parcel exports SCSS classes with dashes as is, so to access it from JavaScript would look like:

  ```js
  /*
  styles.module.scss
  
  .elem {
    &--modifier {
      ...
    }
  }
  */

  import styles from "./styles.module.scss";
  styles["elem--modifier"];
  ```

  - to avoid having to use brackets, I opted for 1 underscore `_` for elements and 2 `__` for modifiers
