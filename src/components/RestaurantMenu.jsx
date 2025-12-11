import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
    console.log("fetch menu api called in useEffect");
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7527421&lng=75.88371599999999&restaurantId=84070&catalog_qa=undefined&submitAction=ENTER"
    );
    let result = await data.json();

    console.log(result);
  };

  return (
    <div className="menu">
      <h1>Name of the restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>burger</li>
        <li>Cholea</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
