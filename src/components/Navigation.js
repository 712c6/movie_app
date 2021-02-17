import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <div className="nav">
            {/* 
                a href가 전체 새로고침으로 동작하여 react요소가 제대로 기능하지 못하는 문제가 발생하므로
                react-router-dom에서 Link를 import하여 Link to를 대신 사용한다
             */}
            <Link to="/">Home</Link>
            <Link to={
                {
                    //이동 경로
                    pathname: "/about",
                    //props를 이용해 route로 정보를 보내고 있음
                    state: {
                        fromNavigation: true
                    }
                }
            }>About</Link>
        </div>
    );
}

export default Navigation;