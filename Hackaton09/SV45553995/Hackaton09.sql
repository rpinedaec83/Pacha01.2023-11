
-1- Seleccionar los clientes que viven en el país de "usa"
Select * from Customers where country = 'USA';
many
-- STORE PROCEDURE

create procedure salludar()
BEGIN
	select 'Hola, como estas ?' as saludo;
END

create PROCEDURE saludar(nombre varchar(150))
BEGIN
	select CONCAT('Hola, ', nombre,' como estas? ') as saludo;
END

call saludar('Juan')

call salludar()

----------------------------------------

-- Seleccionar los clientes que viven en el país de "usa"
create procedure seleccionarClientes(in selectCountry varchar(150))
BEGIN
	
	DECLARE CONTINUE HANDLER FOR SQLSTATE '42S02'
	BEGIN	
		SELECT 'SQLSTATE handler was activated' AS msg;
	END;
	

	BEGIN 
		DECLARE EXIT handler FOR SQLSTATE '42S03'
		BEGIN
			SELECT 'SQLSTATE handler was activated' AS msg;
		END;
		
 		Select
			CustomerID,
			CustomerName,
			ContactName,
			Country
		from
			Customers
		where
		country = selectCountry;		
	END;
	-- select resultado as SelectCountries;
END;

call seleccionarClientes('Germany')
select * from clientes where country='Argentina'


-2- Seleccionar los proveedores que viven en la ciudad de "BERLIN"
create procedure seleccionarProveedores(in SelectCity varchar(150))
BEGIN
	
	DECLARE CONTINUE HANDLER FOR SQLSTATE '42S02'
	BEGIN	
		SELECT 'SQLSTATE handler' AS msg;
	END;
	

	BEGIN 
		DECLARE EXIT handler FOR SQLSTATE '42S03'
		BEGIN
			SELECT 'SQLSTATE handler was exit' AS msg;
		END;
		
 		Select
			SupplierID,
			SupplierName,
			City,
			Address,
			Country
		from
			Suppliers
		where
		City = SelectCity;
	END;
END;

-3- Seleccionar los empleados con código 3,5 y 8

	select * from Employees where EmployeeID in (3,5,8)

-4- Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
	
	select * from Products where REGEXP_SUBSTR(Unit, '[0-9]+') > 0 and SupplierID in (1,3,5)
   	select REGEXP_SUBSTR(Unit, '[0-9]+') from Products
   	
-5- Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
   	
   	select * from Products where Price >= 20 and Price <= 90
   	
-6- Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
   	
   	select * from Orders where OrderDate BETWEEN '1997-01-01' and '1997-07-15'

-7- Mostrar las órdenes de compra hechas en el año 1997, 
-- que pertenecen a los empleados con códigos 1 ,3 ,4 ,8
   	
   	select * from Orders where EmployeeID in (1,3,4,8) and year(OrderDate) = '1997'
   	select year(OrderDate) from Orders 
   	
-8- Mostrar las ordenes hechas en el año 1996
    
   	select * from Orders where year(OrderDate) = '1996'
   	
-9- Mostrar las ordenes hechas en el año 1997 ,del mes de abril
   	
   	select * from Orders where year(OrderDate) = '1997' and MONTH(OrderDate) = 4  
   	
-10 Mostrar las ordenes hechas el primero de todos los meses, del año 1998
   	
   	select * from Orders where day(OrderDate) = 1 and YEAR(OrderDate) = '1998'  
   	
-11 Mostrar todos los clientes que no tienen postalCode
   	
   	select * from Customers where PostalCode = ''   	
   	
-12 Mostrar todos los clientes que tienen postalCode
   	
   	select * from Customers where PostalCode != '' 
   	
-13 Mostrar el nombre del producto, 
-- el precio, el stock y el nombre de la categoría a la que pertenece.
   	
   	select 
   		p.ProductName, 
   		p.Price, 
   		p.Unit,  
  		c.CategoryName
   	from Products p
   	 Right join Categories c 
   	on c.CategoryID  = p.CategoryID
   	
-14 Mostrar el nombre del producto, el precio producto, 
-- el código del proveedor y el nombre de la compañía proveedora.
   	
   	select 
   		p.ProductName,
   		p.Price,
   		s.SupplierID,
   		s.SupplierName
   	from Products p
   	left join Suppliers s
   		on p.SupplierId = s.SupplierID
   	
-15 Mostrar el número de orden, 
-- el código del producto, el precio, la cantidad y el total pagado por producto.
   		
   select 
   		o.OrderID,
   		p.ProductID,
   		p.Price,
   		o.Quantity,
   		(p.Price * o.Quantity) as TOTAL
   from OrderDetails o
	left join Products p 
		on o.ProductID = p.ProductID 
		
-16 Mostrar el número de la orden, fecha, 
-- código del producto, precio, código del empleado y su nombre completo.
		
		select 
			o.OrderID,
			o.OrderDate,
			p.ProductID,
			p.Price ,
			e.EmployeeID,
			e.LastName 
		from Orders o 
		left join OrderDetails od 
			on o.OrderID = od.OrderID
		left join Products p 
			on p.ProductID = od.ProductID
		left join Employees e 
			on e.EmployeeID = o.EmployeeID 
			
