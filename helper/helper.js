import { v4 as uuid } from 'uuid';

function addID(obj) {
    obj.id = uuid()
}

export default addID;