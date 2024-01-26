-- 1.	Seleccionar los clientes que viven en el país de "usa" 

        Select * from Customers where country = 'USA'
 
-- 2.	Seleccionar los proveedores que viven en la ciudad de "BERLIN" 

        Select * from suppliers where city ='BERLIN'
 
-- 3.	Seleccionar los empleados con código 3,5 y 8 

        Select * from employees where EmployeeID in (3, 5, 8)
 
-- 4.	Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5 

        Select * from products where unit > 0 and EmployeeID in (1, 3, 5)
 
-- 5.	Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90 

        Select * from products where price >= 20 and price <= 90
 
-- 6.	Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997

        Select * from orders where orderdate between '1997-01-01' and '1997-07-15'
 
-- 7.	Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8 
 
        Select * from orders where year(orderdate) = 1997  and employee_code in (1, 3, 4, 8)
 
-- 8.	Mostrar las ordenes hechas en el año 1996 

        Select * from orders where year(orderdate) = 1996
 
-- 9.	Mostrar las ordenes hechas en el año 1997 ,del mes de abril 

        Select * from orders where year(orderdate) = 1997 and month(orderdate) = 4
 
-- 10.	Mostrar las ordenes hechas el primero de todos los meses, del año 1998 
 
        Select * from orders where year(orderdate) = 1998 and day(orderdate) = 1

-- 11.	Mostrar todos los clientes que no tienen fax 

        Select * from customers where postalcode is null
 
-- 12.	Mostrar todos los clientes que tienen fax 

        Select * from customers where postalcode not null
 
-- 13.	Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece. 

        Select products.productName as products.nombre_producto, products.price as precio, products.unit as stock, categories.categoryName as nombre_categoria 
        from products join categories on categories.categoryID  = products.categoryID
 
-- 14.	Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora. 
 
        Select products.productName as nombre_producto, products.price as precio, suppliers.supplierid as codigo_proveedor,suppliers.supplierName as nombre_de_compañia_proveedora
            from products join suppliers on products.supplierid = suppliers.supplierid

-- 15.	Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto. 
 
        Select 
                o.orderID as numero_orden,
                p.productID as codigo_producto,
                p.price as precio,
                o.quantity cantidad,
                (p.price * o.quantity) as total
        from orderDetails o
        join products p 
        on o.productID = p.productID 
 
-- 16.	Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo. 
 
        Select 
			o.orderID as numero_orden,
			o.orderDate as fecha,
			p.productID as codigo_producto,
			p.price as precio,
			e.employeeID as codigo_empleado,
			e.lastName as apellido
		from orders o 
        join employees e on e.employeeID = o.employeeID 
		join orderDetails od on o.orderID = od.orderID
		join products p on p.productID = od.productID
		
    
-- 17.	Mostrar los 10 productos con menor stock 

        Select * from products order by unit asc limit 10
 
-- 18.	Mostrar los 10 productos con mayor stock 
 
        Select * from products order by unit desc limit 10
 
-- 19.	Mostrar los 10 productos con menor precio 
 
        Select * from products order by price asc limit 10
 
-- 20.	Mostrar los 10 productos con mayor precio 
 
        Select * from products order by price desc limit 10

-- 21.	Mostrar los 10 productos más baratos 

        Select * from products order by price asc limit 10
 
-- 22.	Mostrar los 10 productos más caros 
 
        Select * from products order by price desc limit 10

-- 23.	Seleccionar todos los campos de la tabla clientes,ordenar por compania 

        Select * from customers order by  customerName asc
 
-- 24.	Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania 

        Select employees.*
        from employees
        join suppliers on suppliers.supplierName = suppliers.supplierName and  suppliers.country = suppliers.country
        where suppliers.supplierName like 'B%' and suppliers.country = 'UK' order by suppliers.supplierName
        
-- 25.	Seleccionar todos los campos de productos de las categorias 1,3 y 5 ,ordenar por categoria 
 
        Select * from products where categoryid in (1, 3, 5) order by categoryid
 
-- 26.	Seleccionar los productos cuyos precios unitarios estan entre 50 y 200 

        Select * from products where price between 50 and 200
 
-- 27.	Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden 

        Select
            c.customername as nombre_cliente,
            c.customerid as id,
            o.orderdate as fecha,
            p.price as precio_unitario,
            p.productName as nombre_producto
        from customers c
        join orders o on c.customerid = o.customerid
        join orderdetails od on o.orderid = od.orderid
        join products p on od.productid = p.productid
 
-- 28.	Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria. 
 
        Select
            c.categoryName as nombre_categoria,
            COUNT(p.productid) as numero_productos
        from categories c
        join products p on c.categoryid = p.categoryid
        group by c.categoryid, c.categoryName
 
-- 29.	Seleccionar los 5 productos mas vendidos 
 
        Select
            p.productName as nombre_producto,
            COUNT(od.orderdetailid) as vendidos
        from products p
        join orderdetails od on p.productid = od.productid
        group by p.productid, p.productName order by COUNT(od.orderdetailid) desc limit 5

 
-- 30.	Seleccionar los jefes de los empleados 

        Select * from employees
 
