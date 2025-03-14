import PropTypes from "prop-types";
import styled from "styled-components";

const colors=["#0588f4","#b803ff","#c92121","#6cad9e","#00f842"]
const ItemStyle=styled.li`
  display: block;
  max-height: 60px;
  max-width: 67px;
  color: #ffffff;
`
const Statics = ({stats}) => {
  return (  
    <ItemStyle className="item" style={{background:`${colors[stats.id]}`}}>
      <span className="label">{stats.label}</span>
      <span className="percentage">{stats.percentage}</span>
    </ItemStyle>
    
  );
};
Statics.propTypes={
    stats:PropTypes.object.isRequired,
    title:PropTypes.string
}
export default Statics