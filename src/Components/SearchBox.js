import React,{Component} from "react";

class SearchBox extends Component{
    printhello(){
        console.log("Hello");
    }   
    render(){       
        return(
            <input className="pa3 ba b--green bg-lightest-blue "
            type='search'
            placeholder="Search Robots"
            onChange={this.props.searchChange}
            />
        )
    }
}
export default SearchBox ;


