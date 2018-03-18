package items;

import java.util.ArrayList;
import java.util.Iterator;

public class ItemService {

    private ArrayList<Item> items;

   public ItemService(){

       this.items = new ArrayList<>();
   }

    public ArrayList<Item> getItems() {
        return items;
    }

    public void addItem(Item item){
       items.add(item);
    }

    public Item getItem(String id){
       int intId = Integer.parseInt(id);
       return items.get(intId- 1);
    }

    public void updateItem(String id, Item item){
        int intId = Integer.parseInt(id);
        items.get(intId - 1).setQuantity(item.getQuantity());
        items.get(intId - 1).setName(item.getName());
        items.get(intId - 1).setPrice(item.getPrice());
        items.get(intId - 1).setSelector(item.getSelector());
    }

}
