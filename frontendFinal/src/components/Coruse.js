import {tsContructorType} from '@babel/types';
import React,{Component} from 'react';
import {variables} from './Variables'
import { useState } from 'react';
import { Button,ButtonToolbar} from 'react-bootstrap';
import {EditDepModal} from './EditDepModal';
import axios from 'axios';
import { useEffect } from 'react';



export default class Coruse extends Component{
    constructor(props){

        super(props);
        this.state = {
            courses:[],
            subject:"",
            rating:0,
            filterCourseRating :false,
            title:"",
            filterTitle:false,
            filterInstructor:false,
            filterPrice:false,
            reset:true,
            price:0,
            instructor:"",
            editModalShow:false,
            filterbyMostViewed:false,

        }
    }
    refreshList(){
        
        if (this.state.filterInstructor)
        {
           
                this.setState({

                    filterInstructor:false
                });
            
                fetch(variables.API_URL+'courses/filterCourseInstructor',
                    {
                        
                        method:'POST',
                        headers:{
                            'Accept':'application/json',
                            'Content-Type': "application/json; charset=utf-8",
                        },
                        body:JSON.stringify({
                            instructor:this.state.instructor,
                        })
                    })
                    .then(res=>res.json())
                    .then((result)=>{
                        this.setState({courses:result});

                    },(error)=>{
                        alert('Failed');
                    })
                    ;
                    console.log('filterd');
            }
            else if(this.state.filterPrice)
            {
                this.setState({
                    filterPrice:false
                });

                fetch(variables.API_URL+'courses/filterCoursePrice',
                    {
                        
                        method:'POST',
                        headers:{
                            'Accept':'application/json',
                            'Content-Type': "application/json; charset=utf-8",
                        },
                        body:JSON.stringify({
                            price:this.state.price,
                        })
                    })
                    .then(res=>res.json())
                    .then((result)=>{
                        this.setState({courses:result});

                    },(error)=>{
                        alert('Failed');
                    })
                    ;
                    console.log('filterd');
            }
            else if(this.state.filterTitle)
            {
                this.setState({
                    filterTitle:false
                });

                fetch(variables.API_URL+'courses/filterCourseTitle',
                    {
                        
                        method:'POST',
                        headers:{
                            'Accept':'application/json',
                            'Content-Type': "application/json; charset=utf-8",
                        },
                        body:JSON.stringify({
                            title:this.state.title,
                        })
                    })
                    .then(res=>res.json())
                    .then((result)=>{
                        this.setState({courses:result});

                    },(error)=>{
                        alert('Failed');
                    })
                    ;
                    console.log('filterd');
            }
            else if(this.state.filterCourseRating)
            {
                this.setState({
                    filterCourseRating:false
                });

                fetch(variables.API_URL+'courses/filterCourse',
                    {
                        
                        method:'POST',
                        headers:{
                            'Accept':'application/json',
                            'Content-Type': "application/json; charset=utf-8",
                        },
                        body:JSON.stringify({
                            rating:this.state.rating,
                            subject:this.state.subject
                        })
                    })
                    .then(res=>res.json())
                    .then((result)=>{
                        this.setState({courses:result});

                    },(error)=>{
                        alert('Failed');
                    })
                    ;
                    console.log('filterd');
            }
                            
        else if(this.state.reset){
            fetch(variables.API_URL+'courses/getAll')
            .then(response=>response.json())
            .then(data => {
                this.setState({courses:data});
            });
        }
        else if(this.state.filterbyMostViewed)
        {
            fetch(variables.API_URL+'courses/mostViewedCourses')
            .then(response=> response.json())
            .then(data => {
                this.setState({courses:data});
            } );
        }
    }
    componentDidMount(){
        this.refreshList();
    }
    changeSubject = (e)=>{
        this.setState({subject:e.target.value});
    }
    changeRating = (e)=>{
        this.setState({rating:e.target.value});
    }
    changePrice = (e)=>{
        this.setState({price:e.target.value});
    }
    changeInstructor =(e)=>{
        this.setState({instructor:e.target.value});
    }
    changeTitle =(e)=>{
        this.setState({title:e.target.value});
    }
    addClick(){
        this.setState({
           reset:true,
            instructor:"",
            title:"",
            price:"",
            Rating : "",
            Subject : ""
        },this.refreshList());
        this.refreshList();
        console.log(this.state.rating);
    }
    createClick(){
        this.setState({
            reset:false
        });

        if (this.state.instructor!="")
        {
        this.setState({
            filterInstructor:true
        });
        }else if (this.state.price!="")
        {
            this.setState({
                filterPrice:true
            });
        }
        else if (this.state.title!="")
        {
            this.setState({
                filterTitle:true
            });
        }else if(this.state.rating!="" || this.state.subject!="")
        {
            this.setState({
                filterCourseRating:true
            });
        }
        else {
            this.setState({
             filterbyMostViewed:true
            })
        }
//////
     



//////
        this.refreshList();

        // fetch(variables.API_URL+'Depratment',
        // {
            
        //     method:'POST',
        //     headers:{
        //         'Accept':'application/json',
        //         'Content-Type': "application/json; charset=utf-8",
        //     },
        //     body:JSON.stringify({
        //         subject:this.state.subject
        //     })
        // })
        // .then(res=>res.json())
        // .then((result)=>{
        //     alert(result);
        //     this.refreshList();
        // },(error)=>{
        //     alert('Failed');
        // })
        // ;
    }

