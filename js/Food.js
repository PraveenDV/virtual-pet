class Food{
    constructor(){

        this.image=loadImage("images/Milk.png");
    }

    getFood(){
        var foodStock=database.ref("Food");
        foodStock.on("value", function(data){
            foodStock=data.val();
        })
    }

    updateFood(){
        
    }
}