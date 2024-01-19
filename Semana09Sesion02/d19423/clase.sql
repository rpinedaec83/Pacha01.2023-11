Select * from customers where city = 'London';
Select 
	CU.customerID,
    CU.Address as Direccion
 from customers as CU where city = 'London';
 
 select * from orders;
 
 select 
 
 C.customerID,
 o.OrderDate,
 c.CustomerName,
 C.city
 
 from Orders O, Customers C
 
 where O.CustomerID = C.CustomerID;
 
 SELECT DISTINCT Country FROM Customers;
 
 SELECT COUNT(DISTINCT Country) FROM Customers;
 
 SELECT * FROM Customers
WHERE Country='Mexico';
 
 SELECT * FROM Customers
WHERE CustomerID=1;
 
 SELECT * FROM Customers
WHERE CustomerID > 80;

 SELECT * FROM Customers
WHERE CustomerID >= 80;

Select * from Customers where city <> 'London';

 SELECT * FROM Customers
WHERE CustomerID >= 80 and CustomerID <= 85;

 SELECT * FROM Customers
WHERE CustomerID between 80 and 85;

select * from Orders 
where OrderDate between '1997-01-01' and '1997-02-28';

SELECT * FROM Customers
WHERE CustomerName LIKE 'a%';


SELECT * FROM Customers
WHERE city LIKE 'L_nd__';

SELECT * FROM Customers
WHERE city LIKE '%L%';


SELECT * FROM Customers
WHERE CustomerName LIKE 'La%';

SELECT * FROM Customers
WHERE CustomerName LIKE 'a%' OR CustomerName LIKE 'b%';

SELECT * FROM Customers
WHERE CustomerName LIKE '%a';

SELECT * FROM Customers
WHERE CustomerName LIKE '%or%';

SELECT * FROM Customers
WHERE CustomerName LIKE 'a__%';

SELECT * FROM Customers
WHERE CustomerName LIKE '_r%';


SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');

select * from orders where customerID in (57, 72, 84);

select * from orders where customerID not in (57, 72, 84);

select * from orders
where customerID <> 57
and customerID <> 72
and customerID <> 84;


SELECT *
FROM Customers
WHERE Country = 'Spain' AND CustomerName LIKE 'G%';

SELECT * FROM Customers
WHERE Country = 'Spain' AND CustomerName LIKE 'G%' OR CustomerName LIKE 'R%';


 select 
 
 C.customerID,
 o.OrderDate,
 c.CustomerName,
 C.city
 
 from Orders O, Customers C
 
 where O.CustomerID = C.CustomerID;
 
select 
C.customerID,
o.OrderDate,
c.CustomerName,
C.city
 
 from Orders O 
 
 inner join Customers C on O.CustomerID = C.CustomerID;
 
 
select 
C.CustomerName,
S.ShipperName,
O.OrderID
 from Customers C inner join Orders O on C.customerID = O.CustomerID
inner join Shippers S on O.shipperID = S.ShipperID ;


SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;

SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID and  Orders.OrderID is null

ORDER BY Customers.CustomerName;


SELECT City FROM Customers
UNION
SELECT City FROM Suppliers
ORDER BY City;

SELECT City, Country FROM Customers
WHERE Country='Germany'
UNION
SELECT City, Country FROM Suppliers
WHERE Country='Germany'
ORDER BY City;


SELECT  * FROM Customers Limit 3;

select * from Products 
order by Price desc
limit 10;

select * from Products 
order by ProductName desc
limit 10;

select * from orders
order by orderdate desc
limit 10;


SELECT MIN(Price)
FROM Products;

SELECT MAX(Price)
FROM Products;

SELECT AVG(Price)
FROM Products;

SELECT count(Price)
FROM Products;


select C.customerName,
count(O.orderid)
 from Customers C inner join orders O on C.customerid = O.customerID
group by C.customerName
order by count(O.orderid) desc
Limit 3;
 
 
SELECT Shippers.ShipperName, COUNT(Orders.OrderID) AS NumberOfOrders FROM Orders
LEFT JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID
GROUP BY ShipperName;
 
 SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;


SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;


SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN 'The quantity is greater than 30'
    WHEN Quantity = 30 THEN 'The quantity is 30'
    ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails;



SELECT SupplierName
FROM Suppliers
WHERE EXISTS (SELECT ProductName FROM Products WHERE Products.SupplierID = Suppliers.supplierID AND Price < 20);