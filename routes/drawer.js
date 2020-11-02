import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homestack';
import Tablestack from './tablestack'

const RootDrawer = createDrawerNavigator({
    Home:{
        screen: HomeStack,
    },
    Table:{
        screen: Tablestack,
    }
})

export default createAppContainer(RootDrawer);