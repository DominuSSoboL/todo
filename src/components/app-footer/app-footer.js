import React from 'react';
import './app-footer.css';

const AppFooter = () => {
    return(
        <footer className="main-footer">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <p><a href="https://github.com/DominuSSoboL/todo"><i className="icon-github"></i></a></p>
                        <p>© Все права защищены. </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;