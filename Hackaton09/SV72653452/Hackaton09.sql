
USE northwind;

 -- Select * from orders;

-- Ejercicio1
Select * from Customers where country = 'USA';

-- Ejercicio2
Select * from suppliers where city ='BERLIN'; 

-- Ejercicio3
Select * from employees where EmployeeID in (3, 5, 8); 

-- Ejercicio4
Select * from products where unit > 0 and ProductID in (1, 3, 5); 

-- Ejercicio5
Select * from products where price >= 20 and price <= 90; 

-- Ejercicio6
Select * from orders where orderdate  between '1997-01-01' and '1997-07-15';

-- Ejercicio7
Select * from orders where year(orderdate) = 1997  and EmployeeID in (1, 3, 4, 8);

-- Ejercicio8

Select * from orders where year(orderdate) = 1996;

-- Ejercicio9
-- No hay ordenes en Abril, solo hay en Enero y Febrero
Select * from orders where year(orderdate) = 1997 and month(orderdate) = 4;

-- Ejercicio10
-- No existe informacion de 1998, solo de 1996 y 1997
Select * from orders where day(orderdate) = 1 and year(orderdate) = 1998;


-- Ejercicio11
Select * from customers where postalcode is null; 

-- Ejercicio12
Select * from customers where postalcode;

-- Ejercicio13
Select 
    productname as nombre_producto,
    price as precio,
    unit as stock, 
    categoryid as nombre_categoria
from 
    products;


-- Ejercicio14
Select 
   products.productname as nombre_producto,
   products.price as precio,
   suppliers.supplierid as codigo_proveedor,
   suppliers.suppliername as nombre_de_compañia_proveedora
    
from 
    products join suppliers on products.supplierid = suppliers.supplierid;

-- Ejercicio15

Select 
   orderdetails.orderid as numero_de_orden,
   orderdetails.productid as codigo_de_producto,
   orderdetails.quantity as cantidad,
   products.price as precio_de_producto,
   orderdetails.quantity * products.price as total_pagado_por_producto
    
from 
    orderdetails join products on orderdetails.productid = products.productid;
    
-- Ejercicio16
Select 
   orders.orderid as numero_de_orden,
   orders.orderdate as fecha_de_orden,
   orderdetails.productid as codigo_de_producto,
   products.price as precio,
   orders.employeeid as codigo_del_empleado,
   employees.firstname as nombre,
   employees.lastname as apellido
    
from 
    orderdetails
join 
    orders on orderdetails.orderid = orders.orderid
join 
    products on  orderdetails.productid = products.productid
join 
    employees on  orders.employeeid = employees.employeeid;

-- Ejercicio17
Select
    productid,
    productname,
    unit
from 
    products
order by
    unit asc;



-- Ejercicio18
Select
    productid,
    productname,
    unit
from 
    products
order by
    unit desc;

-- Ejercicio19
Select
    productid,
    productname,
    price
from 
    products
order by
    price asc
    limit 10;

-- Ejercicio20
Select
    productid,
    productname,
    price
from 
    products
order by
    price desc
    limit 10;

-- Ejercicio21
Select
    productid,
    productname,
    price
from 
    products
order by
    price asc
    limit 10;

-- Ejercicio22
Select
    productid,
    productname,
    price
from 
    products
order by
    price desc
    limit 10;
    
    -- Ejercicio23
    
Select employees.*, suppliers.suppliername as nombre_compania
from employees
join suppliers on suppliers.suppliername = suppliers.suppliername
order by suppliers.suppliername;


    -- Ejercicio24
    -- No hay compañias que inicien con la letra B en UK (pero en USA si)
Select employees.*, suppliers.suppliername as nombre , suppliers.country as pais
from employees
join suppliers on suppliers.suppliername = suppliers.suppliername and  suppliers.country = suppliers.country
where suppliers.suppliername like 'B%' and suppliers.country = 'UK'
order by suppliers.suppliername, suppliers.country;


    
    -- Ejercicio25
    
Select *
from products
where categoryid in (1, 3, 5)
order by categoryid;

    
    -- Ejercicio26
    
Select *
from products
where price between 50 and 200;

    
    -- Ejercicio27
    
SELECT
    c.customername as nombre_cliente,
    c.customerid as id_cliente,
    o.orderdate as fecha,
    p.price as precio,
    p.productname as nombre_de_producto
FROM
    customers c
JOIN
    orders o on c.customerid = o.customerid
JOIN
    orderdetails od on o.orderid = od.orderid
JOIN
    products p on od.productid = p.productid;



    -- Ejercicio28
    
  Select
    c.categoryname as categoria,
    COUNT(p.productid) as numero_de_productos
from
    categories c
left join
    products p on c.categoryid = p.categoryid
group by
    c.categoryid, c.categoryname;

    
    -- Ejercicio29
    
    Select
    p.productname as nombre_de_producto,
    COUNT(od.orderdetailid) as mas_vendidos
from
    products p
join
    orderdetails od on p.productid = od.productid
group by
    p.productid, p.productname
order by
    mas_vendidos desc