    filterTitleOrInstructor(){
        const titleVal = this.state.title;
        fetch(variables.API_URL+'courses/getCourseByTitleorInst',
                    {
                        
                        method:'POST',
                        headers:{
                            'Accept':'application/json',
                            'Content-Type': "application/json; charset=utf-8",
                        },
                        body:JSON.stringify({
                            title:this.state.title
                                                })
                    })
                    .then(res=>res.json())
                    .then((result)=>{
                        this.setState({courses:result});

                    },(error)=>{
                        alert('Failed');
                    })
                    ;
        
    }
    render(){

        const {
            deps, CourseID,courseTitle,CoursePrice,
            CourseSubtitles,
            totalHours,
            exercisesDetails,
            courseOutline,
            noOfViews,
            noOfBuyers,            
            courses,
            subject,
            rating,
            modalTitle,
            filterCourseRating,
            title,
            instructor,
            price,
            filterTitle,
            filterInstructor,
            filterPrice,
            editModalShow
        } = this.state; 
        let editModalClose=()=>this.setState({editModalShow:false});

        return(
            <>
            <div>
                    <button type='button' className='btn btn-primary m-2 float-end'
                    
                    onClick={()=>this.addClick()}
                    >
                    reset
                    </button>
<br></br>
                    <span className='input-group-text'>Search With Title or Instructor</span>

                    <input type='text' className='form-control' value={title}
                                        onChange={this.changeTitle}
                                        ></input>
                    <button type='button' className='btn btn-primary m-2 float-end'
                    onClick={()=>this.filterTitleOrInstructor()}
                    >
                    Search
                    </button>

                    <table className='table table-striped'>
                        <thead>

                            <tr>
                               
                                <th>
                                    Price
                                </th>
                                
                                <th>
                                    Title
                                </th>
                                
                               
                                <th>
                                    Course Rating
                                </th>
                                <th>
                                    Total Hours
                                </th>
                                <th>
                                    Show Details
                                </th>
                                

                                
                            </tr>
                        </thead>

                    <tbody>
                        {
                        
                        courses.map(
                                    dep=> <tr key={dep._id}>
                                        
                                        <td>{dep.price}</td>
                                        <td>{dep.title}</td>
                                        
                                        <td>{dep.rating}</td>
                                        <td>{dep.totalHours}</td>

                                        <td>
                                        <ButtonToolbar>
                                    <Button className="mr-2" variant="info"
                                        // onClick={()=>this.setState({editModalShow:true,
                                        //     CourseID:dep._id,
                                        //     courseTitle:dep.title,
                                        //     CourseSubtitles:dep.subtitles,
                                        //     CoursePrice:dep.price,
                                        //     instructor:dep.instructor,
                                        //     rating :dep.rating,
                                        //     exercisesDetails : dep.exercisesDetails,
                                        //     courseOutline :dep.courseOutline,
                                        //     totalHours:dep.totalHours,
                                        //     noOfBuyers:dep.noOfBuyers,
                                        //     noOfViews:dep.noOfViews,
                                        //     subject:dep.subject
                                            // })}
                                            onClick={() => window.location.href=`/StudentCoursePage?courseId=${dep._id}`}>
                                                View
                                            </Button>
                                            
                                            <EditDepModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            CourseID={CourseID}
                                            courseTitle={courseTitle}
                                            CoursePrice={CoursePrice}
                                            CourseSubtitles={CourseSubtitles}
                                            instructor={instructor}
                                            rating={rating}
                                            exercisesDetails={exercisesDetails}
                                            courseOutline={courseOutline}
                                            totalHours={totalHours}
                                            noOfBuyers={noOfBuyers}
                                            noOfViews={noOfViews}
                                            subject={subject}
                                            />
                                            
                                    </ButtonToolbar>
                                            
                                        </td>
                                         </tr>
                            )}
                    </tbody>
                    </table>
              
                    <div className='input-group mb-3'>
                                        <span className='input-group-text'>Subject</span>
                                        <input type='text' className='form-control' value={subject}
                                        onChange={this.changeSubject}
                                        ></input>

                                        <span className='input-group-text'>Rating</span>
                                        <input type='number' min='0' max='5' className='form-control' value={rating}
                                        onChange={this.changeRating}
                                        ></input>
                                        
                                        <span className='input-group-text'>Price</span>
                                        <input type='number' min='0' className='form-control' value={price}
                                        onChange={this.changePrice}
                                        ></input>
                                    
                                        <button type="button" className='btn btn-primary float-start' onClick={()=>this.createClick()}>Filter</button> 
                                        <button type="button" className='btn btn-primary float-start'onClick={()=>this.createClick()} >Most Viewed Courses </button> 


                    </div>
            </div>
            </>
        );
    }
}