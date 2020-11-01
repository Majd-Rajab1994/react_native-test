import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homestack';

const RootDrawer = createDrawerNavigator({
    Home:{
        screen: HomeStack,
    }
})

export default createAppContainer(RootDrawer);