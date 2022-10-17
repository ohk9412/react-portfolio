import React from 'react';
import styles from './pythonProject.module.css'

const PythonProject = (props) => {
    return(
        <>
        <div className={styles.reactform}>
            <h2 className={styles.title}>
                <span>NAVER-API</span>
            </h2>
            <div className={styles.introduce}>
                <img className={styles.img} 
                src={process.env.PUBLIC_URL + '/naver-api.png'}
                alt='naverapi'/>
                <div className={styles.contents}>
                <h4>
                " Django와 네이버 API를 이용해 만든 월별 상품 수요 분석 웹 "
                </h4>
                <p className={styles.script}>
                검색어를 입력하고 조회할 날짜를 넣어 찾으려고하는 물품에 대해 검색할 수 있습니다.<br />
                검색 상품 상위 광고명 조회 페이지에서는 해당 검색 제품에 대한 상위 광고명을 조회하고
                쇼핑차트 페이지에선 찾아볼 카테고리를 조회할 날짜에 원하는 기간 별로 
                조회 및 조회 성비, 모바일환경인지 PC환경인지를 나타내는 원형차트를 보여줍니다. <br />
                데이터베이스를 이용해 로그인 및 게시판 기능또한 구현했습니다.
                </p>
                <div className={styles.buttons}>
                    <button
                    className={styles.button}
                    onClick={() => window.open('https://github.com/ohk9412/django-naver-API','_blank')}
                    >github
                    </button>
                </div>
                </div>
            </div>
        </div>
        <div className={styles.reactform}>
            <h2 className={styles.title2}>
                <span>Venture Company</span>
            </h2>
            <div className={styles.introduce}>
                <img className={styles.img} src={process.env.PUBLIC_URL + '/venture.png'} alt='venture'/>
                <div className={styles.contents}>
                <h4>
                " Django와 공공데이터 포털 시스템의 csv파일을 이용한 분석 웹 "
                </h4>
                <p className={styles.script}>
                전국의 벤처기업의 위치와 정보를 담은 웹.<br />
                csv파일을 데이터베이스에 담아내어 원하는 지역을 검색해 해당되는 기업들을 보여줍니다.
                그 외 각종 차트로 벤처기업의 데이터를 가시화 시켰습니다.
                <br />
                </p>
                <div className={styles.buttons}>
                <button
                    className={styles.button}
                    onClick={() => window.open('https://github.com/ohk9412/django-venture','_blank')}
                    >github
                    </button>
                </div>
                </div>
            </div>
        </div>
        <div className={styles.reactform}>
            <h2 className={styles.title}>
                <span>Vision Inspection</span>
            </h2>
            <div className={styles.introduce}>
                <img className={styles.img} src={process.env.PUBLIC_URL + '/vision.png'} alt='vision'/>
                <div className={styles.contents}>
                <h4>
                " SinGAN과 Resnet을 이용한 비전검사 프로그램 "
                </h4>
                <p className={styles.script}>
                Singan을 이용해 하나의 데이터를 이용해 여러개의 데이터로 만들어 내고 Resnet으로 학습시켜 검사를 진행합니다.<br />
                OpenCv를 이용해 검사하려는 제품의 어느 부분이 오류인지를 보여주며 검사하는 동안 몇개의 제품에 오류가 있었는지를 데이터테이블형식으로 볼 수 있습니다.
                <br />
                </p>
                </div>
            </div>
        </div>
        </>
    )
};

export default PythonProject;