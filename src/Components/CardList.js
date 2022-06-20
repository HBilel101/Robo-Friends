import React,{Component} from "react";

import Card from "./Card";

class CardList extends Component {
    render(){
        const {robots} = this.props ;
        return (
            <div>
                {
                    robots.map((value,index)=>{
                        return(
                            <Card 
                            key={index}
                            id={robots[index].id}
                            name ={robots[index].name}
                            email = {robots[index].email}    
                            />
                        )
                    })
                }
            </div>
        )
    }
}
export default CardList ;