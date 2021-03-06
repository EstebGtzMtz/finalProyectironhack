import React,{useContext, useEffect} from 'react';
import { MyContext } from '../context';
import {Box,Input,Flex, FormControl, Textarea, useToast} from '@chakra-ui/core';
import FormComponent from '../components/FormComponent';
import  NavbarTopComponent from '../components/NavbarTopComponent';
import { NavbarComponent } from '../components/NavbarComponent';
import CardQuestionAdvanceComponent from '../components/CardQuestionAdvanceComponent';

const AdminAdvanceExam = ({history}) => {
    const context = useContext(MyContext);
    const toast = useToast();
    const {advanceQuestions} = context.state;

    useEffect(()=>{
        context.handleGetAdvanceExamQuestions().then().catch();
    }, [])
    
    const submit = e => {
        context
          .handleAdvanceExamSubmit(e)
          .then(res => {
              context.handleGetAdvanceExamQuestions().then().catch();
            toast({
                title: "Question created",
                description: "Everything it's ok",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
          })
          .catch(err => {
            toast({
                title: "Error",
                description: "Something wrong creating the question",
                status: "warning",
                duration: 9000,
                isClosable: true,
            });
          });
      };

    return (
        <MyContext.Consumer>
        {context=>{
             const {isLoggedIn, isAdmin} = context.state;
             if(isLoggedIn && isAdmin){
             return(
            <Box w="100vw" h="100%" bgImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583295325/finalProyectIronhack/backgroundNewsAndExam.png')" bgPos="center">
                <Flex w="100vw" h="100%" align="center" justify="center" flexDir="column" paddingTop='100px' paddingBottom='60px'>
                    <NavbarTopComponent/>
                    <FormComponent title='Create Advance Exam Question' submit={submit}>
                        <FormControl isRequired>
                            <Textarea
                                placeholder='Question'
                                name='AdvanceQuestion'
                                type='text'
                                value={context.state.formAdvanceExam.AdvanceQuestion}
                                onChange={context.handleAdvanceExamInput}
                                borderRadius='25px'
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <Input 
                                placeholder='Answer 1'
                                name='AdvanceAnswer1'
                                type='text'
                                value={context.state.formAdvanceExam.AdvanceAnswer1}
                                onChange={context.handleAdvanceExamInput}
                                borderRadius='25px'
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <Input 
                                placeholder='Answer 2'
                                name='AdvanceAnswer2'
                                type='text'
                                value={context.state.formAdvanceExam.AdvanceAnswer2}
                                onChange={context.handleAdvanceExamInput}
                                borderRadius='25px'
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <Input 
                                placeholder='Answer 3'
                                name='AdvanceAnswer3'
                                type='text'
                                value={context.state.formAdvanceExam.AdvanceAnswer3}
                                onChange={context.handleAdvanceExamInput}
                                borderRadius='25px'
                            />
                        </FormControl>
                        <FormControl >
                            <Input 
                                placeholder='Answer 4'
                                name='AdvanceAnswer4'
                                type='text'
                                value={context.state.formAdvanceExam.AdvanceAnswer4}
                                onChange={context.handleAdvanceExamInput}
                                borderRadius='25px'
                            />
                        </FormControl>
                        <FormControl >
                            <Input 
                                placeholder='Correct answer'
                                name='AdvanceCorrectAnswer'
                                type='text'
                                value={context.state.formAdvanceExam.AdvanceCorrectAnswer}
                                onChange={context.handleAdvanceExamInput}
                                borderRadius='25px'
                            />
                        </FormControl>
                    </FormComponent>
                    {advanceQuestions.map((el, idx) => {
                            return (
                                <CardQuestionAdvanceComponent advanceQuestions={el} key={idx}/>
                            )
                        })} 
                </Flex>
                <NavbarComponent/>
             </Box>
             )
            }else{
                history.push('/profile');
            }}
        }
    </MyContext.Consumer>
    )
}

export default AdminAdvanceExam