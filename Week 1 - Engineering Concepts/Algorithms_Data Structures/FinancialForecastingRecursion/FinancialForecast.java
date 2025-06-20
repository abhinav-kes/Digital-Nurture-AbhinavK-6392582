public class FinancialForecast{
    public static double futureValue(double p,double r,int n){
        if(n==0)
            return p;
        return (1+r)*futureValue(p, r, n-1);
    }

    public static void main(String[] args) {
        double present=1000,rate=0.25;
        int n=5;
        double f=futureValue(present, rate, n);
        System.out.println("Future value: "+f);
    }
}