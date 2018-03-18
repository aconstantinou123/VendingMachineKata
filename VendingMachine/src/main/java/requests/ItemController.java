package requests;
import com.google.gson.Gson;
import items.Item;
import items.ItemService;
import utils.CorsFilter;

import static spark.Spark.*;
import static utils.JsonUtil.json;

public class ItemController{

    public ItemController(final ItemService itemService){
        CorsFilter.apply();

        get("/items", (req, res) -> itemService.getItems(), json());

        get("/items/:id", (req, res) -> {
            String id = req.params(":id");
            Item item = itemService.getItem(id);
            if(item != null){
                return new Gson().toJson(item);
            }
            res.status(400);
            return "Item retrieved";
        });

        post("/items", "application/json", (request, response) -> {
            System.out.println(response);
            response.status(201);
            Item item = new Gson().fromJson(request.body(), Item.class);
            itemService.addItem(item);
            return "Item created";
        });

        put("/items/:id", (req, res) -> {
            String id = req.params(":id");
            Item item = new Gson().fromJson(req.body(), Item.class);
            System.out.println(item.getId());
            itemService.updateItem(id, item);
            res.status(201);
            return "Item updated";
        });

    }
}
