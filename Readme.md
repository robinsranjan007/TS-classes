# TYPE SCRIPT CLASSES

## Public,Protected,private,class extended,and concept of super()

this file extensively covers the concepts of classes,

cheat sheet

1- Public classes can be initialized inside the classes and outside the classes by creating instance of this class or inside the extended classes or child classes
2- protected classes can be initialized inside the classes and inside the extended classes but cannot be initialized or change the value by creating the instance of the class
3- it can only be declared and initialized inside the classes;

4- super()-> invokes the constructor of the parent class or base class

5- in private method you cannot even access it outside the class
6- but in readonly you can access the member but cannot modify it

 7-If one of the properties in the Person class is marked as readonly, it means that it can only be assigned a value once either in the declaration or in the constructor of the class. 

 ## shocking revelation if you have interface and you want to set these values as private or protected in the class which implements these interface then it shows error as you cannot declare them private or protected 
 ## the trick here is define an INTERFACE extend this INTERFACE now add all those property into these extended INTERFACES in which you want to declare them as private or protected inside the constructor of the see example learn interface line number 16
 