limit 5;

    
    
    -- Ejercicio30
-- no hay informacion de los jefes de empleados
Select * from employees ;

-- Ejercicio31
  
  Select *
from
    products
where
    productname like 'M%'
    and price between 28 and 129;

  
-- Ejercicio32
    
Select *
from
    customers
where
	country in ('USA', 'France', 'UK');

    
-- Ejercicio33
      
Select *
from
    products
where
     unit = 0;

      
-- Ejercicio34
    
Select *
from
    orders
where
    employeeid = 7;


-- Ejercicio35
  
Select
    o.orderid as numero_orden,
    o.orderdate as fecha_orden,
    c.customername as nombre_cliente
   
from
    orders o
join
    customers c on o.customerid = c.customerid
where
    c.customername = 'Que delicia';


  
-- Ejercicio36
    
Select *
from
    orders
join 
employees on orders.employeeid = employees.employeeid
where
    employees.firstname in ('Robert', 'Nancy', 'Andrew');

    
-- Ejercicio37
      
Select
    p.productid as codigo,
    p.productname as nombre,
    p.price as precio,
    od.quantity as stock
from
    orderdetails od
join
    products p on od.productid = p.productid
where
    od.orderid = 10257;


      
-- Ejercicio38

Select
    p.productid as codigo,
    p.productname as nombre,
    p.price as precio,
    od.quantity as stock,
    year (o.orderdate) as año
from
    orderdetails od
join
    products p on od.productid = p.productid
join
    orders o on od.orderid = o.orderid
where
    o.orderdate >= '1997-01-01' and o.orderdate <= CURDATE();



-- Ejercicio39
  
Select
    productid as codigo,
    productname as nombre,
    price as precio
from
    products
order by
    price desc
limit 15;

  
-- Ejercicio40
    
Select
    productid as codigo,
    productname as nombre,
    price as precio
from
    products
order by
    price asc
limit 15;

    
-- Ejercicio41
      
Select
    c.categoryname as categoria,
    p.productname as nombre_producto,
    p.price as precio,
    p.unit as stock
from
    categories c
join
    products p on c.categoryid = p.categoryid;
     
      
-- Ejercicio42

Select
    c.categoryname as categoria,
    p.productname as nombre
from
    categories c
join
    products p on c.categoryid = p.categoryid
where
    p.productname not like 'P%';


-- Ejercicio43
  
Select
    c.categoryname as categoria,
    SUM(p.unit) as stock
from
    categories c
join
    products p on c.categoryid = p.categoryid
group by
    c.categoryname;
  
  
-- Ejercicio44
-- no exixste el numero de orden 10794, lo cual puse el numero de orden 10443
SELECT
    c.customername AS nombre_cliente,
    s.suppliername AS nombre_proveedor,
    e.firstname AS nombre_empleado,
    p.productname AS nombre_producto
FROM
    orders o
JOIN
    customers c ON o.customerid = c.customerid
JOIN
    employees e ON o.employeeid = e.employeeid
JOIN
    orderdetails od ON o.orderid = od.orderid
JOIN
    products p ON od.productid = p.productid
JOIN
    suppliers s ON p.supplierid = s.supplierid
WHERE
    o.orderid = 10443;
    
    
-- Ejercicio45
      
Select
    c.customerid as codigo_cliente,
    year(o.orderdate) as año,
    COUNT(o.orderid) as numero_ordenes
from
    orders o
join
    customers c on o.customerid = c.customerid
group by
    c.customerid, year(o.orderdate)
order by
    c.customerid, year(o.orderdate);
      
      
-- Ejercicio46

Select
    year(orderdate) as año,
    month(orderdate) as mes,
    COUNT(orderid) as numero_ordenes
from
    orders
group by
    year(orderdate), month(orderdate)
order by
    year(orderdate), month(orderdate);


-- Ejercicio47
  
  Select
    c.customername as nombre_compañia_cliente,
    o.orderid as codigo_orden_compra,
    o.orderdate as fecha_orden_compra,
    od.productid as codigo_producto,
    od.quantity as cantidad_pedida,
    p.productname as nombre_producto,
    s.suppliername as nombre_compañia_proveedora,
    s.city as ciudad_proveedor
from
    orders o
join
    customers c on o.customerid = c.customerid
join
    orderdetails od on o.orderid = od.orderid
join
    products p on od.productid = p.productid
join
    suppliers s on p.supplierid = s.supplierid;

  
-- Ejercicio48

Select
    c.customername as nombre_compania_cliente,
    c.contactname as nombre_contacto,
    o.orderid as codigo_orden_compra,
    o.orderdate as fecha_orden_compra,
    od.productid as codigo_producto,
    od.quantity as cantidad_pedida,
    p.productname as nombre_producto,
    s.suppliername as nombre_compania_proveedora
from
    orders o
join
    customers c on o.customerid = c.customerid
join
    orderdetails od on o.orderid = od.orderid
join
    products p on od.productid = p.productid
join
    suppliers s ON p.supplierid = s.supplierid
where
    s.suppliername between 'A' and 'G' and
    od.quantity between 23 and 187;
