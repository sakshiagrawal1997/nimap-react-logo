import React from 'react';
import {useState} from 'react';
import Login from './LoginWidget';
import '../App.css';
function HomePage({selected, setSelected}) {
    const loggedInUser = parseInt(localStorage.getItem("user_name"));
    
        const [isActive, setIsActive] = useState(false);
        if(!loggedInUser){ return(<div><h1 className="text-center">Please Login First</h1> <Login /></div>);}
        if(loggedInUser){
        const options = ['React', 'Vue', 'Angular']
        var mytext = '';
        if(selected === 'React'){
            mytext = 'React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.'
        }
        if(selected === 'Vue'){
            mytext = 'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.'
        }
        if(selected === 'Angular'){
            mytext = 'Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.'
        }
        return (
            <div className="container1 ml-3 px-3 mt-4">
                <div className="dropdown ">
                <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
                    Dropdown
                    <span className="fas fa-caret-down"></span>
                </div>
                {isActive && (
                    <div className="dropdown-content">
                        
                        {options.map((option) => (
                            <div onClick={e => {
                                setSelected(option); 
                                setIsActive(false);
                            }}
                            className="dropdown-item">{option}</div>
                        ))}
                        
                    </div>
                )}
                </div>
                <div className="info-content ">
                    {mytext}
                </div>
            </div>
        );
        }
        
                        
}

export default HomePage;
