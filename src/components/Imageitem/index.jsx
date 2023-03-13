import styles from "./imageItem.module.css"
import { Col } from "antd"

export default function ImageItem({image}){
    return(
      
      <Col
      className={styles.image}
      key={image.title}
  >
                <a href="" className={styles.imageLink}>
                  <img src={image.images} alt="" className={styles.imageStyle} />
                </a>
                <p className={styles.imageTitle}>{image.title}</p>
              </Col>
        
    )
}