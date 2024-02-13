-- 1.	Seleccionar los clientes que viven en el país de "usa" 
SELECT * FROM Customers WHERE Country = 'USA';

-- 2.	Seleccionar los proveedores que viven en la ciudad de "BERLIN" 
SELECT * FROM Suppliers WHERE City = 'BERLIN';

-- 3.	Seleccionar los empleados con código 3,5 y 8 
SELECT * FROM Employees WHERE EmployeeID IN (3, 5, 8);

-- 4.	Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5 
SELECT * FROM Products WHERE unit > 0 AND SupplierID IN (1, 3, 5);

-- 5.	Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90 
SELECT * FROM Products WHERE Price >= 20 AND Price <= 90;

-- 6.	Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997 
SELECT * FROM Orders WHERE OrderDate BETWEEN '1997-01-01' AND '1997-07-15';

-- 7.	Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8 
SELECT * FROM Orders WHERE YEAR(OrderDate) = 1997 AND EmployeeID IN (1, 3, 4, 8);

-- 8.   Mostrar las ordenes hechas en el año 1996 
SELECT * FROM Orders WHERE YEAR(OrderDate) = 1996;

-- 9.	Mostrar las ordenes hechas en el año 1997 ,del mes de abril 
SELECT * FROM Orders WHERE YEAR(OrderDate) = 1997 AND MONTH(OrderDate) = 4;

-- 10.	Mostrar las ordenes hechas el primero de todos los meses, del año 1998 
SELECT * FROM Orders WHERE YEAR(OrderDate) = 1998 AND DAY(OrderDate) = 1;

-- 11.	Mostrar todos los clientes que no tienen fax 
SELECT * FROM Customers WHERE postalcode IS NULL

-- 12.	Mostrar todos los clientes que tienen fax 
SELECT * FROM Customers WHERE postalcode IS NOT NULL

-- 13.	Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece. 
SELECT 
    p.ProductName, 
    p.Price AS Precio, 
    p.Unit AS Stock, 
    c.CategoryName
FROM 
    Products p
INNER JOIN Categories c ON p.CategoryID = c.CategoryID;

-- 14.	Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora. 
SELECT 
    p.ProductName, 
    p.Price AS PrecioProducto, 
    p.SupplierID AS CodigoProveedor, 
    s.SupplierName AS NombreCompañiaProveedora
FROM 
    Products p
INNER JOIN Suppliers s ON p.SupplierID = s.SupplierID;

-- 15.	Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto. 
SELECT 
    o.OrderID AS NumeroOrden, 
    p.ProductID AS CodigoProducto, 
    p.Price AS Precio, 
    o.Quantity AS Cantidad, 
    (p.Price * o.Quantity) AS TotalPagado
FROM 
    OrderDetails o
INNER JOIN Products p ON o.ProductID = p.ProductID;

-- 16.	Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.
SELECT 
    o.OrderID AS NumeroOrden,
    o.OrderDate AS Fecha,
    p.ProductID AS CodigoProducto,
    p.Price AS Precio,
    e.EmployeeID AS CodigoEmpleado,
    CONCAT(e.FirstName, ' ', e.LastName) AS NombreCompletoEmpleado
FROM 
    Orders o
INNER JOIN OrderDetails od ON o.OrderID = od.OrderID
INNER JOIN Products p ON od.ProductID = p.ProductID
INNER JOIN Employees e ON o.EmployeeID = e.EmployeeID;

-- 17.	Mostrar los 10 productos con menor stock 
SELECT * FROM products ORDER BY unit ASC LIMIT 10

-- 18.	Mostrar los 10 productos con mayor stock 
SELECT * FROM products ORDER BY unit DESC LIMIT 10;

-- 19.	Mostrar los 10 productos con menor precio 
SELECT * FROM products ORDER BY Price ASC LIMIT 10;

-- 20.	Mostrar los 10 productos con mayor precio 
SELECT * FROM products ORDER BY Price DESC LIMIT 10;

