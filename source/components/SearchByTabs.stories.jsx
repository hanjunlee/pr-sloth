import React from 'react';
import SearchByTabs from './SearchByTabs';

export default {
    title: 'Components/SearchByTabs',
    component: SearchByTabs,
}
const Template = (args) => <SearchByTabs {...args} />

export const Default = Template.bind({});
Default.args = {
    searchBys: [
        {
            display: 'Created',
            value: 'author',
        },
        {
            display: 'Assigned',
            value: 'assignee',
        },
        {
            display: 'Mentioned',
            value: 'mentions',
        },
        {
            display: 'Review requests',
            value: 'review-requested',
        },
    ],
    onSearchByChange: function (value) { },
};
