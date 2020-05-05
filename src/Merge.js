import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Merge extends Component{
	constructor(props){
    super(props);
	this.moviesByUsers = {}; 
   	this.props.profiles.forEach(profile =>{
            	if (this.moviesByUsers[profile.favoriteMovieID]) this.moviesByUsers[profile.favoriteMovieID].push(profile.userID);
      			else this.moviesByUsers[profile.favoriteMovieID]=[profile.userID];
            }
            )
    //console.log(this.moviesByUsers);
    } 
	render(){
    	return(
        	<ul className="display-movies-by-user">
          	{Object.keys(this.moviesByUsers).map((item)=>{
                if(item){
                    console.log("FILM: "+this.props.movies[item].name); 
                  	console.log("FILM key: "+this.props.movies[item].name);
                  	return(
                    	<li key="this.props.movies[item].name">{this.props.movies[item].name}
                        {Object.keys(this.moviesByUsers[item]).map((id)=>{
                          	return(
                                <ul>{
                                    Object.keys(this.props.users).map((user)=>{
                                        if(this.moviesByUsers[item][id]==this.props.users[user].id){
                                            console.log("HALOOOOO "+this.props.users[user].name);
                                          	console.log("USER key: "+this.props.users[user].id);
                                            return(
                                                <li key="this.props.users[user].id">{this.props.users[user].name}</li>
                                            );
                                        }
                                    })
                                }</ul>
                         );
                        })}
                    </li>
                    );
                }
  				else{
                    console.log("No one likes: "+this.props.movies[item].name);
                	return(  
                  		<li key="this.props.movies[item].name">{this.props.movies[item].name} no one likes</li>
                  	);	
                }
        	})
       		}
          	</ul>
    	)
    }
}

export default Merge