import { Container, Row } from "react-bootstrap"
import items from "../Data/items.json";
import Storeitem from "./Storeitem";
const Store = () => {
  return (
    <Container>
    <Row xs={1} sm={2} md={3} className="g-4">
          {items.map((item)=>(
            <Storeitem key={item.id} item ={item} />
          ))}
    </Row>
    </Container>
  )
}

export default Store