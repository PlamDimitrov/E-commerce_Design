import React, { useEffect, useRef } from 'react';
import styles from './ProductSubTabs.module.css';

import sizes from '../../assets/img/Sizes.png';

const ProductSubTabs = (props) => {
    const videoUrl = props.videoUrl

    const activate = (e) => {
        resetAllTabs();
        e.target.className = `${styles["tab"]} ${styles["active"]}`;
        document.querySelector(`.${styles[clearSpaces(e.target.textContent)]}`).className = `${styles[clearSpaces(e.target.textContent)]} ${styles["active"]}`
    }

    const resetAllTabs = () => {
        const allTabs = document.querySelectorAll(`.${styles["tab"]}`);
        allTabs.forEach(node => {
            node.className = `${styles["tab"]}`;
            document.querySelector(`.${styles[clearSpaces(node.textContent)]}`).className = `${styles[clearSpaces(node.textContent)]}`;
        });
    }

    const clearSpaces = (string) => {
        const text = string;
        return text.split(' ').join('');
    }

    useEffect(() => {
        document.querySelector(`.${styles["tab"]}`).className = `${styles["tab"]} ${styles["active"]}`;
        document.querySelector(`.${styles["description"]}`).className = `${styles["description"]} ${styles["active"]}`;
        console.log(clearSpaces("asda asdasd"));
    }, [])

    return <div className={styles["product-subtabs"]}>
        <div className={styles["tabs"]}>
            <span onClick={activate} className={styles["tab"]}>description</span>
            <span onClick={activate} className={styles["tab"]}>video</span>
            <span onClick={activate} className={styles["tab"]}>size and specs</span>
            <span onClick={activate} className={styles["tab"]}>delivery and returns</span>
            <span onClick={activate} className={styles["tab"]}>reviews</span>
        </div>
        <div className={styles["tab-content"]}>
            <div className={`${styles["description"]}`}>
                <span className={styles["title"]}>
                    Nunc egestas posuere enim, eu maximus erat posuere eget
                </span>
                <span className={styles["text"]}>
                    Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.

                    Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.
                </span>
            </div>
            <div className={`${styles["video"]}`}>
                <iframe width="560" height="315" src={videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className={`${styles["sizeandspecs"]}`}>
                <span className={styles["title"]}>
                    Sizes chart
                </span>
                <img src={sizes} alt="sizes" />
            </div>
            <div className={`${styles["deliveryandreturns"]}`}>
                <span className={styles["title"]}>
                    Delivery and returns
                </span>
                <span className={styles["text"]}>
                    Some delivery and returns text
                </span>
            </div>
            <div className={`${styles["reviews"]}`}>
                <span className={styles["title"]}>
                    Reviews:
                </span>
                <span className={styles["text"]}>
                    Reviews component to be created and put here
                </span>
            </div>
        </div>
    </div>
};

export default ProductSubTabs;