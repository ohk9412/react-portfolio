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
                <img className={styles.img} src='/lotto.png'/>
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
                <button
                className={styles.button}
                onClick={() => window.open('https://ohk9412.github.io/react-lotto/','_blank')}
                >WEB</button>
                </div>
            </div>
        </div>
        <div className={styles.reactform}>
        <h2 className={styles.title2}>
                <span>Habit Tracker</span>
            </h2>
            <div className={styles.introduce}>
                <img className={styles.img} src='/habit.png'/>
                <div>
                <h4>
                " 리액트를 학습하며 제작한 클론코딩 "
                </h4>
                <p className={styles.contents}>
                이름 그대로 내가 지키고 싶은 행동들을 체크하며 습관화 시키기 위한 웹.<br />
                원하는 내용을 적어 추가할 수 있으며 버튼을 이용해 횟수를 늘리거나 줄일 수 있습니다.
                <br />
                </p>
                <button
                className={styles.button}
                onClick={() => window.open('https://ohk9412.github.io/react_react-basic_habit-tracker/','_blank')}
                >WEB</button>
                </div>
            </div>
        </div>
        </>
    )
};

export default ReactProject;