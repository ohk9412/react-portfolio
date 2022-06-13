import React from 'react';
import styles from './reactProject.module.css'

const ReactProject = (props) => {
    // const handleclick = evnet => {
    //     window.location.href = "https://ohk9412.github.io/react-lotto/"
    // }
    return(
        <>
        <div className={styles.reactform}>
            <h2 className={styles.title}>
                <span>로또번호추출기</span>
            </h2>
            <div className={styles.introduce}>
                <img className={styles.img} src={process.env.PUBLIC_URL + '/lotto.png'}/>
                <div>
                <h4>
                " 리액트를 이용해 간단하게 만든 로또 번호 추출 웹 "
                </h4>
                <p className={styles.contents}>
                번호를 버튼으로 만들어 클릭하는 횟수에 따라 다르게 반응하도록 했습니다.<br />
                한 번 눌렷을때 는 검은 색으로 바뀌면서 해당 번호를 숫자 리스트에 포함시키고
                두 번 눌렷을때 붉은 색으로 변하며 해당 번호를 숫자 리스트에서 제거합니다.<br />
                카카오 api를 이용해 번호를 카카오톡으로 공유할 수 있습니다.
                </p>
                <div className={styles.buttons}>
                    <button
                    className={styles.button}
                    onClick={() => window.open('https://github.com/ohk9412/react-lotto','_blank')}
                    >github
                    </button>
                    <button
                    className={styles.button}
                    onClick={() => window.open('https://ohk9412.github.io/react-lotto/','_blank')}
                    >WEB
                    </button>
                </div>
                </div>
            </div>
        </div>
        <div className={styles.reactform}>
            <h2 className={styles.title2}>
                <span>Habit Tracker</span>
            </h2>
            <div className={styles.introduce}>
                <img className={styles.img} src={process.env.PUBLIC_URL + '/habit.png'}/>
                <div>
                <h4>
                " 리액트를 학습하며 제작한 클론코딩 "
                </h4>
                <p className={styles.contents}>
                내가 지키고 싶은 행동들을 체크하며 습관화 시키기 위한 웹.<br />
                원하는 내용을 적어 추가할 수 있으며 버튼을 이용해 횟수를 늘리거나 줄일 수 있습니다.
                <br />
                </p>
                <div className={styles.buttons}>
                <button
                    className={styles.button}
                    onClick={() => window.open('https://github.com/ohk9412/react_react-basic_habit-tracker','_blank')}
                    >github
                    </button>
                <button
                className={styles.button}
                onClick={() => window.open('https://ohk9412.github.io/react_react-basic_habit-tracker/','_blank')}
                >WEB</button>
                </div>
                </div>
            </div>
        </div>
        <div className={styles.reactform}>
            <h2 className={styles.title}>
                <span>Youtube</span>
            </h2>
            <div className={styles.introduce}>
                <img className={styles.img} src={process.env.PUBLIC_URL + '/youtube.png'}/>
                <div>
                <h4>
                " 리액트를 학습하며 제작한 클론코딩 "
                </h4>
                <p className={styles.contents}>
                유튜브 api를 이용해 유튜브를 간략하게 구현한 웹.<br />
                기본 화면으로 인기동영상을 가져오고 검색 기능으로 원하는 영상을 찾아 볼 수 있습니다.
                <br />
                </p>
                <div className={styles.buttons}>
                <button
                    className={styles.button}
                    onClick={() => window.open('https://github.com/ohk9412/react-youTube','_blank')}
                    >github
                    </button>
                <button
                className={styles.button}
                onClick={() => window.open('https://ohk9412.github.io/react-youTube/','_blank')}
                >WEB</button>
                </div>
                </div>
            </div>
        </div>
        <div className={styles.reactform}>
            <h2 className={styles.title2}>
                <span>Card Maker</span>
            </h2>
            <div className={styles.introduce}>
                <img className={styles.img} src={process.env.PUBLIC_URL + '/card.png'}/>
                <div>
                <h4>
                " 리액트를 학습하며 제작한 클론코딩 "
                </h4>
                <p className={styles.contents}>
                사진을 받아와 원하는 명함을 만들 수 있게 한 웹.<br />
                파이어베이스를 이용해 로그인 기능과 데이터베이스를 이용했으며
                클라우디너리의 이미지 업로드 api를 이용해 사진을 업로드 시켰습니다.
                <br />
                </p>
                <div className={styles.buttons}>
                <button
                    className={styles.button}
                    onClick={() => window.open('https://github.com/ohk9412/card-maker','_blank')}
                    >github
                    </button>
                <button
                className={styles.button}
                onClick={() => window.open('https://ohk9412.github.io/card-maker/','_blank')}
                >WEB</button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default ReactProject;