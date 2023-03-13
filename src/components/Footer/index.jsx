import styles from "./footer.module.css"
import { Col, Row } from "antd"
export default function Footer(){
    return(
        <footer className={styles.footer}>
        <div className={styles.footerAbove}>
          <div className="container">
            <div className={styles.footerRow}>
            <Row className={styles.footerRow} >
            <Col
                     
                        className={styles.footerDescription} 
                    >
                        <h2>臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系</h2>
                    </Col>
                    <Col
                   
                    ></Col>
              <ul className={styles.footerList}>
                <li className={styles.footerItem}><a href="" className={styles.footerLink}><i className="fab fa-facebook-f"></i></a></li>
                <li className={styles.footerItem}><a href="" className={styles.footerLink}><i className="fab fa-google-plus-g"></i></a></li>
                <li className={styles.footerItem}><a href="" className={styles.footerLink}><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
              </Row>
            </div>
          </div>
        </div>
    
        <div className={styles.footerBelow}>
          <div className="container">
            <h6>
              &copy; Copyright All rights reserved.
            </h6>
          </div>
        </div>
      </footer>
    )
}