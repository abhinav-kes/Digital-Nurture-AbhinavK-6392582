package SingletonPatternExample;

public class Test {
    public static void main(String[] args) {
        Logger l1=Logger.getInstance();
        Logger l2=Logger.getInstance();
        if(l1==l2)
            System.out.println("l1 and l2 are the same instance.");
        else
            System.out.println("Different instances");

    }
}
