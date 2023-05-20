## Changes to CSS:

### Just work your way down the CSS and this file.

* Remove:

    ```css
    html {
        scroll-behavior: smooth;
    }
    ```

* In `body{}`, add:
  
  ```css
    overflow: hidden;
  ```
  * Also, in the `body{}` element, update the `background` rule and the `background-size` rule:

    ```css
    background: linear-gradient(128deg,
            rgb(222, 160, 160, 0.85) -3%,
            rgb(222, 160, 160, 0) 57%),
            rgb(0, 0, 0, 0.3);
    background-size: auto 200vh;
    ```

* Remove:

  ```css
  .flex-wrapper {
    display: flex;
    flex-direction: column;
  }
  ```

* In `header{}` element, change:

  ```css
  height: 80px;
  ```
  * Also in `header{}`, remove:
  
  ```css
  padding: 1rem 0;
  ```

* In `nav a{}`, change:

  ```css
  transition: color 300ms, transform 300ms, box-shadow 200ms;
  ```
* Below `nav a{}`, add:

  ```css
  nav a:hover {
  color: rgba(222, 160, 160, 0.85); 
  }
  ```
* Below `nav a:active{}`, add:

  ```css
  .underline {
  height: 5px;
  background-color: rgba(222, 160, 160, 0.85); 
  transform: scale(0);
  transition: transform 300ms;
  transform-origin: bottom;
  }

  nav a:hover > .underline,
  .active > .underline {
    transform: scale(1);
  }

  .active {
    color: rgba(222, 160, 160, 0.85);
  }
  ```
* In `section{}`, change:

  ```css
  height: 86vh;
  ```
* Also in `section{}`, remove:

  ```css
  padding: 4rem 0;
  scroll-margin-top: 100px;
  ```
* In `section.home{}`, remove:
  
  ```css
  background-color: rgb(0, 0, 0, .3);
  ```

* Also in `section.home{}`, add:

  ```css
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ```
* In `cta{}`, add:

  ```css
  transition: background-color 300ms;
  color: #fff;
  border: none;
  cursor: pointer;
  ```

* Also in `cta{}`, remove:

  ```css
  margin-top: 1rem;
  ```

* In `section.about{}`, add:

  ```css
  background: linear-gradient(128.16deg,
            rgb(222, 160, 160, 0.85) -3.04%,
            rgb(222, 160, 160, 0) 57.36%) no-repeat;
  ```

* In `headshot{}`, change:

  ```css
  margin: 0 auto 1rem auto;
  ```

* Change `section.about > h2{}` to:
  
  ```css
  section.about > h2:first-of-type {}
  ```

* In `about_info-card{}`, remove:
  
  ```css
  min-width: 250px;
  ```

* Also in `about_info-card{}`, change:

  ```css
  max-width: 550px;
  ```

* In `section.portfolio{}`, remove:

  ```css
  background-color: rgb(0, 0, 0, 0.3);
  ```
* Also in `section.portfolio{}`, add:

  ```css
  background: linear-gradient(128deg,
            rgb(222, 160, 160, 0.85) -3%,
            rgb(222, 160, 160, 0) 57%);
  ```

* In `section.contact{}`, remove:

  ```css
  scroll-margin-top: -56px;
  ```
* Also in `section.contact{}`, add:

  ```css
  background: linear-gradient(128deg,
            rgb(222, 160, 160, 0.85) -3%,
            rgb(222, 160, 160, 0) 57%);
  ```

* Below `footer a{}`, add:

  ```css
  footer span {
  display: inline-block;
  }
  ```

#### In `@media (max-width: 900px) {}`:

* Above `.about_info{}`, add:

  ```css
  section.about,
  section.portfolio {
    overflow-y: scroll;
    justify-content: flex-start;
    padding: 40px;
  }
  ```

* Below `.about_info{}`, add:

  ```css
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  ```

#### In `@media (max-width: 500px) {}`:

* In, `.nav__toggle-label {}`, change:

  ```css
  top: 40px;
  ```

* To `.nav__toggle:checked~.nav__phone a{}`, change:

  ```css
  transition: color 300ms, transform 300ms, box-shadow 200ms;
  ```

* Below `.nav__toggle:checked~.nav__phone a{}`, add:

  ```css
    nav a:hover {
      color: rgba(222, 160, 160, 0.85);
    }
    
    nav a:active {
      transform: scale(.92);
      box-shadow: inset 2px 2px 4px #1f1f1f,
        inset -1px -1px 2px #f7f7f7;
    }
    
    .underline {
      height: 5px;
      background-color: rgba(222, 160, 160, 0.85); 
      transform: scale(0);
      transition: transform 300ms;
      transform-origin: bottom;
    }
    
    nav a:hover > .underline,
    .active > .underline {
      transform: scale(1);
    }
    
    .active {
      color: rgba(222, 160, 160, 0.85);
    }
  ```