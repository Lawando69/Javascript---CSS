// JavaScript Document

var bookTitle = "";
var bookAuthor = "";
var price = 0.00;
var inStock = false;
var discountPrice = 0.00;

bookTitle = "Harry Potter and the something something...";
bookAuthor = "J K Rowling";
price = 9.99;
inStock = true;
discountPrice = price-(price/4);

document.write("Title: ", bookTitle,"</br>");
document.write("Author: ", bookAuthor, "</br>");
document.write("Price: ", price, "</br>");
document.write("In Stock: ", inStock, "</br>");
document.write("Discounted price: £",discountPrice)