// Define an interface
interface Printable {
    print(): void;
  }
  
  // Define an abstract class that implements the interface
  abstract class AbstractDocument implements Printable {
    abstract print(): void; // The method must be implemented by subclasses
  
    // Private parameters
    private creationDate: Date;
    private author: string;
  
    // Protected parameter
    protected title: string;
  
    constructor(title: string, author: string, creationDate: Date) {
      this.title = title;
      this.author = author;
      this.creationDate = creationDate;
    }
  
    getTitle(): string {
      return this.title;
    }
  
    // Methods to access private parameters, if needed
    protected getAuthor(): string {
      return this.author;
    }
  
    protected getCreationDate(): Date {
      return this.creationDate;
    }
  }
  
  // Define a base class that extends the abstract class
  class DocumentReport extends AbstractDocument {
    
  
    constructor(public title: string, author: string, creationDate: Date,private content: string) {
      super(title, author, creationDate); // Call the constructor of the abstract class
    
    }
  
    // Implement the abstract method from the abstract class
    print(): void {
      console.log(`Title: ${this.getTitle()}`);
      console.log(`Author: ${this.getAuthor()}`);
      console.log(`Creation Date: ${this.getCreationDate().toDateString()}`);
      console.log(`Content: ${this.content}`);
    }
  }
  
  // Usage example
  const report = new DocumentReport("Annual Report", "John Doe", new Date(), "This is the content of the annual report.");
  report.print();
  
  