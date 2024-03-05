use northwind;
-- Primera pregunta  : Seleccionar los clientes que viven en el país de "usa"
Select * from Customers where country = 'USA';

-- Segunda pregunta : Seleccionar los proveedores que viven en la ciudad de "BERLIN"
Select * from Suppliers where  City = 'Berlin';

-- Tercera pregunta : Seleccionar los empleados con código 3,5 y 8
Select * from employees where employeeId in (3,5,8);

-- Cuarta pregunta : Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
Select * from Products where unit > 0 and  supplierId in (1,3,5);

-- Quinta pregunta : Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
Select * from Products where price >= 20 and price <= 90;

-- Sexta pregunta : Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
select * from orders where OrderDate between '1997/01/01' and  '1997/07/15';

-- Septima pregunta : Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8
select * from orders where year(orderdate) = 1997 and employeeId in (1,3,4 ,8);


-- Octava pregunta : Mostrar las ordenes hechas en el año 1996
select * from orders where year(orderdate) = 1996;

-- Novena pregunta : Mostrar las ordenes hechas en el año 1997 ,del mes de abril
select * from orders where year(orderdate) = 1997 and month(orderdate) = 4;

-- Decima pregunta : Mostrar las ordenes hechas el primero de todos los meses, del año 1998
select * from orders where year(orderdate) = 1998 and month(orderdate) >= 1 and month(orderdate) <= 12;

-- Pregunta 11
-- select * from customers where

-- Pregunta 13 : Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.
select p.productName , p.price , p.unit , c.categoryName from products p
inner join categories c
on p.categoryId = c.categoryId;

-- Pregunta 14 : Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.
select p.productName , p.price  , s.supplierId , s.supplierName from 
products p inner join suppliers s 
on p.supplierId = s.supplierId;

-- Pregunta 15 : Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.
select od.orderId ,  p.productId , p.price , p.unit , od.quantity, (p.price * od.quantity) as 'total pagado producto' from products p 
inner join orderDetails od 
on p.productId = od.productId;

-- Pregunta 16 : Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.
select o.orderId , o.orderDate ,  p.productId , p.price , e.employeeId , concat(e.firstName , ' ' , e.lastName ) as 'fullName' from 
orders o inner join employees e
on o.employeeId = e.employeeId
inner join  orderDetails od
on od.orderId = o.orderId
inner join products p
on p.productId = od.productId;

-- Pregunta 17
-- Pregunta 18

-- Pregunta 19 : Mostrar los 10 productos con menor precio
select * from products order by price asc limit 10;

-- Pregunta 20 : Mostrar los 10 productos con mayor precio
select * from products order by price desc limit 10;

-- Pregunta 21 : Mostrar los 10 productos más baratos
select * from products order by price asc limit 10;

-- Pregunta 22 : Mostrar los 10 productos más caros
select * from products order by price desc limit 10;

-- Pregunta 23  : Seleccionar todos los campos de la tabla clientes,ordenar por compania
select * from customers
order by customerName ;

-- pregunta 24 : Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania
select * from customers
where Country = 'UK' and CustomerName like 'B%'
order by customerName  ;

-- pregunta 25 : Seleccionar todos los campos de productos de las categorias 1,3 y 5 ,ordenar por categoria
select p.productId , p.productName , p.price , p.unit , c.categoryId from products p 
inner join categories c
on p.categoryId = c.categoryId
where c.categoryId  in (1,3,5)
order by categoryName ;


-- Pregunta 26 : Seleccionar los productos cuyos precios unitarios estan entre 50 y 200
select * from products 
where price between 50 and 200;

-- Pregunta 27 : Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden
select c.customerName , c.customerId , o.orderDate , p.price , p.productName from 
orders o inner join orderDetails od
on o.orderId = od.orderId
inner join products p
on p.productId = od.productId 
inner join customers c 
on o.customerId = c.customerId;

-- Pregunta 28 : Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.

select c.categoryName, count(p.productId) as 'Cantidad de Productos'   from categories c 
inner join products p 
on c.categoryId  = p.categoryId 
group by c.categoryName;

-- Pregunta 29 : Seleccionar los 5 productos mas vendidos
select p.productName , sum(od.quantity) as 'Cantidad de productos vendidos' from products p
inner join orderDetails od
on p.productId = od.productId
group by p.productName
order by sum(od.quantity) desc limit 5 ;

