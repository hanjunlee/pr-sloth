import React from 'react';
import { Signin } from './Signin';

export default {
    title: 'Views/Signin',
    component: Signin,
}

const Template = (args) => <Signin {...args} />

export const Default = Template.bind({});
Default.args = {
    setToken: (values) => { console.log(values) },
}
