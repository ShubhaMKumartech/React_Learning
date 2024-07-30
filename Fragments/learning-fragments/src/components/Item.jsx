import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton}) => {
  const handleBuyButtonClicked = (event) => {
   console.log(event);
    console.log(`${foodItem} being bought`);
  };

  return (
    <li className={`${styles["kg-item"]} list-group-item ${bought && "active"} `}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleBuyButton(event)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;