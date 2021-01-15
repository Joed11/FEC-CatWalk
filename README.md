# Project Catwalk - Front-End Web App for an E-commerce retailer

[Live App](https://fec-catwalk-app.herokuapp.com/)

This app is a front-end web applicaiton.

![](Readme-assets/Product_Overview.gif)

---

## Table of Contents
1. [Getting Started](#Installing-Dependencies)
2. [Tech Stack](#Tech-Stack)
3. [Widgets](#Widgets)
4. [Web Performance](#Optimization)
5. [Contributors](#Contributors)

---

## Installing-Dependencies

### Navigate to the root directory and run the following in your terminal:

>*Install dependencies:*
```
npm install
```

>*Create a .env file and set environment variables as necessary.   Expected environment variables:

*  **PORT** = The port the server will listen on *(if this variable is not provided server will default to 3005)*
*  **API_URL** = URL of the API that will provide data to the frontend app

>*Build client side bundle (compile SASS to CSS and build webpack bundle):*
```
npm run build
```

>*Start the server:*
```
npm start
```

>*To run in development mode:*

```
npm run start-dev
```

---

## Tech-Stack

-  [Node.js - v12](nodejs.org)
-  [React - v17](https://reactjs.org/)
-  [Redux - v4](https://redux.js.org/)
-  [React-Router - v5](https://reactrouter.com)
-  [Express - v4](http://expressjs.com/)
-  [Node-Sass - v5](https://sass-lang.com/)

---

## Widgets

### Product Overview Widget
>  The Product Overview widget is the main area for users to view details about the current product (such as price, description, etc...).  Users can select a product style and view photos of that product style via a photo carousel.  Photos can be enlarged and zoomed in on for finer detail.  In the "Add to Bag" area, drop down menus will be auto-populated with the sizes and quantities available for that specific product style.

![](Readme-assets/Product_Overview.gif)

### Quesitons & Answers Widget
>  The Questions and Answers widget allows users to browse questions about the current product posed by other users along with any answers that have been provided for that quesiton.  Questions and answers can be marked helpful which will affect the order in whcih they appear.  They can also be reported which will remove them from results and flag them for review on the back-end.  Users can submit their own quesitons and answers via modal pop ups.  Quesitons can also be filtered via the searchbar at the top of the Quesitons and Answer widget.

![](Readme-assets/QandA_Widget.gif)

![](Readme-assets/QandA_form_validation.gif)

### Ratings & Reviews Widget
> The Ratings and Reviews widget allows users to browse reviews for the current product which have been submitted by other users.  Reviews can be sorted by multiple criteria and an average rating is provided based on all reviews associated with the product.  Users can mark a review as helpful or report a review if necessary.  Finally, Users can submit their own review of the product via a modal.

![](Readme-assets/Reviews_widget.gif)


---

## Web Performance

> Several Optimization techniques were utilized to increase site performance including:

* Critical HTML Loading
* Above the fold CSS style loading
* Minification
* Gzip compression

![](Readme-assets/FEC_Lighthouse_Audit.pdf)

---


## Contributors

- [Denis Sanches](https://github.com/shelleychenn)
- [David Lai](https://github.com/Eweiner11)
- [Joe DiMartino](https://github.com/mdoudy90)

## Credits

Boot-strapped with [createapp.dev](https://createapp.dev/)
