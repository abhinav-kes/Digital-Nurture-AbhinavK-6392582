package FactoryMethodPatternExample;

public interface Document {
    void open();    
}

class WordDocument implements Document {

    @Override
    public void open(){
        System.out.println("Opening Word Document");
    }  
}

class ExcelDocument implements Document{

    @Override
    public void open(){
        System.out.println("Opening Excel Document");
    }    
}

class PdfDocument implements Document{

    @Override
    public void open(){
        System.out.println("Opening PDF Document");
    }
}



