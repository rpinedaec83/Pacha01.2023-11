#--Ejercicion 01--Seleccionar los clientes que viven en el país de "usa"
select * from customers c where c.country = 'USA';

#--Ejercicion 02--Seleccionar los proveedores que viven en la ciudad de "BERLIN"
select * from customers c where c.city = 'Berlin';

#--Ejercicion 03--Seleccionar los empleados con código 3,5 y 8
select * from employees e where e.EmployeeID in (3,5,8);

#--Ejercicion 05--Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
select * from products p where p.Price >= 20 and p.Price <= 90;

#--Ejercicion 06--Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
select * from orders o where o.OrderDate between '1997/01/01' and '1997/07/15'; 

#--Ejercicion 07--Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8
select * from orders o where year(o.OrderDate) = 1997 and o.EmployeeID in (1,3,4,8); 

#--Ejercicion 08--Mostrar las ordenes hechas en el año 1996
select * from orders o where year(o.OrderDate) = 1996; 

#--Ejercicion 09--Mostrar las ordenes hechas en el año 1997 ,del mes de abril
select * from orders o where year(o.OrderDate) = 1997 and month(o.OrderDate) = 4; 

#--Ejercicion 10--Mostrar las ordenes hechas el primero de todos los meses, del año 1998
select * from orders o where year(o.OrderDate) = 1998;

#--Ejercicion 11--Mostrar todos los clientes que no tienen fax
select * from customers c where c.PostalCode='';

#--Ejercicion 12--Mostrar todos los clientes que tienen fax
select * from customers c where c.PostalCode<>'';

#--Ejercicion 13--Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.
select p.ProductName, p.Unit ,p.Price,c.CategoryName from products p left join categories c on p.CategoryID = c.CategoryID;

#--Ejercicion 14--Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.
select p.ProductName, p.Unit ,p.Price,s.SupplierName from products p left join suppliers s on p.SupplierID = s.SupplierID;

#--Ejercicion 15--Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.
select od.OrderID,od.ProductID,p.Price,od.Quantity,(p.Price * od.Quantity) as TotalPayment from orderdetails od left join products p on od.ProductID = p.ProductID;

#--Ejercicion 16--Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.
select o.OrderID,o.OrderDate,od.ProductID,p.Price,o.EmployeeID,e.FirstName,e.LastName from orders o 
inner join employees e 
on o.EmployeeID = e.EmployeeID 
left join orderdetails od 
on o.OrderID = od.OrderID 
left join products p 
on od.ProductID = p.ProductID;

#--Ejercicion 17--Mostrar los 10 productos con menor stock
select * from products order by REGEXP_SUBSTR(Unit,'[0-9]+') asc limit 10;

#--Ejercicion 18--Mostrar los 10 productos con mayor stock
select * from products order by REGEXP_SUBSTR(Unit,'[0-9]+') desc limit 10;

#--Ejercicion 19--Mostrar los 10 productos con menor precio
select * from products order by Price asc limit 10;

#--Ejercicion 20--Mostrar los 10 productos con mayor precio
select * from products order by Price desc limit 10;

#--Ejercicion 21--Mostrar los 10 productos más baratos
select * from products order by Price desc limit 10;

#--Ejercicion 22--Mostrar los 10 productos más caros
select * from products order by Price asc limit 10;

#--Ejercicion 23--Seleccionar todos los campos de la tabla clientes,ordenar por compania
select * from customers c order by c.CustomerName asc;

#--Ejercicion 24--Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania
select * from customers c where c.CustomerName like 'B%' and c.Country='UK' order by c.CustomerName asc;

#--Ejercicion 25--Seleccionar todos los campos de productos de las categorias 1,3 y 5 ,ordenar por categoria
select * from products p where p.CategoryID in (1,3,5) order by p.CategoryID asc;

#--Ejercicion 26--Seleccionar los productos cuyos precios unitarios estan entre 50 y 200
select * from products p where p.Price between 50 and 200;

#--Ejercicion 27--Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden
select c.CustomerID,c.CustomerName, o.OrderDate,p.Price, p.ProductName from orders o 
left join orderdetails od on o.OrderID = od.OrderID 
left join products p on od.ProductID = p.ProductID
left join customers c on o.CustomerID = o.CustomerID;

