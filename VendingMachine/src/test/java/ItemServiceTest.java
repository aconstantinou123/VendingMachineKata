import items.Item;
import items.ItemService;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ItemServiceTest {

    ItemService itemService;
    Item marsBar;
    Item haribo;
    Item irnBru;

    @Before
    public void before(){
        itemService = new ItemService();
        marsBar = new Item("1" ,"Mars Bar",5, 0.65, "A");
        haribo = new Item("2", "Haribo",10, 1, "B");
        irnBru = new Item("3", "IrnBru",15, 1.5, "C");
        itemService.addItem(marsBar);
        itemService.addItem(haribo);
        itemService.addItem(irnBru);
    }

    @Test
    public void canGetItem(){
        assertEquals(marsBar, itemService.getItem("1"));
    }

    @Test
    public void canUpdateItem(){
        marsBar.setQuantity(4);
        itemService.updateItem("1", marsBar );
        assertEquals(4, marsBar.getQuantity());
    }


}
