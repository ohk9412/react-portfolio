import React from 'react';
import styles from './home.module.css'

const Home = (props) => {
    return(
        <div className={styles.home}>
                <h2 className={styles.title}>
                    <span>ABOUT ME</span>
                    <span className={styles.after} />
                </h2>
            <div className={styles.introduce}>
                <img className={styles.img} src='/3.jpg'/>
                <h4 className={styles.abmetitle}>EDUCATUON/EXPERIENCE</h4>
                <div className={styles.abmelist}>
                <div>
                    <p>동명대학교 </p>
                    <p>과학기술통신부 </p>
                </div>
                <div>
                    <p>항만물류시스템 학사</p>
                    <p>2021년 혁신성장 청년인재 집중 양성사업</p>
                </div>
                <div>
                    <p>2013.03-2020.02</p>
                    <p>2021.05-2021.11</p>
                </div>
                <div></div>
                </div>
                <h4 className={styles.abmetitle}>SKILLS</h4>
                <div className={styles.abmelist}>
                    <div>
                        <h5>Python</h5>
                        <p>Flask</p>
                        <p>Django</p>
                        <p>Pandas</p>
                        <p>PyTorch</p>
                        <p>tensorflow</p>
                        <p>Keras</p>
                    </div>
                    <div>
                        <h5>CSS</h5>
                        <p>Post CSS</p>
                        <p>반응형 모델링</p>
                    </div>
                    <div>
                        <h5>JavaScript</h5>
                        <p>react</p>
                        <p>react-hook</p>

                    </div>
                    <div>
                        <h5>ETC</h5>
                        <p>Firebase</p>
                        <p>github</p>
                        <p>MySQL</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default Home;