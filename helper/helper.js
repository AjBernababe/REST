import { v4 as uuid } from 'uuid';

//Adds id property to an Object
export function addID(obj) {
    obj.id = uuid()
}