import styles from "./styles.module.scss"
import React from "react";
import Image, {StaticImageData} from "next/image";

const WorkCategory: React.FC<{ name: string, image: StaticImageData }> = (props) => {
    const {name, image} = props;

    return(
        <div className={styles.imgaeContainer}>
            <p>{name}</p>
            <Image src={image} alt="work_category_img" fill />
        </div>
    )
}

export default WorkCategory;