-- 31.	Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129 
 
        Select * from products where productName like 'M%' and price between 28 and 129
 
-- 32.	Obtener todos los clientes del  Pais de USA,Francia y UK 
 
        Select * from customers where country in ('USA', 'France', 'UK')

-- 33.	Obtener todos los productos descontinuados o con stock cero.

        Select * from products where unit = 0
 
-- 34.	Obtener todas las ordenes hechas por el empleado King Robert 
 
        Select * from orders o 
        join employees e on o.employeeID = e.employeeID 
        where CONCAT(e.lastName,' ', e.firstName) = 'King Robert' 
 
-- 35.	Obtener todas las ordenes por el cliente cuya compania es "Que delicia" 
 
        Select * from Orders o 
		join customers e on o.customerID  = e.customerID  
	    where e.customerName  = 'Que delicia' 
 
-- 36.	Obtener todas las ordenes hechas por el empleado King Robert,Davolio Nancy y Fuller Andrew 
 
        Select * from orders o
        join  employees e on o.employeeID = e.employeeID
        where CONCAT(e.lastName,' ', e.firstName) in ('King Robert', 'Davolio Nancy', 'Fuller Andrew');

-- 37.	Obtener todos los productos(codigo,nombre,precio,stock) de la orden 10257 
 
        Select
            p.productID as codigo,
            p.productName as nombre,
            p.price as precio,
            od.quantity as stock
        from orderDetails od
        join products p on od.productID = p.productID
        where od.orderID = 10257;
 
-- 38.	Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy. 

        Select 
            p.productID,
            p.productName,
            p.price,
            p.unit,
            Year(o.orderDate)
        from products p
        join orderDetails od on od.productID = p.productID 
        join orders o on o.orderID = od.orderID 
        where YEAR(o.orderDate) >= '1997'
 
-- 39.	Calcular los 15 productos mas caros 

        Select * from products order by price desc limit 15
 	 
-- 40.	Calcular los 5 productos mas baratos 
 
        Select * from products order by Price asc limit 15
 
-- 41.	Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock. 
 
        Select 
            c.categoryName as nombre_categoria,
            p.productName as producto,
            p.price as precio,
            p.unit as stock
        from products p 
        left join categories c on c.categoryID = p.categoryID 
 
-- 42.	Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra P

        Select
            c.categoryName as nombre_categoria,
            p.productName as nombre_producto
        from categories c
        join products p on c.categoryID = p.categoryID
        where p.productName not like 'P%';
 
-- 43.	Calcular el stock de productos por cada categoria.Mostrar el nombre de la categoria y el stock por categoria. 

        Select
            c.categoryName as nombre_categoria,
            SUM(p.unit) as stock
        from categories c
        join products p on c.categoryID = p.categoryID
        group by c.categoryName;
 
-- 44.	Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794 

        Select
            c.customerName as nombre_cliente,
            s.supplierName as nombre_proveedor,
            e.firstName as nombre_empleado,
            p.productName as nombre_producto
        from orders o
        join customers c on o.customerID = c.customerID
        join employees e on o.employeeID = e.employeeID
        join orderDetails od on o.orderID = od.orderID
        join products p on od.productid = p.productID
        join suppliers s on p.supplierID = s.supplierID
        where o.orderID = 10443;
 
-- 45.	Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año. 

        Select
            year(o.orderDate) as año,
            c.customerID as codigo_cliente,
            COUNT(o.orderID) as numero_ordenes
        from orders o
        join customers c on o.customerID = c.customerID
        group by c.customerID, year(o.orderDate)
        order by c.customerID, year(o.orderDate);
 
-- 46.	Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes. 
 
        Select
            COUNT(orderID) as numero_ordenes,
            year(orderDate) as año,
            month(orderDate) as mes
        from orders
        group by year(orderDate), month(orderDate)
        order by year(orderDate), month(orderDate);
 
-- 47.	Seleccionar el nombre de la compañía del cliente,él código de la orden de compra,la fecha de la orden de compra, código del producto,
-- cantidad pedida del producto,nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor ,usar Join 
 
        Select
            c.customerName as nombre_compañia_cliente,
            o.orderID as codigo_orden_compra,
            o.orderDate as fecha_orden_compra,
            od.productID as codigo_producto,
            od.quantity as cantidad_pedida,
            p.productName as nombre_producto,
            s.supplierName as nombre_compañia_proveedora,
            s.city as ciudad_proveedor
        from  orders o
        join customers c on o.customerID = c.customerID
        join orderDetails od on o.orderID = od.orderID
        join products p on od.productID = p.productID
        join suppliers s on p.supplierID = s.supplierID;

-- 48. Seleccionar el nombre de la compañía del cliente, nombre del contacto, el código de la orden de compra, la fecha de la orden de compra, 
--el código del producto,cantidad pedida del producto, nombre del producto y el nombre de la compañía proveedora, usas JOIN
--Solamente las compañías proveedoras que comienzan con la letra de la A hasta la letra G,además la cantidad pedida del producto debe estar entre 23 y 187. 
 

        