-17 Mostrar los 10 productos con menor stock
			
		select * from Products p 
		order by REGEXP_SUBSTR(Unit, '[0-9]+') asc 
		limit 10

-18 Mostrar los 10 productos con mayor stock
		
		select * from Products p 
		order by REGEXP_SUBSTR(Unit, '[0-9]+') desc 
		limit 10
			
-19 Mostrar los 10 productos con menor precio
		
		select * from Products p 
		order by Price asc 
		limit 10

-20 Mostrar los 10 productos con mayor precio
		
		select * from Products p 
		order by Price desc 
		limit 10
		
-21 Mostrar los 10 productos más baratos
		
		select * from Products p 
		order by Price asc 
		limit 10
		
-22 Mostrar los 10 productos más caros
		
		select * from Products p 
		order by Price desc
		limit 10
		
-23 Seleccionar todos los campos de la tabla clientes,ordenar por compania
		
		select * from Customers c 
		order by CustomerName asc
		
-24 Seleccionar todos los campos de clientes,cuya city empiece con la letra B y 
-- pertenezcan a UK ,ordenar por nombre de la city
		
		select * from Customers c 
		where 	
			left(City, 1) = 'A'
			and c.Country = 'USA'
		order by City asc
		
		select * from Customers c 
			where City like 'a%'
				and c.Country = 'USA'
			order by City asc
			
-25 Seleccionar todos los campos de productos de las categorias 1,3 y 5 ,ordenar por categoria
			
		select * from Products p 
		where CategoryID 
			in (1,3,5) 
		order by CategoryID asc
			
-26 Seleccionar los productos cuyos precios unitarios estan entre 50 y 200
		
		select * from Products p 
		where Price 
			BETWEEN 50 and 200
			
-27 Visualizar el nombre
--  del cliente,fecha,precio unitario y producto de la orden
			
		select  
			c.CustomerName,
			o.OrderDate,
			p.Price,
			p.ProductID,
			p.ProductName
		from OrderDetails od 
			left join Orders o 
				on od.OrderID  = o.OrderID 
			left join Customers c 
				on c.CustomerID = o.CustomerID 
			left join Products p 
				on p.ProductID = od.ProductID 
				
-28 Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.
				 
	select 
		c.CategoryName,
		COUNT(p.ProductID) as Total
	from Products p 
		left join Categories c 
			on c.CategoryID = p.CategoryID 	
	group by c.CategoryName 
				
-29 Seleccionar los 5 productos mas vendidos
	
	select 
		p.ProductName,
		sum(od.Quantity) as total
	from OrderDetails od 
		left join Products p 
			on p.ProductID = od.ProductID
		GROUP by p.ProductName
		order by  total DESC 
		limit 5
	
-30 Seleccionar los jefes de los empleados
		
	select * from Categories
	select * from Products p
	select * from Orders o 
	select * FROM OrderDetails od 
	select * from Employees e 
	select * from Shippers s 
	select * from Suppliers s 
	select * from Customers c 
	
-31 Obtener todos los productos cuyo nombre 
-- comienzan con M y tienen un precio comprendido entre 28 y 129
	
	select * from Products p 
	where 	
		left(ProductName, 1) = 'M'
	and Price BETWEEN  28 and  129
	
-32 Obtener todos los clientes del Pais de USA,Francia y UK
	
	select * from Customers c 
		where Country in ('USA', 'Francia', 'UK')
		
-33 Obtener todos los productos descontinuados o con stock cero.
		
	select * from Products p where REGEXP_SUBSTR(Unit, '[0-9]+') = 0
	
-34 Obtener todas las ordenes hechas por el empleado King Robert
	
	select 
		*
	from Orders o 
		left join Employees e 
			on o.EmployeeID = e.EmployeeID 
	where CONCAT(e.LastName,' ', e.FirstName) = 'King Robert' 	
		
-35 Obtener todas las ordenes por el cliente cuya compania es "Que delicia"
	
	select 
		*
	from Orders o 
		left join Customers e 
			on o.CustomerID  = e.CustomerID  
	where e.CustomerName  = 'Que delicia' 	
		
-36 Obtener todas las ordenes hechas por el empleado King Robert,
-- Davolio Nancy y Fuller Andrew 
	
	select 
		*
	from Orders o 
		left join Employees e 
			on o.EmployeeID = e.EmployeeID 
	where CONCAT(e.LastName,' ', e.FirstName) in ('King Robert', 'Davolio Nancy', 'Fuller Andrew')

-37 Obtener todos los productos(codigo,nombre,precio,stock) de la orden 10257
	
	
	select 
		p.ProductID,
		p.ProductName,
		p.Price,
		p.Unit 
	from OrderDetails od 
		left join Products p 
			on p.ProductID = od.ProductID 
	where OrderID = '10257'
		
