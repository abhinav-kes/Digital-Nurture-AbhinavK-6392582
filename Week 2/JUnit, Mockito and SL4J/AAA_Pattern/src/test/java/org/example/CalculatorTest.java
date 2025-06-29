package org.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {
    private Calculator calculator;

    @Before
    public void setUp(){
        calculator=new Calculator();
        System.out.println("Setup complete");
    }

    @After
    public void tearDown(){
        calculator=null;
        System.out.println("Teardown complete");
    }

    @Test
    public void testAdd(){
        int r=calculator.add(4,2);
        assertEquals(6,r);
    }

    @Test
    public void testSub(){
        int r=calculator.subtract(8,3);
        assertEquals(5,r);
    }
}
