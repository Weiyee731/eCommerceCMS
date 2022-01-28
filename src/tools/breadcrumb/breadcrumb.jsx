// react
import React from 'react';

// third-party
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// application
import { ArrowRoundedRight6x9Svg } from '../../assets/svg';

function PageHeader(props) {
    let { header, breadcrumb } = props;

    if (header) {
        header = (
            <div className="page-header__title">
                <h1>{header}</h1>
            </div>
        );
    }

    if (breadcrumb.length > 0) {
        const lastIndex = breadcrumb.length - 1;

        breadcrumb = breadcrumb.map((item, index) => {
            let link;
            console.log("breadcrumb", item)

            if (lastIndex === index) {
                link = (<li key={index} aria-current="page">  {item.title}  </li>);
            }
            else {
                link = (
                    <li key={index} style={{ paddingRight: "10px" }}>
                        <Link style={{ textDecoration: "none" }} to={item.url}>
                            {item.title} {"    "}<ArrowRoundedRight6x9Svg className="breadcrumb-arrow" />
                        </Link>
                        {/* {item.title} {"    "}
                        <ArrowRoundedRight6x9Svg className="breadcrumb-arrow" /> */}
                    </li>
                );
            }

            return link;
        });

        breadcrumb = (
            <div className="page-header__breadcrumb">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        {breadcrumb}
                    </ol>
                </nav>
            </div>
        );
    }

    return (
        <div className="page-header">
            <div className="page-header__container container">
                {breadcrumb}
                {/* {header} */}
            </div>
        </div>
    );
}

PageHeader.propTypes = {
    /** page header */
    header: PropTypes.node,
    /** array of breadcrumb links */
    breadcrumb: PropTypes.array,
};

PageHeader.defaultProps = {
    breadcrumb: [],
};

export default PageHeader;
