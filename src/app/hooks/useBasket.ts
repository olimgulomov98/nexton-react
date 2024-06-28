import { useState } from "react";
import { CardItem } from "../../libs/types/search";

const useBasket = () => {
  const cardJson: string | null = localStorage.getItem("cardData");
  const currentJson = cardJson ? JSON.parse(cardJson) : [];
  const [cardItems, setCardItems] = useState<CardItem[]>(currentJson);

  /** HANDLERS **/

  const onAdd = (input: CardItem) => {
    const exist: any = cardItems.find(
      (item: CardItem) => item._id === input._id
    );
    if (exist) {
      const cardUpdate = cardItems.map((item: CardItem) =>
        item._id === input._id
          ? { ...exist, quantity: exist.quantity + 1 }
          : item
      );
      setCardItems(cardUpdate);
    } else {
      const cardUpdate = [...cardItems, { ...input }];
      setCardItems(cardUpdate);
      localStorage.setItem("cardData", JSON.stringify(cardUpdate));
    }
  };

  const onRemove = (input: CardItem) => {
    const exist: any = cardItems.find(
      (item: CardItem) => item._id === input._id
    );
    if (exist.quantity === 1) {
      const cardUpdate = cardItems.filter(
        (item: CardItem) => item._id !== input._id
      );
      setCardItems(cardUpdate);
      localStorage.setItem("cardData", JSON.stringify(cardUpdate));
    } else {
      const cardUpdate = cardItems.map((item: CardItem) =>
        item._id === input._id
          ? { ...exist, quantity: exist.quantity - 1 }
          : item
      );
      setCardItems(cardUpdate);
      localStorage.setItem("cardData", JSON.stringify(cardUpdate));
    }
  };

  const onDelete = (input: CardItem) => {
    const cardUpdate = cardItems.filter(
      (item: CardItem) => item._id !== input._id
    );
    setCardItems(cardUpdate);
    localStorage.setItem("cardData", JSON.stringify(cardUpdate));
  };

  const onDeleteAll = () => {
    setCardItems([]);
    localStorage.removeItem("cardData");
  };

  return {
    cardItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
  };
};

export default useBasket;
