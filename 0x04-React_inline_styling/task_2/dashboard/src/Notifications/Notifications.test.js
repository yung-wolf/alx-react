import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
//  using StyleSheetTestUtils.suppressStyleInjection at the top of your test file, to prevent issues with style injections
import { StyleSheetTestUtils } from 'aphrodite';

// {listNotifications.map(notification => <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} id={notification.id} markAsRead={this.markAsRead} />)}


const listNotifications = [
  { id: 1, type: 'default', value: 'New course available', html: {__html: 'New course available'} },
  { id: 2, type: 'urgent', value: 'New resume available', html: {__html: 'New resume available'} },
  { id: 3, type: 'urgent', valie: 'latestNotification', html: { __html: "getLatestNotification"} },
]

describe('<Notifications />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  // Renders the Notifications without crashing
  it('renders without crashing', () => {
    shallow(<Notifications listNotifications={listNotifications}/>);
  })

  // verify that Notifications renders correctly if you pass an empty array or 
  // if you don’t pass the listNotifications property
  it('renders correctly when listNotifications = []', () => {
    const wrapper = shallow(<Notifications listNotifications={[]}/>)
  })

  // verify that Notifications renders three list items when displayDrawer is true
  it('renders three list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    expect(wrapper.find(NotificationItem).length).toEqual(3);
    const notificationItems = wrapper.find(NotificationItem);
    notificationItems.forEach(item => {
      const listItem = item.dive();
      expect(listItem.type()).toEqual('li');
    });})

  // verify that when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is displayed
  it('message Here is the list of notifications is not displayed, but No new notification for now is displayed', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]}/>);
    expect(wrapper.contains(<strong>No new notification for now</strong>))
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(false);
  })

  // verify that Notifications renders the text Here is the list of notifications
  // it('renders the text Here is the list of notifications', () => {
  //   const wrapper = shallow(<Notifications />);
  //   expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(true);
  // })

  // Add a check that the div.Notifications is not being displayed when displayDrawer is false
  it('div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications listNotifications={listNotifications}/>);
    expect(wrapper.find('div.Notifications').exists()).toBe(false);
  })
})
