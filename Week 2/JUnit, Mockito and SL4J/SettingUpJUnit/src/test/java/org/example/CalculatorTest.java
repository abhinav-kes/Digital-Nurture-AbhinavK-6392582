package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {
    @Test
    public void testAdd(){
        Calculator c=new Calculator();
        int r=c.add(5,3);
        assertEquals(8,r);
    }
}