-38 Obtener todos los productos(codigo,nombre,precio,stock) de las
-- ordenes hechas desde 1997 hasta la fecha de hoy.

	select 
		p.ProductID,
		p.ProductName,
		p.Price,
		p.Unit,
		Year(o.OrderDate)
	from Products p
		left join OrderDetails od 
			on od.ProductID = p.ProductID 
		left join Orders o 
			on o.OrderID = od.OrderID 
	where YEAR(o.OrderDate) >= '1997'
	
-39 Calcular los 15 productos mas caros
	
	select * from Products p 
		order by Price desc
	limit 15
		
-40 Calcular los 5 productos mas baratos
		
	select * from Products p 
		order by Price asc
	limit 15

-41 Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.
		
	select 
		c.CategoryName,
		p.ProductName,
		p.Price,
		p.Unit
	from Products p 
	left join Categories c 
		on c.CategoryID = p.CategoryID 
		
-42 Obtener el nombre de todas las categorias y los nombres de sus productos,
-- solo los productos que su nombre no comience con la letra P
		
	select 
		c.CategoryName,
		p.ProductName,
		p.Price,
		p.Unit
	from Products p 
	left join Categories c 
		on c.CategoryID = p.CategoryID 
	where left(p.ProductName, 1) != 'P'
		
-43 Calcular el stock de productos por cada categoria.Mostrar el
--  nombre de la categoria y el stock por categoria.
	
	select 
	c.CategoryName,
	sum(REGEXP_SUBSTR(Unit, '[0-9]+')) as Stock
	from Categories c 
		left join Products p 
		on p.CategoryID = c.CategoryID 
		group by c.CategoryID;

-44 Obtener el Nombre del cliente,Nombre del Proveedor,Nombre 
-- del empleado y el nombre de los productos que estan en la orden 10794
	
	select 
		c.CustomerName,
		s.ContactName,
		e.LastName,
		p.ProductName 
	from Customers c 
		left join Orders o 
			on o.CustomerID = c.CustomerID 
		left join Employees e 
			on o.EmployeeID = e.EmployeeID 
		left join OrderDetails od 
			on od.OrderID  = o.OrderID 
		left join Products p 
			on od.ProductID = p.ProductID 
		left join Suppliers s 
			on p.SupplierID = s.SupplierID 
	where o.OrderID = '10250'
			
-45 Mostrar el numero de ordenes de cada uno de los clientes 
-- por año,luego ordenar codigo del cliente y el año.
	
	select 
		c.CustomerID,
		count(o.OrderID),
		YEAR(o.OrderDate)
	from Customers c
		left join Orders o 
			on c.CustomerID = o.CustomerID
	GROUP by c.CustomerID, o.OrderDate 
	order by c.CustomerID , o.OrderDate 

-46 Contar el numero de ordenes que se han realizado por 
-- años y meses ,luego debe ser ordenado por año y por mes.

	select 
		YEAR(o.OrderDate) as anio,
		MONTH(o.OrderDate) as mes,
		COUNT(o.OrderID) as contador 
	from Orders o 
	group by anio, mes
	order by anio, mes
	
-47 Seleccionar el nombre de la compañía del cliente,él código 
-- de la orden de compra,la fecha de la orden de compra, 
-- código del producto, cantidad pedida del producto,nombre del producto,
--  el nombre de la compañía proveedora y la ciudad del proveedor, usar Join
	
	select 
		c.CustomerName,
		o.OrderID,
		o.OrderDate,
		od.ProductID,
		od.Quantity,
		p.ProductName,
		s.SupplierName,
		s.City 
	from Customers c
		left join Orders o 
			on o.CustomerID = c.CustomerID
		left join OrderDetails od 
			on o.OrderID = od.OrderID
		left join Products p 
			on p.ProductID = od.ProductID
		left join Suppliers s 
			on p.SupplierID = s.SupplierID 
	
-48 Seleccionar el nombre de la compañía del cliente,
-- nombre del contacto, el código de la orden de compra,
-- la fecha de la orden de compra, el código del producto,
-- cantidad pedida del producto, nombre del producto y el nombre 
-- de la compañía proveedora, usas JOIN.Solamente las compañías 
-- proveedoras que comienzan con la letra de la A hasta la letra G,
-- además la cantidad pedida del producto debe estar entre 23 y 187.
			
	select 
		c.CustomerName,
		c.ContactName,
		o.OrderID,
		o.OrderDate,
		od.ProductID,
		od.Quantity,
		p.ProductName,
		s.SupplierName
	from Customers c 
	left join Orders o 
		on o.CustomerID = c.CustomerID
	left join OrderDetails od 
		on o.OrderID = od.OrderID
	left join Products p 
		on od.ProductID = p.ProductID
	left join Suppliers s 
		on s.SupplierID  = p.SupplierID
	where c.CustomerName BETWEEN 'A' and 'G' and od.Quantity BETWEEN 23 and 187
	
-- FIN
	
