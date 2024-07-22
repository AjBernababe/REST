import { v4 as uuid } from 'uuid';

//Adds id property to an Object
function addID(obj) {
    obj.id = uuid()
}

export default addID;