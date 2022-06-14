import styles from "./products.module.css";
import { AiOutlineShop } from "react-icons/ai";

export default function Products() {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productsHeader}>
        <AiOutlineShop size={40} />
        <h2>All Available Products</h2>
      </div>
      <div class={styles.tableWrapper}>
        <table class={styles.flTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Delivered</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product Name 1</td>
              <td>Product Name 1</td>
              <td>Product Name 1</td>
              <td>Product Name 1</td>
              <td>Product Name 1</td>
            </tr>
            <tr>
              <td>Product Name 2</td>
              <td>Product Name 2</td>
              <td>Product Name 2</td>
              <td>Product Name 2</td>
              <td>Product Name 2</td>
            </tr>
            <tr>
              <td>Product Name 3</td>
              <td>Product Name 3</td>
              <td>Product Name 3</td>
              <td>Product Name 3</td>
              <td>Product Name 3</td>
            </tr>
            <tr>
              <td>Product Name 4</td>
              <td>Product Name 4</td>
              <td>Product Name 4</td>
              <td>Product Name 4</td>
              <td>Product Name 4</td>
            </tr>
            <tr>
              <td>Product Name 5</td>
              <td>Product Name 5</td>
              <td>Product Name 5</td>
              <td>Product Name 5</td>
              <td>Product Name 5</td>
            </tr>
            <tr>
              <td>Product Name 6</td>
              <td>Product Name 6</td>
              <td>Product Name 6</td>
              <td>Product Name 6</td>
              <td>Product Name 6</td>
            </tr>
            <tr>
              <td>Product Name 7</td>
              <td>Product Name 7</td>
              <td>Product Name 7</td>
              <td>Product Name 7</td>
              <td>Product Name 7</td>
            </tr>
            <tr>
              <td>Product Name 8</td>
              <td>Product Name 8</td>
              <td>Product Name 8</td>
              <td>Product Name 8</td>
              <td>Product Name 8</td>
            </tr>
            <tr>
              <td>Product Name 9</td>
              <td>Product Name 9</td>
              <td>Product Name 9</td>
              <td>Product Name 9</td>
              <td>Product Name 9</td>
            </tr>
            <tr>
              <td>Product Name 10</td>
              <td>Product Name 10</td>
              <td>Product Name 10</td>
              <td>Product Name 10</td>
              <td>Product Name 10</td>
            </tr>
            <tr>
              <td>Product Name 11</td>
              <td>Product Name 11</td>
              <td>Product Name 11</td>
              <td>Product Name 11</td>
              <td>Product Name 11</td>
            </tr>
            <tr>
              <td>Product Name 12</td>
              <td>Product Name 12</td>
              <td>Product Name 12</td>
              <td>Product Name 12</td>
              <td>Product Name 12</td>
            </tr>
            <tr>
              <td>Product Name 13</td>
              <td>Product Name 13</td>
              <td>Product Name 13</td>
              <td>Product Name 13</td>
              <td>Product Name 13</td>
            </tr>
            <tr>
              <td>Product Name 14</td>
              <td>Product Name 14</td>
              <td>Product Name 14</td>
              <td>Product Name 14</td>
              <td>Product Name 14</td>
            </tr>

            <tr>
              <td>Product Name 15</td>
              <td>Product Name 15</td>
              <td>Product Name 15</td>
              <td>Product Name 15</td>
              <td>Product Name 15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
