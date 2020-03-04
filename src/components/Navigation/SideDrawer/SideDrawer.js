import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

const sideDrawer = (props) => {
   
  let attachedCss =['SideDrawer', 'Close'];
      if (props.open) {
      attachedCss = ['SideDrawer', 'Open'];

    }
      
    return (

        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed}/>  
                
                <div className ={attachedCss.join(' ')}>
                    <div className= 'LogoSide'>
                    <Logo />
                    </div>
                
                    <nav>
                        <NavigationItems/>
                    </nav>
                  
                </div>
        </Auxiliary>
        
    );
};

export default sideDrawer;