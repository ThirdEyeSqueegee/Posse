import React from 'react';
import cx from 'classnames';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import s from './Sidebar.module.scss';
import LinksGroup from './LinksGroup';


class Sidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <nav
                className={cx(s.root)}
                ref={(nav) => {
                    this.element = nav;
                }}
            >
                <header className={s.logo}>
                    <a href="InsertHomePageLink"><span
                        className="fw-bold">Posse</span></a>
                </header>
                <ul className={s.nav}>
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Dashboard"
                        isHeader
                        iconName="flaticon-home"
                        link="/app/main"
                        index="main"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Profile"
                        isHeader
                        iconName="flaticon-network"
                        link="/app/profile"
                        index="core"
                    />
                </ul>

            </nav>
        );
    }
}

function mapStateToProps(store) {
    return {

    };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