-- Pregunta 30 : 

-- Pregunta 31: Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129
select * from products 
where productName like 'M%' and price between 28 and 129
order by price desc;

-- Pregunta 32 : Obtener todos los clientes del Pais de USA,Francia y UK
select * from customers
where country in ('USA','France','UK');

-- Pregunta 33
-- Pregunta 34 :  Obtener todas las ordenes hechas por el empleado King Robert
select o.orderId , o.orderDate , concat(e.firstName ,  ' ' , e.lastName) as 'Employee Full name' from 
orders o inner join employees e
on o.employeeId = e.employeeId 
where concat(e.firstName , ' ' , e.lastName) = 'Robert King';

-- Pregunta 35 : Obtener todas las ordenes por el cliente cuya compania es "Que delicia"
select o.orderId , o.orderDate , c.customerId , c.customerName from orders o
inner join customers c
on o.customerId = c.customerId
where c.customerName = 'Que delicia';

-- Pregunta 36 : Obtener todas las ordenes hechas por el empleado King Robert,Davolio Nancy y Fuller Andrew
select o.orderId , o.orderDate , concat(e.firstName ,  ' ' , e.lastName) as 'Employee Full name' from 
orders o inner join employees e
on o.employeeId = e.employeeId 
where concat(e.firstName , ' ' , e.lastName) in ('Robert King','Andrew Fuller','Nancy Davolio');


-- Pregunta 37 :  Obtener todos los productos(codigo,nombre,precio,stock) de la orden 10257
select od.orderID , p.productId , p.productName , p.price , p.unit from products p 
inner join orderDetails od
on od.productId = p.productId
where od.orderId = '10257';

-- Pregunta 38 : Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy.
select o.orderId , o.orderDate , p.productId , p.productName , p.price , p.unit from products p 
inner join orderDetails od
on od.productId = p.productId
inner join orders o
on o.orderId = od.orderId
where o.orderDate > '1997/01/01' and o.orderDate < now() ;


-- Pregunta 39 : Calcular los 15 productos mas caros
select * from products order by price desc limit 15;

-- Pregunta 40 : Calcular los 5 productos mas baratos
select * from products order by price asc limit 5;

-- Pregunta 41 : Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.
select  c.categoryName , p.productName , p.price , p.unit  from products p
inner join categories c
on p.categoryId = c.categoryId;

-- Pregunta 42 : Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra P
select  c.categoryName , p.productName  from products p
inner join categories c
on p.categoryId = c.categoryId
where not  p.productName like 'P%' ;

-- Pregunta 43 : Calcular el stock de productos por cada categoria.Mostrar el nombre de la categoria y el stock por categoria.

-- Pregunta 44 : Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794
select c.customerId , s.supplierName , concat(e.firstName , ' ' , e.lastName) as 'Employee' , p.productName from 
suppliers s inner join products p
on s.supplierId = p.supplierId
inner join orderDetails od 
on od.productId = p.productId
inner join orders o
on o.orderId = od.orderId
inner join employees e
on e.employeeId = o.employeeId
inner join customers c
on c.customerId = o.customerId;
-- where o.orderId = '10794'; : NO hay ordenes con ese ID

-- Pregunta 45 : Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año.
select  c.customerId  ,o.orderDate, count(o.orderId) as 'Nro. Ordenes'  from customers c
left join orders o
on o.customerId = c.customerId
group by c.customerId ,o.orderDate
order by c.customerId , o.OrderDate ;
-- Pregunta 46 : Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes.



-- Pregunta 47 : Seleccionar el nombre de la compañía del cliente,él código de la orden de compra,la fecha de la orden de compra,
-- código del producto, cantidad pedida del producto,nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor ,usar Join


-- Pregunta 48 : Seleccionar el nombre de la compañía del cliente, nombre del contacto, el código de la orden de compra, 
-- la fecha de la orden de compra, el código del producto,cantidad pedida del producto, nombre del producto y el nombre de la compañía proveedora, 
-- usas JOIN.Solamente las compañías proveedoras que comienzan con la letra de la A hasta la letra G,además la cantidad pedida del producto debe estar entre 23 y 187.