#--Ejercicion 28--Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.
Select ct.CategoryName,count(p.ProductID) as 'CountProducts' from products p left join categories ct on p.CategoryID=ct.CategoryID group by p.CategoryID ;

#--Ejercicion 29--Seleccionar los 5 productos mas vendidos
select od.ProductID,sum(od.Quantity) as 'Ventas' from orderdetails od 
left join products p on od.ProductID = p.ProductID 
group by od.ProductID 
order by sum(od.Quantity) desc limit 5;

#--Ejercicion 30--Seleccionar los jefes de los empleados
# no hay solución

#--Ejercicion 31--Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129
select * from products p where p.ProductName like 'M%' and p.Price between 28 and 129;

#--Ejercicion 32--Obtener todos los clientes del Pais de USA,Francia y UK
select * from customers where Country in ('USA','Francia','UK');

#--Ejercicion 33--Obtener todos los productos descontinuados o con stock cero.
select * from products p where REGEXP_SUBSTR(Unit,'[0-9]+') = 0;

#--Ejercicion 34--Obtener todas las ordenes hechas por el empleado King Robert
select o.*,e.FirstName,e.LastName from orders o inner join employees e on e.EmployeeID = o.EmployeeID where CONCAT_WS(' ', e.LastName , e.FirstName) = "King Robert";

#--Ejercicion 35--Obtener todas las ordenes por el cliente cuya compania es "Que delicia"
select o.* from orders o left join customers c on o.CustomerID = c.CustomerID where c.CustomerName = 'Que delicia';

#--Ejercicion 36--Obtener todas las ordenes hechas por el empleado King Robert,Davolio Nancy y Fuller Andrew
select o.*,e.FirstName,e.LastName from orders o left join employees e on e.EmployeeID = o.EmployeeID where CONCAT_WS(' ', e.LastName , e.FirstName) in ('King Robert','Davolio Nancy','Fuller Andrew');

#--Ejercicion 37--Obtener todos los productos(codigo,nombre,precio,stock) de la orden 10257
select p.* from products p left join orderdetails od on od.ProductID = p.ProductID where od.OrderID = 10257;

#--Ejercicion 38--Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy.
select p.* from products p inner join orderdetails od on p.ProductID = od.ProductID left join orders o on o.OrderID = od.OrderID group by p.ProductID;

#--Ejercicion 39--Calcular los 15 productos mas caros
select p.* from products p order by p.Price desc limit 15;

#--Ejercicion 40--Calcular los 5 productos mas baratos
select p.* from products p order by p.Price asc limit 5;

#--Ejercicion 41--Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.
select p.ProductName,p.Price,c.CategoryName from products p left join categories c on p.CategoryID = c.CategoryID;

#--Ejercicion 42--Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra P
select p.ProductName,p.Price,c.CategoryName from products p left join categories c on p.CategoryID = c.CategoryID where p.ProductName like 'P%';

#--Ejercicion 43--Calcular el stock de productos por cada categoria.Mostrar el nombre de la categoria y el stock por categoria.
select 
	c.CategoryName,
	sum(REGEXP_SUBSTR(Unit, '[0-9]+')) as Stock
	from Categories c 
		left join Products p 
		on p.CategoryID = c.CategoryID 
		group by c.CategoryID;

#--Ejercicion 44--Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794
select c.CustomerName,s.ContactName,e.LastName,p.ProductName from Customers c 
		left join Orders o 
		on o.CustomerID = c.CustomerID 
		left join Employees e 
		on o.EmployeeID = e.EmployeeID 
		left join OrderDetails od 
		on od.OrderID  = o.OrderID 
		left join Products p 
		on od.ProductID = p.ProductID 
		left join Suppliers s 
		on p.SupplierID = s.SupplierID 	where o.OrderID = '10794';

#--Ejercicion 45--Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año.
select c.CustomerID,count(o.OrderID),YEAR(o.OrderDate) from Customers c
	left join Orders o 
	on c.CustomerID = o.CustomerID
	GROUP by c.CustomerID, o.OrderDate 
	order by c.CustomerID , o.OrderDate ;

#--Ejercicion 46--Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes.
select YEAR(o.OrderDate) as 'year',MONTH(o.OrderDate) as 'month',COUNT(o.OrderID) as 'count' from Orders o group by YEAR(o.OrderDate),MONTH(o.OrderDate) order by YEAR(o.OrderDate),MONTH(o.OrderDate);