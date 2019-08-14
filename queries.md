# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT p.productName,c.categoryName
FROM products as p
join categories as c on p.categoryID = c.categoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT o.orderID,s.shipperName,o.orderdate
FROM orders as o
join shippers as s on o.shipperID = s.shipperID
where orderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT p.productName,o.quantity,o.orderID
FROM products as p
join orderdetails as o on p.productID = o.productID
where orderID = 10251
order by p.productName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT o.orderID as 'Order ID Number',c.CustomerName as 'Customer Name',e.LastName as 'Employee Last Name'
FROM orders as o
join customers as c on o.customerID = c.customerID
join employees as e on o.employeeId=e.employeeID

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
