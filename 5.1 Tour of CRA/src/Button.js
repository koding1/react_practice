import PropTypes from "prop-types";
import styles from "./Button.module.css" // 5.1 css를 react-create-app이 js로 변환한다. styles object가 btn을 가지고 있음

function Button({text}) {
    return(
        <button className = {styles.btn}>{text}</button>
    ); //5.1 styles.btn의 class명을 cosole에서 확인해보면 랜덤한 class 명을 가진다.
} // 5.1 ex) class="Button_btn__2+fuR" 이런 식으로..

Button.propTypes = {
    text: PropTypes.string.isRequired,
};
export default Button;