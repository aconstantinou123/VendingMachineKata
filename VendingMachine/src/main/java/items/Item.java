package items;

public class Item {

    private String id;
    private String name;
    private int quantity;
    private double price;
    private String selector;

    public Item(String id, String name, int quantity, double price, String selector){
        this.id = id;
        this.quantity = quantity;
        this.price = price;
        this.selector = selector;
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getSelector() {
        return selector;
    }

    public void setSelector(String selector) {
        this.selector = selector;
    }
}
