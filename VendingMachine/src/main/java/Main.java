import items.*;
import requests.ItemController;

import static spark.Spark.options;

public class Main {
    public static void main(String[] args) {

        options("/*", (request, response) ->{

            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
            if(accessControlRequestMethod != null){
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
            }

            return "OK";
        });

        Item marsBar = new Item("1", "Mars Bar",5, 0.65, "A");
        Item haribo = new Item("2", "Haribo",10, 1, "B");
        Item irnBru = new Item("3", "Irn Bru",15, 1.5, "C");
        ItemService itemService = new ItemService();
        itemService.addItem(marsBar);
        itemService.addItem(haribo);
        itemService.addItem(irnBru);

        new ItemController(itemService);
    }
}
