package FactoryMethodPatternExample;

public abstract class DocumentFactory {
    public abstract Document createDocument();    
}

class WordDocumentFactory extends DocumentFactory{

    @Override
    public Document createDocument(){
        return new WordDocument();
    } 
}

class ExcelDocumentFactory extends DocumentFactory{

    @Override
    public Document createDocument(){
        return new ExcelDocument();
    }
}

class PdfDocumentFactory extends DocumentFactory{

    @Override
    public Document createDocument(){
        return new PdfDocument();
    }
}


