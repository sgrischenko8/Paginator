# Paginator-forMyCodies


This repository contain an app created with React.js for demonstration of custom
component Paginator.


The component takes four props

| Props          |   Type   |                                                    Definition |                  Required |
| -------------- | :------: | ------------------------------------------------------------: | ------------------------: |
| currentPage    |  number  | A state item which represent a current page of paginated list |                        ✔ |
| setCurrentPage | function |         A function that is intended to change the currentPage |                        ✔ |
| pageCount      |  number  | Total amount of pages of items list that need to be paginated | recommended for better UI |
| isDarkTheme    | boolean  |                                                Styling option |                  optional |

Key:

* buttons that are not needed at the moment are not shown;
* minimalist settings;
* button that navigates to last page show total page count;
* option to work with an undefined total page count;
* needed to be set in a strictly defined place by margin or position to avoid
  jumping navigation buttons.

Paginator.jsx ~ 7.03 kB; 

Paginator.module.css ~ 2.77 kB.

<a href="https://www.dropbox.com/scl/fi/7i4nib84nl0r0h939y5kw/Paginator.wmv?rlkey=p5izp0m1ljgszlklqu40w1709&dl=0" target="_blank">Video-demo:</a>
