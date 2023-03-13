import images from "../../json/image.json";
import ImageItem from "../Imageitem";
import styles from "./imageList.module.css"
import {Row, Col} from "antd"

export default function ImageList(){
    return(
        <Row gutter={[32,32]} className={styles.conmar}>
            {images.map(image =>(
                <Col
                key={image.id}
                sm={{span:12}}
                lg={{span:6}}
                xl={{span:6}}
                xxl={{span:6}}
                >
                     <ImageItem key={image.id} image={image}/>
                </Col>
               
            ))}
        </Row>
    );
}