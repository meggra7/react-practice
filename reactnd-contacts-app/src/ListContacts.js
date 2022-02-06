import React, {Component} from "react";
import Contact from "./Contact";

class ListContacts extends Component {
    render() {
        return (
            <ol className='contact-list'>
                {this.props.contacts.map((contact) => <Contact key={contact.id} contact={contact} />)}
            </ol>
        );
    }
}

export default ListContacts;