import React from "react";

export default function Categories() {
  return (
    <div className="sticky-top">
      <div className="border p-2 categories">
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <h3>
            <strong>Categories</strong>
          </h3>
          <input type="checkbox" value="All" /> All
          <br />
          <input type="checkbox" value="Fruits/Veggies" /> Fruits/Veggies
          <br />
          <input type="checkbox" value="Dairy" /> Dairy
          <br />
          <input type="checkbox" value="Fish/Meat" /> Fish/Meat
          <br />
          <input type="checkbox" value="Bakery" /> Bakery
          <br />
          <input type="checkbox" value="Wine" /> Wine
          <br />
          <input type="checkbox" value="Spices" /> Spices
          <br />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h3>
            <strong>Rating</strong>
          </h3>
          <input type="checkbox" value="4" /> 4 stars and up
          <br />
          <input type="checkbox" value="3" /> 3 stars and up
          <br />
          <input type="checkbox" value="2" /> 2 stars and up
          <br />
          <input type="checkbox" value="1" /> 1 stars and up
          <br />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h3>
            <strong>Brand</strong>
          </h3>
          <input type="checkbox" value="All" /> All
          <br />
          <input type="checkbox" value="GFresh grocers" /> GFresh grocers
          <br />
          <input type="checkbox" value="GFresh winery" /> GFresh winery
          <br />
          <input type="checkbox" value="Gfresh bakery" /> Gfresh bakery
          <br />
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12">
          <h3>
            <strong>Price</strong>
          </h3>
          <input type="checkbox" value="1" /> &nbsp;$1 -$17
          <br />
          <input type="checkbox" value="2" /> &nbsp;$18 -$34
          <br />
          <input type="checkbox" value="3" /> &nbsp;$35 -$51
          <br />
          <input type="checkbox" value="4" /> &nbsp;$52 -$68
          <br />
          <input type="checkbox" value="5" /> &nbsp;$69 and up
          <br />
        </div>
      </div>
    </div>
  );
}