-- 21.	Mostrar los 10 productos más baratos 
SELECT * FROM products ORDER BY Price ASC LIMIT 10;

-- 22.	Mostrar los 10 productos más caros 
SELECT * FROM products ORDER BY Price DESC LIMIT 10;


-- 1.	Seleccionar todos los campos de la tabla clientes, ordenar por compañía 
SELECT * FROM customers ORDER BY customerName ASC;

-- 2.	Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania 
SELECT * FROM customers WHERE customerName LIKE 'B%' AND Country = 'UK' ORDER BY customerName ASC;

-- 3.	Seleccionar todos los campos de productos de las categorias 1,3 y 5, ordenar por categoria 
SELECT * FROM products WHERE CategoryID IN (1, 3, 5) ORDER BY CategoryID ASC;

-- 4.	Seleccionar los productos cuyos precios unitarios estan entre 50 y 200 
SELECT * FROM products WHERE Price BETWEEN 50 AND 200 ORDER BY Price ASC;

-- 5.	Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden 
SELECT 
    c.CustomerID AS IDCompañia,
    c.CustomerName AS NombreCompañia,
    o.OrderDate AS Fecha,
    p.Price AS PrecioUnitario,
    p.ProductName AS Producto
FROM 
    Orders o
    INNER JOIN Customers c ON o.CustomerID = c.CustomerID
    INNER JOIN OrderDetails od ON o.OrderID = od.OrderID
    INNER JOIN Products p ON od.ProductID = p.ProductID
ORDER BY 
    o.OrderDate ASC;

-- 6.	Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria. 
SELECT 
    c.CategoryName AS NombreCategoria, 
    COUNT(p.ProductID) AS NumeroProductos
FROM 
    Categories c
    INNER JOIN Products p ON c.CategoryID = p.CategoryID
GROUP BY 
    c.CategoryName
ORDER BY 
    NumeroProductos DESC;

-- 7.	Seleccionar los 5 productos mas vendidos 
SELECT 
    p.ProductName AS NombreProducto, 
    SUM(od.Quantity) AS TotalVendido
FROM 
    OrderDetails od
    INNER JOIN Products p ON od.ProductID = p.ProductID
GROUP BY 
    od.ProductID
ORDER BY 
    TotalVendido DESC
LIMIT 5;

-- 8.	Seleccionar los jefes de los empleados
SELECT * FROM employees

-- 9.	Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129 
SELECT * FROM Products WHERE ProductName LIKE 'M%' AND Price BETWEEN 28 AND 129;

-- 10.	Obtener todos los clientes del  Pais de USA,Francia y UK 
SELECT * FROM Customers WHERE Country IN ('USA', 'France', 'UK');

-- 11.	Obtener todos los productos descontinuados o con stock cero.
SELECT * FROM products WHERE unit = 0

-- 12.	Obtener todas las ordenes hechas por el empleado King Robert 
SELECT o.OrderID, o.OrderDate, o.CustomerID
FROM Orders o
INNER JOIN Employees e ON o.EmployeeID = e.EmployeeID
WHERE e.FirstName = 'Robert' AND e.LastName = 'King';

-- 13.	Obtener todas las ordenes por el cliente cuya compania es "Que delicia" 
SELECT o.OrderID, o.OrderDate, o.CustomerID
FROM Orders o
INNER JOIN Customers c ON o.CustomerID = c.CustomerID
WHERE c.CustomerName = 'Que Delicia';

-- 14.	Obtener todas las ordenes hechas por el empleado King Robert,Davolio Nancy y Fuller Andrew 
SELECT o.OrderID, o.OrderDate, e.FirstName, e.LastName
FROM Orders o
INNER JOIN Employees e ON o.EmployeeID = e.EmployeeID
WHERE (e.FirstName = 'Robert' AND e.LastName = 'King')
   OR (e.FirstName = 'Nancy' AND e.LastName = 'Davolio')
   OR (e.FirstName = 'Andrew' AND e.LastName = 'Fuller');

