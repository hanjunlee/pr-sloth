import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';

export default class SearchByTabs extends React.Component {
    state = { currentValue: (this.props.searchBys.length > 0 ? this.props.searchBys[0].value : "") };

    render() {
        const { currentValue } = this.state;
        return (
            <Radio.Group
                onChange={e => {
                    this.setState({ currentValue: e.target.value });
                    this.props.onSearchByChange(e.target.value);
                }}
                value={currentValue}
                buttonStyle="solid"
                style={{ marginBottom: 8, borderRadius: "6px" }}>
                {
                    this.props.searchBys.map((item) =>
                        <Radio.Button key={item.value} value={item.value}>
                            {item.display}
                        </Radio.Button>
                    )
                }
            </Radio.Group>
        )
    }
}

SearchByTabs.propTypes = {
    /**
     * Array of objects.
     */
    searchBys: PropTypes.arrayOf(PropTypes.exact({
        display: PropTypes.string,
        value: PropTypes.string,
    })),
    /**
     * Function of onChange.
     */
    onSearchByChange: PropTypes.func,
}
