import java.util.*;

class Product{
    int productId;
    String productName,category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    @Override
    public String toString() {
        return "Product [productId=" + productId + ", productName=" + productName + ", category=" + category + "]";
    }   
}


public class Main{

    public static Product linear(Product[] products, String name){
        for(Product p:products){
            if(p.productName.equals(name))
                return p;
        }
        return null;
    }

    public static Product binary(Product[] products, String name){
        int n=products.length;
        int l=0,h=n-1,m;
        while(l<=h){
            m=(l+h)/2;
            String pName=products[m].productName;
            int c=pName.compareTo(name);
            if(c==0)
                return products[m];
            else if(c<0)
                l=m+1;
            else
                h=m-1;
        }
        return null;
    }
    public static void main(String[] args) {
        Product[] p={
            new Product(1,"Phone","Electronics"),
            new Product(2,"Jeans","Fashion"),
            new Product(3,"Textbook","Education"),
            new Product(4, "Television","Electronics"),
            new Product(5,"Shirt","Fashion"),
            new Product(6,"Chair","Furniture"),
        };

        System.out.println("Linear Search:");
        Product p1=linear(p,"Shirt");
        if(p1!=null)
            System.out.println("Found "+ p1.toString());
        else
            System.out.println("Product not found");

        System.out.println("Binary Search:");
        Arrays.sort(p,Comparator.comparing(pro->pro.productName));
        Product p2=binary(p, "Chair");
        if(p2!=null)
            System.out.println("Found "+p2.toString());  
        else
            System.out.println("Product not found");    
    }
}