-- 15.	Obtener todos los productos(codigo,nombre,precio,stock) de la orden 10257 
SELECT 
    p.ProductID AS Codigo, 
    p.ProductName AS Nombre, 
    p.Price AS Precio, 
    od.Quantity AS Stock
FROM 
    OrderDetails od
    INNER JOIN Products p ON od.ProductID = p.ProductID
WHERE 
    od.OrderID = 10257;

-- 16.	Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy. 
SELECT 
    p.ProductID AS Codigo, 
    p.ProductName AS Nombre, 
    p.Price AS Precio, 
    p.Unit AS Stock
FROM 
    Orders o
    INNER JOIN OrderDetails od ON o.OrderID = od.OrderID
    INNER JOIN Products p ON od.ProductID = p.ProductID
WHERE 
    o.OrderDate >= '1997-01-01' AND o.OrderDate <= CURDATE()
ORDER BY 
    o.OrderDate;

-- 17.	Calcular los 15 productos mas caros 
SELECT ProductID AS Codigo, ProductName AS Nombre, Price AS Precio
FROM Products
ORDER BY Price DESC
LIMIT 15;

-- 18.	Calcular los 5 productos mas baratos 
SELECT ProductID AS Codigo, ProductName AS Nombre, Price AS Precio
FROM Products
ORDER BY Price ASC
LIMIT 5;

-- 19.	Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock. 
SELECT 
    c.CategoryName AS NombreCategoria, 
    p.ProductName AS NombreProducto, 
    p.Price AS Precio, 
    p.Unit AS Stock
FROM 
    Categories c
    INNER JOIN Products p ON c.CategoryID = p.CategoryID
ORDER BY 
    c.CategoryName, p.Price DESC;

-- 20.	Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra P 
SELECT 
    c.CategoryName AS NombreCategoria, 
    p.ProductName AS NombreProducto,
    p.Price AS Precio,
    p.Unit AS Stock
FROM 
    Categories c
    INNER JOIN Products p ON c.CategoryID = p.CategoryID
WHERE 
    p.ProductName NOT LIKE 'P%'
ORDER BY 
    c.CategoryName, p.ProductName;

-- 21.	Calcular el stock de productos por cada categoria.Mostrar el nombre de la categoria y el stock por categoria. 
SELECT 
    c.CategoryName AS NombreCategoria, 
    SUM(p.Unit) AS StockTotalPorCategoria
FROM 
    Categories c
    INNER JOIN Products p ON c.CategoryID = p.CategoryID
GROUP BY 
    c.CategoryName
ORDER BY 
    c.CategoryName;

-- 22.	Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794 
SELECT 
    c.CustomerName AS NombreCliente,
    s.SupplierName AS NombreProveedor,
    e.FirstName AS NombreEmpleado,
    p.ProductName AS NombreProducto
FROM 
    Orders o
    INNER JOIN Customers c ON o.CustomerID = c.CustomerID
    INNER JOIN Employees e ON o.EmployeeID = e.EmployeeID
    INNER JOIN OrderDetails od ON o.OrderID = od.OrderID
    INNER JOIN Products p ON od.ProductID = p.ProductID
    INNER JOIN Suppliers s ON p.SupplierID = s.SupplierID
WHERE 
    o.OrderID = 10442;

-- 23.	Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año. 
SELECT 
    CustomerID AS CodigoCliente,
    YEAR(OrderDate) AS Año,
    COUNT(OrderID) AS NumeroDeOrdenes
FROM 
    Orders
GROUP BY 
    CustomerID, YEAR(OrderDate)
ORDER BY 
    CustomerID, YEAR(OrderDate);

-- 24.	Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes. 
SELECT 
    YEAR(OrderDate) AS Año,
    MONTH(OrderDate) AS Mes,
    COUNT(OrderID) AS NumeroDeOrdenes
FROM 
    Orders
GROUP BY 
    YEAR(OrderDate), MONTH(OrderDate)
ORDER BY 
    Año, Mes;









