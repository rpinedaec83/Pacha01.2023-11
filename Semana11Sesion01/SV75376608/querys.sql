CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `vw_ordenesporcliente` AS
    SELECT 
        `o`.`OrderID` AS `Numero de Orden`,
        `o`.`OrderDate` AS `Fecha de la Orden`,
        `c`.`CustomerName` AS `Nombre del Cliente`,
        `c`.`ContactName` AS `Nombre del Contacto`
    FROM
        (`orders` `o`
        JOIN `customers` `c` ON ((`o`.`CustomerID` = `c`.`CustomerID`)))
    WHERE
        (`o`.`OrderDate` BETWEEN '1997-01-01' AND '1997-07-15')



CREATE DEFINER=`root`@`localhost` FUNCTION `ConvertirFecha`(fecha datetime) RETURNS varchar(50) CHARSET utf8mb4
    DETERMINISTIC
BEGIN
	declare nuevaFecha varchar(50) default '';
    select DATE_FORMAT( fecha,'%d/%m/%Y') into nuevafecha;
RETURN nuevaFecha ;
END

DELIMITER $$
CREATE FUNCTION `PromedioValor`() RETURNS decimal(18,2) 
    DETERMINISTIC
BEGIN
	declare promedio decimal(18,2);
    select avg(price) into promedio from Products;
RETURN promedio ;
END$$


DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllProducts`()
BEGIN
	SELECT ProductId, ProductName, Price FROM products;
END$$
DELIMITER ;

call GetAllProducts();
call GetOneProducts(22);


DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetOneProducts`(IN id INT)
BEGIN
	SELECT *  FROM products where ProductID = id;
END$$
DELIMITER ;

DELIMITER $$
CREATE  PROCEDURE `GetOrdersByEmploye`(IN id INT)
BEGIN
	select 
o.OrderID,
o.OrderDate,
E.FirstName,
E.LastName
 from Orders o inner join Employees E on o.EmployeeID = E.EmployeeID
 where E.EmployeeID = id;
END$$

