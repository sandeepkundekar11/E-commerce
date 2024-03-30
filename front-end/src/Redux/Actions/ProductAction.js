import { LocalHost } from "../../constants";

export const ADDTOCARD = "addtocard";
export const ADDTO_CARD_LOADING = "addtocard_loading";
export const ADDTO_CARD_ERROR = "addtocraderror";

const addtoCard = (data) => {
  return {
    type: ADDTOCARD,
    payload: data,
  };
};

const addtoCardRequest = () => {
  return {
    type: ADDTO_CARD_LOADING,
  };
};
const addtoCardError = (err) => {
  return {
    type: ADDTO_CARD_ERROR,
    payload: err,
  };
};

export const PostApiCardToCard = (userId, product) => {
  return async (dispacth) => {
    try {
      dispacth(addtoCardRequest());
      let responce = await fetch(
        `http://${LocalHost}:8000/ecommerce/addCard/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );

      let data = await responce.json();
      if (data) {
        dispacth(addtoCard(data));
      }
    } catch (error) {
      dispacth(addtoCardError(error));
    }
  };
};
