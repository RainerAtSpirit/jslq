
////////////////////////////////////////////////////////////////////////////////////////
////// Autogenerated by JaySvcUtil.exe http://JayData.org for more info        /////////
//////                             oData v2                                    /////////
////////////////////////////////////////////////////////////////////////////////////////

      (function(global, $data, undefined) {


      

  function registerEdmTypes() {
  
    function Edm_Boolean() { };
    $data.Container.registerType('Edm.Boolean', Edm_Boolean);
    $data.Container.mapType(Edm_Boolean, $data.Boolean);
    
    function Edm_Binary() { };
    $data.Container.registerType('Edm.Binary', Edm_Binary);
    $data.Container.mapType(Edm_Binary, $data.Blob);
    
    function Edm_DateTime() { };
    $data.Container.registerType('Edm.DateTime', Edm_DateTime);
    $data.Container.mapType(Edm_DateTime, $data.Date);
    
    function Edm_DateTimeOffset() { };
    $data.Container.registerType('Edm.DateTimeOffset', Edm_DateTimeOffset);
    $data.Container.mapType(Edm_DateTimeOffset, $data.Integer);
    
    function Edm_Time() { };
    $data.Container.registerType('Edm.Time', Edm_Time);
    $data.Container.mapType(Edm_Time, $data.Integer);
    
    function Edm_Decimal() { };
    $data.Container.registerType('Edm.Decimal', Edm_Decimal);
    $data.Container.mapType(Edm_Decimal, $data.Number);
    
    function Edm_Single() { };
    $data.Container.registerType('Edm.Single', Edm_Single);
    $data.Container.mapType(Edm_Single, $data.Number);
    
    function Edm_Double() { };
    $data.Container.registerType('Edm.Double', Edm_Double);
    $data.Container.mapType(Edm_Double, $data.Number);
    
    function Edm_Guid() { };
    $data.Container.registerType('Edm.Guid', Edm_Guid);
    $data.Container.mapType(Edm_Guid, $data.String);
    
    function Edm_Int16() { };
    $data.Container.registerType('Edm.Int16', Edm_Int16);
    $data.Container.mapType(Edm_Int16, $data.Integer);
    
    function Edm_Int32() { };
    $data.Container.registerType('Edm.Int32', Edm_Int32);
    $data.Container.mapType(Edm_Int32, $data.Integer);
    
    function Edm_Int64() { };
    $data.Container.registerType('Edm.Int64', Edm_Int64);
    $data.Container.mapType(Edm_Int64, $data.Integer);
    
    function Edm_Byte() { };
    $data.Container.registerType('Edm.Byte', Edm_Byte);
    $data.Container.mapType(Edm_Byte, $data.Integer);
    
    function Edm_String() { };
    $data.Container.registerType('Edm.String', Edm_String);
    $data.Container.mapType(Edm_String, $data.String);
    
  };
  registerEdmTypes();
  $data.Entity.extend('NorthwindModel.Category', {
    'CategoryID': { key:true,type:'Edm.Int32',nullable:false,computed:true },
    'CategoryName': { type:'Edm.String',nullable:false,required:true,maxLength:15 },
    'Description': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'Picture': { type:'Edm.Binary',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'Products': { type:'Array',elementType:'NorthwindModel.Product',inverseProperty:'Category' }
  });
  $data.Entity.extend('NorthwindModel.CustomerDemographic', {
    'CustomerTypeID': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:10 },
    'CustomerDesc': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'Customers': { type:'Array',elementType:'NorthwindModel.Customer',inverseProperty:'CustomerDemographics' }
  });
  $data.Entity.extend('NorthwindModel.Customer', {
    'CustomerID': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:5 },
    'CompanyName': { type:'Edm.String',nullable:false,required:true,maxLength:40 },
    'ContactName': { type:'Edm.String',nullable:true,maxLength:30 },
    'ContactTitle': { type:'Edm.String',nullable:true,maxLength:30 },
    'Address': { type:'Edm.String',nullable:true,maxLength:60 },
    'City': { type:'Edm.String',nullable:true,maxLength:15 },
    'Region': { type:'Edm.String',nullable:true,maxLength:15 },
    'PostalCode': { type:'Edm.String',nullable:true,maxLength:10 },
    'Country': { type:'Edm.String',nullable:true,maxLength:15 },
    'Phone': { type:'Edm.String',nullable:true,maxLength:24 },
    'Fax': { type:'Edm.String',nullable:true,maxLength:24 },
    'Orders': { type:'Array',elementType:'NorthwindModel.Order',inverseProperty:'Customer' },
    'CustomerDemographics': { type:'Array',elementType:'NorthwindModel.CustomerDemographic',inverseProperty:'Customers' }
  });
  $data.Entity.extend('NorthwindModel.Employee', {
    'EmployeeID': { key:true,type:'Edm.Int32',nullable:false,computed:true },
    'LastName': { type:'Edm.String',nullable:false,required:true,maxLength:20 },
    'FirstName': { type:'Edm.String',nullable:false,required:true,maxLength:10 },
    'Title': { type:'Edm.String',nullable:true,maxLength:30 },
    'TitleOfCourtesy': { type:'Edm.String',nullable:true,maxLength:25 },
    'BirthDate': { type:'Edm.DateTime',nullable:true },
    'HireDate': { type:'Edm.DateTime',nullable:true },
    'Address': { type:'Edm.String',nullable:true,maxLength:60 },
    'City': { type:'Edm.String',nullable:true,maxLength:15 },
    'Region': { type:'Edm.String',nullable:true,maxLength:15 },
    'PostalCode': { type:'Edm.String',nullable:true,maxLength:10 },
    'Country': { type:'Edm.String',nullable:true,maxLength:15 },
    'HomePhone': { type:'Edm.String',nullable:true,maxLength:24 },
    'Extension': { type:'Edm.String',nullable:true,maxLength:4 },
    'Photo': { type:'Edm.Binary',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'Notes': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'ReportsTo': { type:'Edm.Int32',nullable:true },
    'PhotoPath': { type:'Edm.String',nullable:true,maxLength:255 },
    'Employees1': { type:'Array',elementType:'NorthwindModel.Employee',inverseProperty:'Employee1' },
    'Employee1': { type:'NorthwindModel.Employee',inverseProperty:'Employees1' },
    'Orders': { type:'Array',elementType:'NorthwindModel.Order',inverseProperty:'Employee' },
    'Territories': { type:'Array',elementType:'NorthwindModel.Territory',inverseProperty:'Employees' }
  });
  $data.Entity.extend('NorthwindModel.Order_Detail', {
    'OrderID': { key:true,type:'Edm.Int32',nullable:false,required:true },
    'ProductID': { key:true,type:'Edm.Int32',nullable:false,required:true },
    'UnitPrice': { type:'Edm.Decimal',nullable:false,required:true },
    'Quantity': { type:'Edm.Int16',nullable:false,required:true },
    'Discount': { type:'Edm.Single',nullable:false,required:true },
    'Order': { type:'NorthwindModel.Order',required:true,inverseProperty:'Order_Details' },
    'Product': { type:'NorthwindModel.Product',required:true,inverseProperty:'Order_Details' }
  });
  $data.Entity.extend('NorthwindModel.Order', {
    'OrderID': { key:true,type:'Edm.Int32',nullable:false,computed:true },
    'CustomerID': { type:'Edm.String',nullable:true,maxLength:5 },
    'EmployeeID': { type:'Edm.Int32',nullable:true },
    'OrderDate': { type:'Edm.DateTime',nullable:true },
    'RequiredDate': { type:'Edm.DateTime',nullable:true },
    'ShippedDate': { type:'Edm.DateTime',nullable:true },
    'ShipVia': { type:'Edm.Int32',nullable:true },
    'Freight': { type:'Edm.Decimal',nullable:true },
    'ShipName': { type:'Edm.String',nullable:true,maxLength:40 },
    'ShipAddress': { type:'Edm.String',nullable:true,maxLength:60 },
    'ShipCity': { type:'Edm.String',nullable:true,maxLength:15 },
    'ShipRegion': { type:'Edm.String',nullable:true,maxLength:15 },
    'ShipPostalCode': { type:'Edm.String',nullable:true,maxLength:10 },
    'ShipCountry': { type:'Edm.String',nullable:true,maxLength:15 },
    'Customer': { type:'NorthwindModel.Customer',inverseProperty:'Orders' },
    'Employee': { type:'NorthwindModel.Employee',inverseProperty:'Orders' },
    'Order_Details': { type:'Array',elementType:'NorthwindModel.Order_Detail',inverseProperty:'Order' },
    'Shipper': { type:'NorthwindModel.Shipper',inverseProperty:'Orders' }
  });
  $data.Entity.extend('NorthwindModel.Product', {
    'ProductID': { key:true,type:'Edm.Int32',nullable:false,computed:true },
    'ProductName': { type:'Edm.String',nullable:false,required:true,maxLength:40 },
    'SupplierID': { type:'Edm.Int32',nullable:true },
    'CategoryID': { type:'Edm.Int32',nullable:true },
    'QuantityPerUnit': { type:'Edm.String',nullable:true,maxLength:20 },
    'UnitPrice': { type:'Edm.Decimal',nullable:true },
    'UnitsInStock': { type:'Edm.Int16',nullable:true },
    'UnitsOnOrder': { type:'Edm.Int16',nullable:true },
    'ReorderLevel': { type:'Edm.Int16',nullable:true },
    'Discontinued': { type:'Edm.Boolean',nullable:false,required:true },
    'Category': { type:'NorthwindModel.Category',inverseProperty:'Products' },
    'Order_Details': { type:'Array',elementType:'NorthwindModel.Order_Detail',inverseProperty:'Product' },
    'Supplier': { type:'NorthwindModel.Supplier',inverseProperty:'Products' }
  });
  $data.Entity.extend('NorthwindModel.Region', {
    'RegionID': { key:true,type:'Edm.Int32',nullable:false,required:true },
    'RegionDescription': { type:'Edm.String',nullable:false,required:true,maxLength:50 },
    'Territories': { type:'Array',elementType:'NorthwindModel.Territory',inverseProperty:'Region' }
  });
  $data.Entity.extend('NorthwindModel.Shipper', {
    'ShipperID': { key:true,type:'Edm.Int32',nullable:false,computed:true },
    'CompanyName': { type:'Edm.String',nullable:false,required:true,maxLength:40 },
    'Phone': { type:'Edm.String',nullable:true,maxLength:24 },
    'Orders': { type:'Array',elementType:'NorthwindModel.Order',inverseProperty:'Shipper' }
  });
  $data.Entity.extend('NorthwindModel.Supplier', {
    'SupplierID': { key:true,type:'Edm.Int32',nullable:false,computed:true },
    'CompanyName': { type:'Edm.String',nullable:false,required:true,maxLength:40 },
    'ContactName': { type:'Edm.String',nullable:true,maxLength:30 },
    'ContactTitle': { type:'Edm.String',nullable:true,maxLength:30 },
    'Address': { type:'Edm.String',nullable:true,maxLength:60 },
    'City': { type:'Edm.String',nullable:true,maxLength:15 },
    'Region': { type:'Edm.String',nullable:true,maxLength:15 },
    'PostalCode': { type:'Edm.String',nullable:true,maxLength:10 },
    'Country': { type:'Edm.String',nullable:true,maxLength:15 },
    'Phone': { type:'Edm.String',nullable:true,maxLength:24 },
    'Fax': { type:'Edm.String',nullable:true,maxLength:24 },
    'HomePage': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'Products': { type:'Array',elementType:'NorthwindModel.Product',inverseProperty:'Supplier' }
  });
  $data.Entity.extend('NorthwindModel.Territory', {
    'TerritoryID': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:20 },
    'TerritoryDescription': { type:'Edm.String',nullable:false,required:true,maxLength:50 },
    'RegionID': { type:'Edm.Int32',nullable:false,required:true },
    'Region': { type:'NorthwindModel.Region',required:true,inverseProperty:'Territories' },
    'Employees': { type:'Array',elementType:'NorthwindModel.Employee',inverseProperty:'Territories' }
  });
  $data.Entity.extend('NorthwindModel.Alphabetical_list_of_product', {
    'ProductID': { key:true,type:'Edm.Int32',nullable:false,required:true },
    'ProductName': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:40 },
    'SupplierID': { type:'Edm.Int32',nullable:true },
    'CategoryID': { type:'Edm.Int32',nullable:true },
    'QuantityPerUnit': { type:'Edm.String',nullable:true,maxLength:20 },
    'UnitPrice': { type:'Edm.Decimal',nullable:true },
    'UnitsInStock': { type:'Edm.Int16',nullable:true },
    'UnitsOnOrder': { type:'Edm.Int16',nullable:true },
    'ReorderLevel': { type:'Edm.Int16',nullable:true },
    'Discontinued': { key:true,type:'Edm.Boolean',nullable:false,required:true },
    'CategoryName': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:15 }
  });
  $data.Entity.extend('NorthwindModel.Category_Sales_for_1997', {
    'CategoryName': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:15 },
    'CategorySales': { type:'Edm.Decimal',nullable:true }
  });
  $data.Entity.extend('NorthwindModel.Current_Product_List', {
    'ProductID': { key:true,type:'Edm.Int32',nullable:false,computed:true },
    'ProductName': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:40 }
  });
  $data.Entity.extend('NorthwindModel.Customer_and_Suppliers_by_City', {
    'City': { type:'Edm.String',nullable:true,maxLength:15 },
    'CompanyName': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:40 },
    'ContactName': { type:'Edm.String',nullable:true,maxLength:30 },
    'Relationship': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:9 }
  });
  $data.Entity.extend('NorthwindModel.Invoice', {
    'ShipName': { type:'Edm.String',nullable:true,maxLength:40 },
    'ShipAddress': { type:'Edm.String',nullable:true,maxLength:60 },
    'ShipCity': { type:'Edm.String',nullable:true,maxLength:15 },
    'ShipRegion': { type:'Edm.String',nullable:true,maxLength:15 },
    'ShipPostalCode': { type:'Edm.String',nullable:true,maxLength:10 },
    'ShipCountry': { type:'Edm.String',nullable:true,maxLength:15 },
    'CustomerID': { type:'Edm.String',nullable:true,maxLength:5 },
    'CustomerName': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:40 },
    'Address': { type:'Edm.String',nullable:true,maxLength:60 },
    'City': { type:'Edm.String',nullable:true,maxLength:15 },
    'Region': { type:'Edm.String',nullable:true,maxLength:15 },
    'PostalCode': { type:'Edm.String',nullable:true,maxLength:10 },
    'Country': { type:'Edm.String',nullable:true,maxLength:15 },
    'Salesperson': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:31 },
    'OrderID': { key:true,type:'Edm.Int32',nullable:false,required:true },
    'OrderDate': { type:'Edm.DateTime',nullable:true },
    'RequiredDate': { type:'Edm.DateTime',nullable:true },
    'ShippedDate': { type:'Edm.DateTime',nullable:true },
    'ShipperName': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:40 },
    'ProductID': { key:true,type:'Edm.Int32',nullable:false,required:true },
    'ProductName': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:40 },
    'UnitPrice': { key:true,type:'Edm.Decimal',nullable:false,required:true },
    'Quantity': { key:true,type:'Edm.Int16',nullable:false,required:true },
    'Discount': { key:true,type:'Edm.Single',nullable:false,required:true },
    'ExtendedPrice': { type:'Edm.Decimal',nullable:true },
    'Freight': { type:'Edm.Decimal',nullable:true }
  });
  $data.Entity.extend('NorthwindModel.Order_Details_Extended', {
    'OrderID': { key:true,type:'Edm.Int32',nullable:false,required:true },
    'ProductID': { key:true,type:'Edm.Int32',nullable:false,required:true },
    'ProductName': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:40 },
    'UnitPrice': { key:true,type:'Edm.Decimal',nullable:false,required:true },
    'Quantity': { key:true,type:'Edm.Int16',nullable:false,required:true },
    'Discount': { key:true,type:'Edm.Single',nullable:false,required:true },
    'ExtendedPrice': { type:'Edm.Decimal',nullable:true }
  });
  $data.Entity.extend('NorthwindModel.Order_Subtotal', {
    'OrderID': { key:true,type:'Edm.Int32',nullable:false,required:true },
    'Subtotal': { type:'Edm.Decimal',nullable:true }
  });
  $data.Entity.extend('NorthwindModel.Orders_Qry', {
    'OrderID': { key:true,type:'Edm.Int32',nullable:false,required:true },
    'CustomerID': { type:'Edm.String',nullable:true,maxLength:5 },
    'EmployeeID': { type:'Edm.Int32',nullable:true },
    'OrderDate': { type:'Edm.DateTime',nullable:true },
    'RequiredDate': { type:'Edm.DateTime',nullable:true },
    'ShippedDate': { type:'Edm.DateTime',nullable:true },
    'ShipVia': { type:'Edm.Int32',nullable:true },
    'Freight': { type:'Edm.Decimal',nullable:true },
    'ShipName': { type:'Edm.String',nullable:true,maxLength:40 },
    'ShipAddress': { type:'Edm.String',nullable:true,maxLength:60 },
    'ShipCity': { type:'Edm.String',nullable:true,maxLength:15 },
    'ShipRegion': { type:'Edm.String',nullable:true,maxLength:15 },
    'ShipPostalCode': { type:'Edm.String',nullable:true,maxLength:10 },
    'ShipCountry': { type:'Edm.String',nullable:true,maxLength:15 },
    'CompanyName': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:40 },
    'Address': { type:'Edm.String',nullable:true,maxLength:60 },
    'City': { type:'Edm.String',nullable:true,maxLength:15 },
    'Region': { type:'Edm.String',nullable:true,maxLength:15 },
    'PostalCode': { type:'Edm.String',nullable:true,maxLength:10 },
    'Country': { type:'Edm.String',nullable:true,maxLength:15 }
  });
  $data.Entity.extend('NorthwindModel.Product_Sales_for_1997', {
    'CategoryName': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:15 },
    'ProductName': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:40 },
    'ProductSales': { type:'Edm.Decimal',nullable:true }
  });
  $data.Entity.extend('NorthwindModel.Products_Above_Average_Price', {
    'ProductName': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:40 },
    'UnitPrice': { type:'Edm.Decimal',nullable:true }
  });
  $data.Entity.extend('NorthwindModel.Products_by_Category', {
    'CategoryName': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:15 },
    'ProductName': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:40 },
    'QuantityPerUnit': { type:'Edm.String',nullable:true,maxLength:20 },
    'UnitsInStock': { type:'Edm.Int16',nullable:true },
    'Discontinued': { key:true,type:'Edm.Boolean',nullable:false,required:true }
  });
  $data.Entity.extend('NorthwindModel.Sales_by_Category', {
    'CategoryID': { key:true,type:'Edm.Int32',nullable:false,required:true },
    'CategoryName': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:15 },
    'ProductName': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:40 },
    'ProductSales': { type:'Edm.Decimal',nullable:true }
  });
  $data.Entity.extend('NorthwindModel.Sales_Totals_by_Amount', {
    'SaleAmount': { type:'Edm.Decimal',nullable:true },
    'OrderID': { key:true,type:'Edm.Int32',nullable:false,required:true },
    'CompanyName': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:40 },
    'ShippedDate': { type:'Edm.DateTime',nullable:true }
  });
  $data.Entity.extend('NorthwindModel.Summary_of_Sales_by_Quarter', {
    'ShippedDate': { type:'Edm.DateTime',nullable:true },
    'OrderID': { key:true,type:'Edm.Int32',nullable:false,required:true },
    'Subtotal': { type:'Edm.Decimal',nullable:true }
  });
  $data.Entity.extend('NorthwindModel.Summary_of_Sales_by_Year', {
    'ShippedDate': { type:'Edm.DateTime',nullable:true },
    'OrderID': { key:true,type:'Edm.Int32',nullable:false,required:true },
    'Subtotal': { type:'Edm.Decimal',nullable:true }
  });
  $data.EntityContext.extend('JayDataExamples.NorthwindEntities', {
    Categories: { type: $data.EntitySet, elementType: NorthwindModel.Category },
      CustomerDemographics: { type: $data.EntitySet, elementType: NorthwindModel.CustomerDemographic },
      Customers: { type: $data.EntitySet, elementType: NorthwindModel.Customer },
      Employees: { type: $data.EntitySet, elementType: NorthwindModel.Employee },
      Order_Details: { type: $data.EntitySet, elementType: NorthwindModel.Order_Detail },
      Orders: { type: $data.EntitySet, elementType: NorthwindModel.Order },
      Products: { type: $data.EntitySet, elementType: NorthwindModel.Product },
      Regions: { type: $data.EntitySet, elementType: NorthwindModel.Region },
      Shippers: { type: $data.EntitySet, elementType: NorthwindModel.Shipper },
      Suppliers: { type: $data.EntitySet, elementType: NorthwindModel.Supplier },
      Territories: { type: $data.EntitySet, elementType: NorthwindModel.Territory },
      Alphabetical_list_of_products: { type: $data.EntitySet, elementType: NorthwindModel.Alphabetical_list_of_product },
      Category_Sales_for_1997: { type: $data.EntitySet, elementType: NorthwindModel.Category_Sales_for_1997 },
      Current_Product_Lists: { type: $data.EntitySet, elementType: NorthwindModel.Current_Product_List },
      Customer_and_Suppliers_by_Cities: { type: $data.EntitySet, elementType: NorthwindModel.Customer_and_Suppliers_by_City },
      Invoices: { type: $data.EntitySet, elementType: NorthwindModel.Invoice },
      Order_Details_Extendeds: { type: $data.EntitySet, elementType: NorthwindModel.Order_Details_Extended },
      Order_Subtotals: { type: $data.EntitySet, elementType: NorthwindModel.Order_Subtotal },
      Orders_Qries: { type: $data.EntitySet, elementType: NorthwindModel.Orders_Qry },
      Product_Sales_for_1997: { type: $data.EntitySet, elementType: NorthwindModel.Product_Sales_for_1997 },
      Products_Above_Average_Prices: { type: $data.EntitySet, elementType: NorthwindModel.Products_Above_Average_Price },
      Products_by_Categories: { type: $data.EntitySet, elementType: NorthwindModel.Products_by_Category },
      Sales_by_Categories: { type: $data.EntitySet, elementType: NorthwindModel.Sales_by_Category },
      Sales_Totals_by_Amounts: { type: $data.EntitySet, elementType: NorthwindModel.Sales_Totals_by_Amount },
      Summary_of_Sales_by_Quarters: { type: $data.EntitySet, elementType: NorthwindModel.Summary_of_Sales_by_Quarter },
      Summary_of_Sales_by_Years: { type: $data.EntitySet, elementType: NorthwindModel.Summary_of_Sales_by_Year }
  });
  
JayDataExamples.context = new JayDataExamples.NorthwindEntities( { name:'oData', oDataServiceHost: 'http://services.odata.org/Northwind/Northwind.svc' });

      
  })(window, $data);
      
    