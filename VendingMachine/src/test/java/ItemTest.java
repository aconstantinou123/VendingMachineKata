import items.*;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ItemTest {

    Item marsBar;
    Item haribo;
    Item irnBru;

    @Before
    public void before(){
        marsBar = new Item("1" ,"Mars Bar",5, 0.65, "A");
        haribo = new Item("2", "Haribo",10, 1, "B");
        irnBru = new Item("3", "IrnBru",15, 1.5, "C");
    }

    @Test
    public void canGetQuantity(){
        assertEquals(5, marsBar.getQuantity());
    }

    @Test
    public void canSetQuantity(){
        haribo.setQuantity(15);
        assertEquals(15, haribo.getQuantity());
    }

    @Test
    public void canGetSelector(){
        assertEquals("C", irnBru.getSelector());
    }

    @Test
    public void canSetSelector(){
        irnBru.setSelector("B");
        assertEquals("B", irnBru.getSelector());
    }

    @Test
    public void canGetPrice(){
        assertEquals(0.65, marsBar.getPrice(), 0.001);
    }

    @Test
    public void canSetPrice(){
        marsBar.setPrice(12.50);
        assertEquals(12.5, marsBar.getPrice(), 0.001);
    }

}

