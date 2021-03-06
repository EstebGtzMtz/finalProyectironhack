import React from 'react';
import {MyContext} from '../context';
import {Box, Flex, Heading, Image } from '@chakra-ui/core';
import BoxNumberComponent from '../components/BoxNumberComponent';
import { NavbarComponent } from '../components/NavbarComponent';
import {Link} from 'react-router-dom';
import Card from '../components/Card';


const Profile =({history})=>{
    return (
        <MyContext.Consumer>
            {context => {
                const {isLoggedIn, isAdmin} = context.state;
                if(isLoggedIn){
                return(
                <Box w="100vw" h="100%" bgImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583295325/finalProyectIronhack/backgroundProfile.png')" bgPos="center" bgRepeat="no-repeat">
                    <Flex w="100vw" h="100vh" flexDir="column" alignItems="center" pt="50px" >
                        <Flex w="100vw" align="center" direction="column"> 
                            <Heading alignSelf="start" as="h1" size="lg" pb="2vh" pl="5vw">Good morning {context.state.loggedUser.name} !!!</Heading>
                            <Image rounded="full" size="170px" src={context.state.loggedUser.image} alt={context.state.loggedUser.name}/>
                        </Flex>
                    <Flex w="90vw" h="15vh" boxShadow='2xl' borderRadius="25px" align="center" justify='center' mt="2vh" direction="column" backgroundColor='#FFFF'> 
                        <Heading size="sm" color='#5DD432'>You're on a 5 day Streak</Heading>
                        <Flex w='80vw' h='40%' justify='center' align='center' direction="row" mt='10px'>
                            <BoxNumberComponent/>
                            <BoxNumberComponent/>
                            <BoxNumberComponent/>
                            <BoxNumberComponent/>
                            <Flex borderRadius='md' border='1px'borderColor='#5DD432' backgroundColor='white' width="16%" h='95%' justify='center' align='center' mr="5px"  direction='column'>
                                <Heading size="xs" color="#5DD432" border="none">7.5</Heading>
                                <Heading size="xs" color="#5DD432" border="none">hours</Heading>
                            </Flex>
                        </Flex>
                    </Flex>
                    {isAdmin &&                     
                        <Link exact to='/profile/adminDashboard'>    
                            <Card customHeight='15vh' cardBackgroundColor='#42ADED' title='Admin Dashboard'></Card>
                        </Link>
                    }
                <Link exact to='/profile/selectFavouriteCategories'>    
                    <Card customHeight='15vh' cardBackgroundColor='#7BEEF2' title='Add Favourite Categories'></Card>
                </Link>
                </Flex>
                <NavbarComponent />
            </Box>
                )
            }else{
                history.push('/login');
            }
        }}
        </MyContext.Consumer>
    )   
}


export default Profile;

Profile.contextType = MyContext;