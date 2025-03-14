import PropTypes from "prop-types";
import FriendListItem from "./FriendsItem";
const Friendlist=({friends})=>{
    return(
        <ul className="friend-list">
            {friends.map(({avatar,name,isOnline,id})=>(
                <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id}/>
            ))}
        </ul>
    )
}
Friendlist.propTypes={
    friends:PropTypes.array.isRequired
}
export default Friendlist